exports.Base64 = {
  encode: (text) => {
    return Buffer.from(text).toString("base64");
  },
  decode: (decrypt) => {
    return Buffer.from(decrypt, "base64").toString("ascii");
  },
};
