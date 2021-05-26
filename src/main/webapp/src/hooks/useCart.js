import { useContext, useCallback } from "react";
import CartContext from "../contexts/CartContext";
import { addCartItem, removeCartItem, fetchCartList } from "../util";

export default function useCart() {
  const { state, actions } = useContext(CartContext);
  // TODO: 로그인 관련 처리
  const jwt = "";
  const isLoggedIn = false;

  const syncCart = useCallback(() => {
    if (isLoggedIn) {
      const remoteCart = fetchCartList();

      if (remoteCart) {
        actions.setItems(remoteCart);
      }
    } else {
      const localCart = JSON.parse(localStorage.getItem("cart"));

      if (localCart) {
        actions.setItems(localCart);
      }
    }
  }, [isLoggedIn, actions]);

  const addItem = useCallback(
    (item) => {
      if (isLoggedIn) {
        addCartItem({ jwt, item });
      } else {
        const localCart = JSON.parse(localStorage.getItem("cart"));

        const maxId = Math.max.apply(
          Math,
          localCart.map((item) => item.id)
        );

        localStorage.setItem(
          "cart",
          JSON.stringify([...state.items, { ...item, id: maxId + 1 }])
        );
      }

      syncCart();
    },
    [isLoggedIn, state, syncCart]
  );

  const removeItem = useCallback(
    (itemId) => {
      if (isLoggedIn) {
        removeCartItem({ jwt, itemId });
      } else {
        localStorage.setItem(
          "cart",
          JSON.stringify(state.items.filter((item) => item.id !== itemId))
        );
      }

      syncCart();
    },
    [isLoggedIn, state, syncCart]
  );

  return [state, { addItem, removeItem }];
}
