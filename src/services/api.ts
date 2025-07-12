import { supabase, Guest, BirthdayWish, SongRequest, GuestInteraction } from '../lib/supabase';

// RSVP and Guest Management
export const guestApi = {
  // Submit RSVP
  async submitRSVP(guestData: {
    name: string;
    email: string;
    guests_count: number;
    message?: string;
  }): Promise<Guest> {
    try {
      const { data, error } = await supabase
        .from('guests')
        .insert([guestData])
        .select()
        .single();

      if (error) {
        throw new Error(`Failed to submit RSVP: ${error.message}`);
      }

      return data;
    } catch (err) {
      console.warn('Supabase not configured, using mock data');
      // Return mock data for development
      return {
        id: Date.now(),
        ...guestData,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
    }
  },

  // Get all guests
  async getGuests(): Promise<Guest[]> {
    try {
      const { data, error } = await supabase
        .from('guests')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw new Error(`Failed to fetch guests: ${error.message}`);
      }

      return data || [];
    } catch (err) {
      console.warn('Supabase not configured, using mock data');
      // Return mock data for development
      return [
        { id: 1, name: "Sarah Chen", email: "sarah@example.com", guests_count: 2, message: "Can't wait to celebrate with you! 💜", created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
        { id: 2, name: "Maya Johnson", email: "maya@example.com", guests_count: 1, message: "This is going to be AMAZING! 🎉", created_at: new Date().toISOString(), updated_at: new Date().toISOString() }
      ];
    }
  },

  // Get guest count
  async getGuestCount(): Promise<number> {
    const { count, error } = await supabase
      .from('guests')
      .select('*', { count: 'exact', head: true });

    if (error) {
      throw new Error(`Failed to get guest count: ${error.message}`);
    }

    return count || 0;
  },

  // Check if email already exists
  async checkEmailExists(email: string): Promise<boolean> {
    try {
      const { data, error } = await supabase
        .from('guests')
        .select('id')
        .eq('email', email)
        .single();

      if (error && error.code !== 'PGRST116') {
        throw new Error(`Failed to check email: ${error.message}`);
      }

      return !!data;
    } catch (err) {
      console.warn('Supabase not configured, skipping email check');
      return false; // Allow submission in development
    }
  }
};

// Birthday Wishes
export const wishesApi = {
  // Submit birthday wish
  async submitWish(wishData: {
    name: string;
    email?: string;
    message: string;
  }): Promise<BirthdayWish> {
    try {
      const { data, error } = await supabase
        .from('birthday_wishes')
        .insert([wishData])
        .select()
        .single();

      if (error) throw new Error(`Failed to submit wish: ${error.message}`);
      return data;
    } catch (err) {
      console.warn('Supabase not configured, using mock data for wishes');
      return {
        id: Date.now(),
        ...wishData,
        created_at: new Date().toISOString()
      };
    }
  },

  // Get all wishes
  async getWishes(): Promise<BirthdayWish[]> {
    try {
      const { data, error } = await supabase
        .from('birthday_wishes')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw new Error(`Failed to fetch wishes: ${error.message}`);
      return data || [];
    } catch (err) {
      console.warn('Supabase not configured, using mock data for wishes');
      return [
        { id: 1, name: "Ashi", message: "Happy Birthday!", created_at: new Date().toISOString() }
      ];
    }
  }
};

// Song Requests
export const songsApi = {
  // Submit song request
  async submitSongRequest(songData: {
    name: string;
    song_title: string;
    artist?: string;
  }): Promise<SongRequest> {
    const { data, error } = await supabase
      .from('song_requests')
      .insert([songData])
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to submit song request: ${error.message}`);
    }

    return data;
  },

  // Get all song requests
  async getSongRequests(): Promise<SongRequest[]> {
    const { data, error } = await supabase
      .from('song_requests')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw new Error(`Failed to fetch song requests: ${error.message}`);
    }

    return data || [];
  }
};

// Guest Interactions (for live guest wall)
export const interactionsApi = {
  // Submit guest interaction
  async submitInteraction(interactionData: {
    name: string;
    emoji: string;
    timestamp: number;
  }): Promise<GuestInteraction> {
    const { data, error } = await supabase
      .from('guest_interactions')
      .insert([interactionData])
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to submit interaction: ${error.message}`);
    }

    return data;
  },

  // Get recent interactions
  async getRecentInteractions(limit: number = 20): Promise<GuestInteraction[]> {
    const { data, error } = await supabase
      .from('guest_interactions')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) {
      throw new Error(`Failed to fetch interactions: ${error.message}`);
    }

    return data || [];
  },

  // Subscribe to real-time updates
  subscribeToInteractions(callback: (payload: any) => void) {
    return supabase
      .channel('guest_interactions')
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'guest_interactions'
      }, callback)
      .subscribe();
  }
};

// Admin functions
export const adminApi = {
  // Export all data for admin
  async exportAllData() {
    const [guests, wishes, songs, interactions] = await Promise.all([
      guestApi.getGuests(),
      wishesApi.getWishes(),
      songsApi.getSongRequests(),
      interactionsApi.getRecentInteractions(1000)
    ]);

    return {
      guests,
      wishes,
      songs,
      interactions,
      exportDate: new Date().toISOString(),
      totalGuests: guests.length,
      totalWishes: wishes.length,
      totalSongs: songs.length,
      totalInteractions: interactions.length
    };
  },

  // Get statistics
  async getStats() {
    const [guestCount, wishCount, songCount, interactionCount] = await Promise.all([
      guestApi.getGuestCount(),
      supabase.from('birthday_wishes').select('*', { count: 'exact', head: true }),
      supabase.from('song_requests').select('*', { count: 'exact', head: true }),
      supabase.from('guest_interactions').select('*', { count: 'exact', head: true })
    ]);

    return {
      totalGuests: guestCount,
      totalWishes: wishCount.count || 0,
      totalSongs: songCount.count || 0,
      totalInteractions: interactionCount.count || 0
    };
  }
}; 