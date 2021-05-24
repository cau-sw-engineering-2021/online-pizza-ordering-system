import React from "react";
import CartItem from "./CartItem";

function CartList({ cartData, onRemoveItem, readonly = false }) {
  return (
    <ul className="CartList">
      {cartData.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onRemove={onRemoveItem}
          readonly={readonly}
        />
      ))}
    </ul>
  );
}

export default CartList;
