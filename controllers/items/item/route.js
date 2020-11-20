module.exports = (app) => {
  const controller = require("./item")();
  app.route("/api/item/:query").get(controller.getItem);
};
