const RegisterService = require("../services/RegisterService");

// ==================================================================================

exports.basic = async (req, res) => {
  const { code, message, render } = await RegisterService.Register(
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
