const fetch = require("node-fetch");

module.exports = async function (context, req) {
  //const SUPABASE_URL = process.env.SUPABASE_URL;
  //const SUPABASE_KEY = process.env.SUPABASE_KEY;
  const SUPABASE_URL = "https://ckuxsbbqlzqrzkxniajr.supabase.co";
  const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNrdXhzYmJxbHpxcnpreG5pYWpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0MjI1NzYsImV4cCI6MjA3Nzk5ODU3Nn0.Caq7LLpBNX8KXiVmEJZwlrel8os9DjRS_96msLevlho";
  const url = `${SUPABASE_URL}/rest/v1/contact?select=*`;

  try {
    const res = await fetch(url, {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
      },
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Supabase responded with ${res.status}: ${text}`);
    }

    const data = await res.json();
    context.res = {
      status: 200,
      headers: { "Content-Type": "application/json" },
      body: data,
    };
  } catch (err) {
    // 👇 return full debug info directly
    context.res = {
      status: 500,
      headers: { "Content-Type": "application/json" },
      body: {
        error: err.message,
        hasKey: !!SUPABASE_KEY,
        hasUrl: !!SUPABASE_URL,
        endpoint: url,
      },
    };
  }
};
