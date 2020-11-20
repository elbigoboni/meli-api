module.exports.itemsRoutes = (app) => {
  require("./item/route")(app);
  require("./items/route")(app);
};
