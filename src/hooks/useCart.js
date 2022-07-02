import { useSelector } from "react-redux";

export const useCart = () => {
  const state = useSelector((state) => state);

  const sum = state.cart.reduce((prev, current) => {
    if (typeof current === "object") {
      prev += current.sale * current.count;
    }

    return prev;
  }, 0);

  const addTocart = state.cart.reduce((item) => {
    if (typeof item === "object") {
    }
    alert("장바구니에 추가 되었습니다.");
  });
  return {
    cart: state.cart,
    sum,
  };
};
