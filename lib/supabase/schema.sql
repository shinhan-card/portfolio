-- Guestbook entries table
CREATE TABLE IF NOT EXISTS guestbook_entries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  name VARCHAR(30),
  company VARCHAR(40),
  message TEXT NOT NULL CHECK (char_length(message) <= 300 AND char_length(message) > 0),
  ip_hash VARCHAR(64),
  user_agent TEXT,
  honeypot VARCHAR(255) -- Anti-spam honeypot field
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_guestbook_created_at ON guestbook_entries(created_at DESC);

-- Row Level Security (RLS) Policies
ALTER TABLE guestbook_entries ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to INSERT entries
CREATE POLICY "Allow anonymous insert"
  ON guestbook_entries
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow public SELECT for reading entries
CREATE POLICY "Allow public read"
  ON guestbook_entries
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Prevent UPDATE and DELETE from public
-- (Only service role can update/delete)

-- Optional: Create a function to auto-delete old entries (keep last 500)
CREATE OR REPLACE FUNCTION cleanup_old_guestbook_entries()
RETURNS void AS $$
BEGIN
  DELETE FROM guestbook_entries
  WHERE id NOT IN (
    SELECT id FROM guestbook_entries
    ORDER BY created_at DESC
    LIMIT 500
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Optional: Schedule cleanup (requires pg_cron extension)
-- SELECT cron.schedule('cleanup-guestbook', '0 0 * * *', 'SELECT cleanup_old_guestbook_entries()');
