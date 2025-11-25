import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Warn if missing (only logged server-side)
if (!supabaseServiceRoleKey) {
  console.error("SUPABASE_SERVICE_ROLE_KEY is missing. Check Vercel env vars.");
}

// Create server-side Supabase client using service role key
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: { persistSession: false },
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    firstName,
    lastName,
    email,
    company,
    title,
    phone,
    industry,
    companySize,
    message,
  } = req.body;

  try {
    const { data, error } = await supabase.from("contact_messages").insert([
      {
        first_name: firstName,
        last_name: lastName,
        email,
        company,
        job_title: title,
        phone: phone || null,
        industry: industry || null,
        company_size: companySize || null,
        message: message || null,
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);

      // Correct optional chaining syntax
      if (
        error?.message?.toLowerCase().includes("permission")
      ) {
        return res.status(403).json({
          error:
            "Permission denied. Check Supabase RLS policies and ensure the service role key is set on the server.",
        });
      }

      return res.status(500).json({ error: error.message });
    }

    return res
      .status(200)
      .json({ message: "Form submitted successfully", data });
  } catch (err) {
    console.error("Unexpected error:", err);
    return res.status(500).json({ error: "Unexpected server error" });
  }
}
