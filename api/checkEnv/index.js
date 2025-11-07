module.exports = async function (context, req) {
  const hasUrl = !!process.env.SUPABASE_URL;
  const hasKey = !!process.env.SUPABASE_KEY;

  context.log("checkEnv executed");
  context.res = {
    status: 200,
    headers: { "Content-Type": "application/json" },
    body: {
      SUPABASE_URL_present: hasUrl,
      SUPABASE_KEY_present: hasKey
    }
  };
};
