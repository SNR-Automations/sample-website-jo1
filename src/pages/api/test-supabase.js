import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// lightweight test endpoint for debugging dev environment
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: { persistSession: false }
});

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    if (!supabaseServiceRoleKey) {
        console.error('Missing SUPABASE_SERVICE_ROLE_KEY in process.env');
        return res.status(500).json({ error: 'Missing SUPABASE_SERVICE_ROLE_KEY on server' });
    }

    try {
        // Minimal insert that matches NOT NULL constraints
        const payload = {
            first_name: 'Test',
            last_name: 'User',
            email: 'test@local.invalid',
            company: 'Local Debug',
            job_title: 'Tester'
        };

        // First try a simple select to see read permissions
        const { data: selectData, error: selectError } = await supabase
            .from('contact_messages')
            .select('id')
            .limit(1);

        if (selectError) {
            console.error('Test select error:', selectError);
        }

        // Try inserting a minimal record to check insert permissions
        const { data, error } = await supabase
            .from('contact_messages')
            .insert([payload]);

        if (error) {
            console.error('Test insert error:', error);
            // Return both errors so we can see whether select or insert failed
            return res.status(500).json({ error: error.message, selectError: selectError ? .message });
        }

        return res.status(200).json({ message: 'Test insert successful', data, selectData });
    } catch (err) {
        console.error('Unexpected test error:', err);
        return res.status(500).json({ error: 'Unexpected test error' });
    }
}