const fetch = require("node-fetch");

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

module.exports = async function (context, req) {
  const url = `${SUPABASE_URL}/rest/v1/contact?select=*`;

  try {
    const res = await fetch(url, {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`
      }
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Supabase responded with ${res.status}: ${text}`);
    }

    const data = await res.json();
    context.res = {
      status: 200,
      headers: { "Content-Type": "application/json" },
      body: data
    };
  } catch (err) {
    context.log("Error fetching Supabase data:", err);
    context.res = {
      status: 500,
      body: { error: err.message }
    };
  }
  
};
