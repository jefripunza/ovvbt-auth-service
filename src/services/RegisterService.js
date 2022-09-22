const { print } = require("../utils/services");

const User = require("../communications/UserService");

// -----------------------------------------------------------------------------------

//-> Login

exports.Register = async (traceId, { name, email, password }) => {
  let message = "";
  try {
    // validasi body
    if (!(name && email && password)) {
      message = "body (name, email, password) require!";
      print(traceId, { message });
      return {
        code: 400,
        message,
      };
    }

    await User.registerBasic(name, email, password);

    // render
    message = "berhasil mendaftar user baru!";
    print(traceId, { message });
    return {
      code: 202,
      message,
    };
  } catch (error) {
    const isAxiosError = error?.response?.data?.message;
    const code = isAxiosError ? error.response.status : 500;
    const message = isAxiosError ? error.response.data.message : error.message;
    print(traceId, { error: "register > Register", message });
    return {
      code,
      message,
    };
  }
};

exports.HelloWorld = async (traceId, {}) => {
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
    print(traceId, { error: "register > HelloWorld", message });
    return {
      code: 500,
      message,
    };
  }
};
