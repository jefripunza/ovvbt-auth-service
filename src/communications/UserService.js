const RestMS = require("../utils/RestMS");

exports.registerBasic = async (name, email, password) => {
  return await RestMS({
    url: process.env.URL_USER_SERVICE + "/api/user/v1/register",
    method: "POST",
    body: {
      name,
      email,
      password,
    },
  });
};

exports.isLogin = async (email, password) => {
  return await RestMS({
    url: process.env.URL_USER_SERVICE + "/api/user/v1/is-login",
    method: "POST",
    body: {
      email,
      password,
    },
  });
};
