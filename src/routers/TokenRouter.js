const router = require("express").Router();
const { endpoint, topic } = require("../consts");

// ==================================================================================

const controller = require("../controllers/TokenController");

// ==================================================================================

router.get(
  `${endpoint}/${topic}/v1/token/refresh`, // public (token)
  controller.refresh
);

router.get(
  `${endpoint}/${topic}/v1/token/validate`, // public (token)
  controller.validate
);

// ==================================================================================

module.exports = router;
