const fetch = require("node-fetch");

module.exports = async function (context, req) {
  const SUPABASE_URL = "https://ckuxsbbqlzqrzkxniajr.supabase.co";
  const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNrdXhzYmJxbHpxcnpreG5pYWpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0MjI1NzYsImV4cCI6MjA3Nzk5ODU3Nn0.Caq7LLpBNX8KXiVmEJZwlrel8os9DjRS_96msLevlho";
  const url = `${SUPABASE_URL}/rest/v1/contact?select=*`;

  try {
    context.log("Calling:", url);
    const res = await fetch(url, {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
      },
    });

    // Return the raw response info so we can see what's happening
    const text = await res.text();

    context.res = {
      status: res.status,
      headers: { "Content-Type": "application/json" },
      body: {
        status: res.status,
        ok: res.ok,
        textReturned: text.substring(0, 400), // show first 400 chars
      },
    };
  } catch (err) {
    // Explicitly show any thrown errors
    context.res = {
      status: 500,
      headers: { "Content-Type": "application/json" },
      body: {
        error: err.message,
        stack: err.stack,
      },
    };
  }
};
