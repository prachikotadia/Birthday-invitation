-- Database setup for Ashi's Birthday Invitation
-- Run this in your Supabase SQL editor

-- Enable Row Level Security (RLS)
ALTER TABLE IF EXISTS guests ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS birthday_wishes ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS song_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS guest_interactions ENABLE ROW LEVEL SECURITY;

-- Create guests table
CREATE TABLE IF NOT EXISTS guests (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    guests_count INTEGER NOT NULL DEFAULT 1,
    message TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create birthday_wishes table
CREATE TABLE IF NOT EXISTS birthday_wishes (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255),
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create song_requests table
CREATE TABLE IF NOT EXISTS song_requests (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    song_title VARCHAR(255) NOT NULL,
    artist VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create guest_interactions table
CREATE TABLE IF NOT EXISTS guest_interactions (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    emoji VARCHAR(10) NOT NULL,
    timestamp BIGINT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_guests_created_at ON guests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_birthday_wishes_created_at ON birthday_wishes(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_song_requests_created_at ON song_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_guest_interactions_created_at ON guest_interactions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_guests_email ON guests(email);

-- Create RLS policies for public read access
CREATE POLICY "Allow public read access to guests" ON guests
    FOR SELECT USING (true);

CREATE POLICY "Allow public read access to birthday_wishes" ON birthday_wishes
    FOR SELECT USING (true);

CREATE POLICY "Allow public read access to song_requests" ON song_requests
    FOR SELECT USING (true);

CREATE POLICY "Allow public read access to guest_interactions" ON guest_interactions
    FOR SELECT USING (true);

-- Create RLS policies for public insert access
CREATE POLICY "Allow public insert access to guests" ON guests
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public insert access to birthday_wishes" ON birthday_wishes
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public insert access to song_requests" ON song_requests
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public insert access to guest_interactions" ON guest_interactions
    FOR INSERT WITH CHECK (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for guests table
CREATE TRIGGER update_guests_updated_at 
    BEFORE UPDATE ON guests 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Enable real-time for all tables
ALTER PUBLICATION supabase_realtime ADD TABLE guests;
ALTER PUBLICATION supabase_realtime ADD TABLE birthday_wishes;
ALTER PUBLICATION supabase_realtime ADD TABLE song_requests;
ALTER PUBLICATION supabase_realtime ADD TABLE guest_interactions; 