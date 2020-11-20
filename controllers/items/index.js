module.exports.itemsRoute = (app) => {
  require("./item/route")(app);
  require("./items/route")(app);
};
