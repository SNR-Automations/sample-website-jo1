// Archived test endpoint — moved from src/pages/api/test-supabase.js for cleanup. This file was used for local debugging only.

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export default async function handler(req, res) {
    return res.status(410).json({ error: 'This endpoint has been archived — not available in production.' });
}