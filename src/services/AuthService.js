const { print } = require("../utils/services");
const { createToken } = require("../utils/jsonwebtoken");
const { expired_token } = require("../consts");

const User = require("../communications/UserService");

// -----------------------------------------------------------------------------------

//-> Login

exports.Login = async (traceId, { email, password }) => {
  let message = "";
  try {
    // validasi body
    if (!(email && password)) {
      message = "body (email, password) require!";
      print(traceId, { message });
      return {
        code: 400,
        message,
      };
    }

    // get id
    const login = await User.isLogin(email, password);
    if (!login) {
      message = "email atau password salah!";
      print(traceId, { message });
      return {
        code: 400,
        message,
      };
    }

    const user = { ...login };
    delete login.create_date;
    delete login.name;
    delete login.email;
    delete login.password;

    // create new token
    const token = createToken({ ...login }, expired_token + "d");

    // set expired
    const date = new Date();
    date.setDate(date.getDate() + expired_token);
    const expired = date.toLocaleString("id-ID", {
      timeZone: "Asia/Jakarta",
    });

    delete user.password;

    // render
    return {
      code: 202,
      render: {
        token,
        user,
        expired,
      },
    };
  } catch (error) {
    const isAxiosError = error?.response?.data?.message;
    const code = isAxiosError ? error.response.status : 500;
    const message = isAxiosError ? error.response.data.message : error.message;
    print(traceId, { error: "auth > Login", message });
    return {
      code,
      message,
    };
  }
};

exports.HelloWorld = async (traceId, {  }) => {
  let message = "";
  try {
    // render
    message = "hello world!";
    print(traceId, { message });
    return {
      code: 200,
      message,
    };
  } catch (error) {
    const message = error.message;
    print(traceId, { error: "auth > HelloWorld", message });
    return {
      code: 500,
      message,
    };
  }
};
