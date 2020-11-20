const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 6000;

const itemsRouter = express.Router();

const mapper = (results) => {
  return results.map((result) => {
    return {
      author: {
        name:
          result.seller && result.seller.eshop && result.seller.eshop.nick_name,
      },
      item: {
        id: result.id,
        title: result.title,
        categories: ["cat1", "cat2"],
        thumbnail: result.thumbnail,
        price: {
          amount: result.price,
          currency: result.currency_id,
        },
        condition: result.condition,
        free_shipping: result.shipping.free_shipping,
        location: result.address.state_name,
      },
    };
  });
};

itemsRouter.route("/itemss/:query").get((req, res) => {
  fetch(
    `https://api.mercadolibre.com/sites/MLA/search?q=${req.params.query}&limit=1`
  )
    .then((res) => res.json())
    .then((json) => res.json(json));
});

itemsRouter.route("/items/:query").get((req, res) => {
  fetch(
    `https://api.mercadolibre.com/sites/MLA/search?q=${req.params.query}&limit=5`
  )
    .then((res) => res.json())
    .then((json) => res.json(mapper(json.results)));
});
itemsRouter.route("/item/:id").get((req, res) => {
  const url = encodeURI(`https://api.mercadolibre.com/items/​${req.params.id}`);
  fetch(url)
    .then((res) => res.json())
    .then((json) => res.json(json));
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET");
  app.use(cors());
  next();
});
app.use("/api", itemsRouter);

app.listen(port, () => {
  console.log(`Running on port ${port}...`);
});
