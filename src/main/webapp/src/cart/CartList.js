import React from "react";
import CartItem from "./CartItem";

function CartList({ cartData, onRemoveItem }) {
  return (
    <ul className="CartList">
      {cartData.map((item) => (
        <CartItem key={item.id} item={item} onRemove={onRemoveItem} />
      ))}
    </ul>
  );
}

export default CartList;
