const fetch = require("node-fetch");

module.exports = () => {
  const controller = {};

  controller.getItem = (req, res) => {
    const url = encodeURI(
      `https://api.mercadolibre.com/items/​${req.params.id}`
    );
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        res.json(json);
      });
  };

  return controller;
};
