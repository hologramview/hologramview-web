-- Create a function to increment the download count
CREATE OR REPLACE FUNCTION increment_download_count(download_id UUID)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE downloads
  SET download_count = download_count + 1,
      updated_at = NOW()
  WHERE id = download_id;
END;
$$;
