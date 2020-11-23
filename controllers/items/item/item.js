const fetch = require("node-fetch");

module.exports = () => {
  const controller = {};

  controller.getItem = (req, res) => {
    // const url = encodeURI(
    //   `https://api.mercadolibre.com/items/​${req.params.id}`
    // );
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((json) => {
    //     res.json(json);
    //   });
    const productMock = {
      author: {
        name: "Vendedor XYZ",
      },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione magnam tempora nobis porro rem laborum corporis itaque atque? Quod aperiam tenetur iusto odit inventore sequi sapiente, nesciunt eum distinctio, maiores, odio quos quas consequuntur architecto perferendis dignissimos ducimus soluta asperiores eveniet. Et eum veniam perferendis hic sequi necessitatibus odio, eos, explicabo atque eaque facere minima ipsum temporibus. Nihil, asperiores. Exercitationem atque et vel? Molestiae necessitatibus voluptatem architecto mollitia totam. Maiores repudiandae excepturi modi officiis suscipit illo laborum eius consequuntur non magni illum molestiae repellendus laboriosam ea, dolores placeat, ex reiciendis magnam expedita labore eligendi numquam sunt? Facilis et sint quo?",
      item: {
        id: "string",
        title: "Macbook Air 2020",
        categories: ["Apple", "MacBook", "2020"],
        thumbnail:
          "http://http2.mlstatic.com/D_666896-MLA43078686549_082020-O.jpg",
        price: {
          amount: 10000,
          currency: "ARS",
        },
        location: "Buenos Aires",
        condition: "Nuevo",
        free_shipping: true,
      },
      sold_quantity: 12,
    };
    res.json(productMock);
  };

  return controller;
};
