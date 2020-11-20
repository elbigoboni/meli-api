const express = require("express");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 6000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET");
  app.use(cors());
  next();
});

require("./controllers/items/index").itemsRoutes(app);

app.listen(port, () => {
  console.log(`Running on port ${port}...`);
});
