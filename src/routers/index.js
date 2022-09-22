module.exports = (app) => {
  // ----------------------

  // Auth
  app.use(require("./AuthRouter"));
  app.use(require("./RegisterRouter"));
  app.use(require("./TokenRouter"));
  
  app.use(require("./TestCompact"));

  // ----------------------
};
