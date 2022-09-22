const router = require("express").Router();
const { endpoint, topic } = require("../consts");

// ==================================================================================

const controller = require("../controllers/AuthController");

// ==================================================================================

router.post(`${endpoint}/${topic}/v1/login`, controller.basic);

// ==================================================================================

module.exports = router;
