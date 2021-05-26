import { createContext, useEffect, useState } from "react";

const dummyCart = [
  {
    id: 1,
    menuId: 1,
    menuImgSrc:
      "https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    menuName: "불고기 피자",
    quantity: 1, // 수량
    itemPrice: 10200, // 수량 하나 당 가격(피자 + 옵션)
    size: "L",
    options: ["치즈 추가", "콜라 1.25L"],
  },
  {
    id: 2,
    menuId: 2,
    menuImgSrc:
      "https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    menuName: "포테이토 피자",
    quantity: 2,
    itemPrice: 9800,
    size: "M",
    options: [],
  },
];

const CartContext = createContext({
  state: { items: [] },
  actions: {
    setItems: () => {},
    addItem: () => {},
    removeItem: () => {},
  },
});

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const localItems = localStorage.getItem("cart");

    if (!localItems) {
      setItems(dummyCart);
      localStorage.setItem("cart", JSON.stringify(dummyCart));
    } else {
      setItems(JSON.parse(localItems));
    }
  }, []);

  const value = {
    state: { items },
    actions: { setItems },
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const CartConsumer = CartContext.Consumer;

export { CartProvider, CartConsumer };

export default CartContext;
