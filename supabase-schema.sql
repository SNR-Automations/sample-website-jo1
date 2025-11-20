-- SQL Schema for Supabase Contact Messages Table (idempotent)
-- Run this in your Supabase SQL Editor. This script is safe to re-run — it will
-- create missing objects and replace/update things that need it without failing
-- when the table already exists.

-- Ensure the UUID generation function is available
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create the contact_messages table if it doesn't already exist
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL,
  job_title TEXT NOT NULL,
  phone TEXT,
  industry TEXT,
  company_size TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create indexes if missing
CREATE INDEX IF NOT EXISTS idx_contact_messages_email ON public.contact_messages(email);
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON public.contact_messages(created_at DESC);

-- Disable Row Level Security to allow all inserts (for debugging)
ALTER TABLE public.contact_messages DISABLE ROW LEVEL SECURITY;

-- DEV NOTE: grant permissions to public so debug inserts and selects work during development
-- Remove or tighten these privileges in production
GRANT SELECT, INSERT, UPDATE, DELETE ON public.contact_messages TO public;



-- Remove all existing policies for a clean slate
DROP POLICY IF EXISTS "Allow public inserts" ON public.contact_messages;
DROP POLICY IF EXISTS allow_authenticated_reads ON public.contact_messages;
DROP POLICY IF EXISTS "Enable insert for all" ON public.contact_messages;
DROP POLICY IF EXISTS "Enable select for all" ON public.contact_messages;
DROP POLICY IF EXISTS "Public insert" ON public.contact_messages;

-- Add a public insert policy for all users (including anonymous)
CREATE POLICY "Public insert" ON public.contact_messages
  FOR INSERT
  WITH CHECK (true);

-- Create or replace function to update `updated_at` on UPDATE
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc', NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop the trigger if it exists, then create it (safe to re-run)
DROP TRIGGER IF EXISTS update_contact_messages_updated_at ON public.contact_messages;
CREATE TRIGGER update_contact_messages_updated_at
  BEFORE UPDATE ON public.contact_messages
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Add a comment to the table (will replace existing comment)
COMMENT ON TABLE public.contact_messages IS 'Stores contact form submissions from the website';
