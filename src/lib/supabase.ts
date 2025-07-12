import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Only throw error in production
if (import.meta.env.PROD && (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY)) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface Guest {
  id: number;
  name: string;
  email: string;
  guests_count: number;
  message?: string;
  created_at: string;
  updated_at: string;
}

export interface BirthdayWish {
  id: number;
  name: string;
  email?: string;
  message: string;
  created_at: string;
}

export interface SongRequest {
  id: number;
  name: string;
  song_title: string;
  artist?: string;
  created_at: string;
}

export interface GuestInteraction {
  id: number;
  name: string;
  emoji: string;
  timestamp: number;
  created_at: string;
} 