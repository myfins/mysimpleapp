const fetch = require("node-fetch");

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

module.exports = async function (context, req) {
  const url = `${SUPABASE_URL}/rest/v1/contacts?select=*`;

  try {
    const res = await fetch(url, {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`
      }
    });

    const data = await res.json();
    context.res = {
      status: 200,
      body: data
    };
  } catch (err) {
    context.res = { status: 500, body: { error: err.message } };
  }
};
