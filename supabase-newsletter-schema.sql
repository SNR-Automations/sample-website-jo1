-- SQL Schema for Supabase Newsletter Subscriptions Table (idempotent)
-- Run this in your Supabase SQL Editor. This script is safe to re-run — it will
-- create missing objects and replace/update things that need it without failing
-- when the table already exists.

-- Ensure the UUID generation function is available
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create the newsletter_subscriptions table if it doesn't already exist
CREATE TABLE IF NOT EXISTS public.newsletter_subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  is_active BOOLEAN DEFAULT true,
  source TEXT DEFAULT 'website_footer'
);

-- Create indexes if missing
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_email ON public.newsletter_subscriptions(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_subscribed_at ON public.newsletter_subscriptions(subscribed_at DESC);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_is_active ON public.newsletter_subscriptions(is_active) WHERE is_active = true;

-- Disable Row Level Security to allow all inserts (for debugging)
ALTER TABLE public.newsletter_subscriptions DISABLE ROW LEVEL SECURITY;

-- DEV NOTE: grant permissions to public so debug inserts and selects work during development
-- Remove or tighten these privileges in production
GRANT SELECT, INSERT, UPDATE, DELETE ON public.newsletter_subscriptions TO public;

-- Remove all existing policies for a clean slate
DROP POLICY IF EXISTS "Allow public inserts" ON public.newsletter_subscriptions;
DROP POLICY IF EXISTS allow_authenticated_reads ON public.newsletter_subscriptions;
DROP POLICY IF EXISTS "Enable insert for all" ON public.newsletter_subscriptions;
DROP POLICY IF EXISTS "Enable select for all" ON public.newsletter_subscriptions;
DROP POLICY IF EXISTS "Public insert" ON public.newsletter_subscriptions;

-- Add a public insert policy for all users (including anonymous)
CREATE POLICY "Public insert" ON public.newsletter_subscriptions
  FOR INSERT
  WITH CHECK (true);

-- Create or replace function to update `updated_at` on UPDATE
CREATE OR REPLACE FUNCTION public.update_newsletter_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc', NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop the trigger if it exists, then create it (safe to re-run)
DROP TRIGGER IF EXISTS update_newsletter_subscriptions_updated_at ON public.newsletter_subscriptions;
CREATE TRIGGER update_newsletter_subscriptions_updated_at
  BEFORE UPDATE ON public.newsletter_subscriptions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_newsletter_updated_at_column();

-- Add a comment to the table (will replace existing comment)
COMMENT ON TABLE public.newsletter_subscriptions IS 'Stores newsletter email subscriptions from the website footer';

