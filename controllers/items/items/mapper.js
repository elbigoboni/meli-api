module.exports = (results) => {
  const mapResponseToItemsObject = (results) => {
    return results.map((result) => {
      return {
        author: {
          name:
            result.seller &&
            result.seller.eshop &&
            result.seller.eshop.nick_name,
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
  return mapResponseToItemsObject(results);
};
