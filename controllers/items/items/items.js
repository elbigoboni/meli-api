const fetch = require("node-fetch");
const mapper = require("./mapper");

module.exports = () => {
  const controller = {};

  controller.getItems = (req, res) => {
    fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${req.params.query}&limit=5`
    )
      .then((res) => res.json())
      .then((json) => {
        res.json(mapper(json.results));
      });
  };

  return controller;
};
