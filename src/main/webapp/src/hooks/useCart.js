import { useState, useContext, useCallback } from "react";
import CartContext from "../contexts/CartContext";
import { addCartItem, removeCartItem, fetchCartList } from "../util";

export default function useCart() {
  const [lastItemId, setLastItemId] = useState(1);

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
        setLastItemId(Math.max(localCart.map((item) => item.id)));
        actions.setItems(localCart);
      }
    }
  }, [isLoggedIn, actions]);

  const addItem = useCallback(
    (item) => {
      if (isLoggedIn) {
        addCartItem({ jwt, item });
      } else {
        const newId = lastItemId + 1;

        localStorage.setItem(
          "cart",
          JSON.stringify([...state.items, { ...item, id: newId }])
        );
        setLastItemId(newId);
      }

      syncCart();
    },
    [isLoggedIn, lastItemId, state, syncCart]
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
