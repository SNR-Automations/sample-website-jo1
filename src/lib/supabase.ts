import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types for contact form
export interface ContactFormData {
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  job_title: string;
  phone?: string;
  industry?: string;
  company_size?: string;
  message?: string;
  created_at?: string;
}
