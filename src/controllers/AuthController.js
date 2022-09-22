const AuthService = require("../services/AuthService");

// ==================================================================================

exports.basic = async (req, res) => {
  const { code, message, render } = await AuthService.Login(
    req.traceId,
    req.body
  );
  if (render) {
    return res.status(code).json(render);
  }
  return res.status(code).json({
    message,
  });
};
