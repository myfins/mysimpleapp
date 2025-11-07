module.exports = async function (context, req) {
  context.res = {
    status: 200,
    body: { ok: true, message: "Function runtime works!" },
  };
};
