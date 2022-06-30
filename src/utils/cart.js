export const getSumOfSaleAndCount = (arr) => {
  return arr.cart.reduce((prev, current) => {
    if (typeof current === "object") {
      prev += current.sale * current.count;
    }

    return prev;
  }, 0);
};
