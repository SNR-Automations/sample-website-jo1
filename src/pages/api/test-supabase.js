import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// lightweight test endpoint for debugging dev environment
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: { persistSession: false }
});

export default async function handler(req, res) {
    return res.status(410).json({ error: 'This endpoint has been archived and is disabled in this environment.' });
}