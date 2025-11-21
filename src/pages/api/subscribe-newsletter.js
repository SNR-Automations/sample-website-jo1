import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseServiceRoleKey) {
    console.error('SUPABASE_SERVICE_ROLE_KEY is missing. Check .env.local');
}

// Create server-side client using the service role key (server only)
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
    // don't persist sessions on serverless function calls
    auth: { persistSession: false },
});

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email } = req.body;

    // Basic email validation
    if (!email || !email.includes('@')) {
        return res.status(400).json({ error: 'Valid email address is required' });
    }

    try {
        // Check if email already exists
        const { data: existing } = await supabase
            .from('newsletter_subscriptions')
            .select('id, email, is_active')
            .eq('email', email.toLowerCase().trim())
            .single();

        if (existing) {
            // If exists but inactive, reactivate it
            if (!existing.is_active) {
                const { data, error } = await supabase
                    .from('newsletter_subscriptions')
                    .update({ 
                        is_active: true,
                        updated_at: new Date().toISOString()
                    })
                    .eq('id', existing.id)
                    .select()
                    .single();

                if (error) {
                    console.error('Supabase update error:', error);
                    return res.status(500).json({ error: error.message });
                }

                return res.status(200).json({ 
                    message: 'Successfully resubscribed to newsletter', 
                    data 
                });
            }

            // Already subscribed and active
            return res.status(200).json({ 
                message: 'Email already subscribed', 
                data: existing 
            });
        }

        // Insert new subscription
        const { data, error } = await supabase
            .from('newsletter_subscriptions')
            .insert([{
                email: email.toLowerCase().trim(),
                is_active: true,
                source: 'website_footer'
            }])
            .select()
            .single();

        if (error) {
            console.error('Supabase insert error:', error);
            // If it's a permissions error, include a hint so it's easier to debug
            if (error.message?.toLowerCase().includes('permission')) {
                return res.status(403).json({ 
                    error: 'Permission denied. Check your Supabase RLS / policies and that SUPABASE_SERVICE_ROLE_KEY is set on the server.' 
                });
            }

            // Handle unique constraint violation gracefully
            if (error.code === '23505') {
                return res.status(200).json({ 
                    message: 'Email already subscribed', 
                });
            }

            return res.status(500).json({ error: error.message });
        }

        res.status(200).json({ message: 'Successfully subscribed to newsletter', data });
    } catch (err) {
        console.error('Unexpected error:', err);
        res.status(500).json({ error: 'Unexpected error occurred' });
    }
}

