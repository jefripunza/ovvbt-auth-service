const router = require("express").Router();
const { endpoint, topic } = require("../consts");

// ==================================================================================

const controller = require("../controllers/RegisterController");

// ==================================================================================

router.post(`${endpoint}/${topic}/v1/register`, controller.basic);

// ==================================================================================

module.exports = router;
