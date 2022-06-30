import { useSelector } from "react-redux";

export const useCart = () => {
  const state = useSelector((state) => state);

  const sum = state.cart.reduce((prev, current) => {
    if (typeof current === "object") {
      prev += current.sale * current.count;
    }

    return prev;
  }, 0);

  return {
    cart: state.cart,
    sum,
  };
};
