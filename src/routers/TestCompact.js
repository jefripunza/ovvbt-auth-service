const router = require("express").Router();

// ==================================================================================

router.get(`/env`, (_, res) => {
  return res.json(process.env);
});

// ==================================================================================

module.exports = router;
