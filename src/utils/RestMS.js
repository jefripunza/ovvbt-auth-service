const jwt = require("jsonwebtoken");
const axios = require("axios");

const RestMS = async ({ url, method, headers, body }) => {
  // create new token for communication
  const new_token = jwt.sign(
    { is_ms: process.env.SERVICE_NAME },
    process.env.JWT_MS,
    {
      expiresIn: 60 * 60 * 1, // minute
    }
  );
  const ms_auth = { ms_auth: "Bearer " + new_token };
  const { data } = await axios({
    url,
    method,
    data: body,
    headers: headers ? { ...headers, ...ms_auth } : ms_auth,
  });
  return data;
};

module.exports = RestMS;
