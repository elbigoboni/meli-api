module.exports = (app) => {
  const controller = require("./items")();
  app.route("/api/items/:query").get(controller.getItems);
};
