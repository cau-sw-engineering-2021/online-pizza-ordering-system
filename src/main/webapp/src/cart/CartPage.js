import React, { useCallback } from "react";
import CartList from "./CartList";
import { Button, Typography } from "@material-ui/core";
import styled from "styled-components";
import { useHistory } from "react-router";
import useCart from "../hooks/useCart";

const CartContent = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  font-size: 20px;

  .CartList {
    flex-grow: 2;
    padding: 16px;
    margin: 0 50px 0 0;
  }

  .CartPanel {
    flex-grow: 1;
    padding: 16px;
    text-align: center;
  }
`;

const TotalPrice = styled.p`
  border: solid 1px #000;
  border-radius: 4px;
  margin: 0 0 24px;
  padding: 16px 0;
`;

const OrderButton = styled(Button)`
  font-size: 16px;
  width: 100%;
`;

function CartPage() {
  const history = useHistory();

  const [state, actions] = useCart();

  const onOrder = useCallback(() => {
    const result = window.confirm("정말 주문하시겠습니까?");

    if (result) {
      history.push("order");
    }
  }, [history]);

  return (
    <main>
      <Typography variant="h3" align="center" style={{ margin: "1.5em 0" }}>
        장바구니
      </Typography>
      <CartContent>
        <CartList
          cartData={state.items}
          onRemoveItem={(itemId) => actions.removeItem(itemId)}
        />
        <section className="CartPanel">
          <TotalPrice>
            총{" "}
            <strong>
              {state.items.reduce(
                (prev, cur) => (prev += cur.itemPrice * cur.quantity),
                0
              )}
              원
            </strong>
          </TotalPrice>
          <OrderButton variant="outlined" onClick={onOrder}>
            주문하기
          </OrderButton>
        </section>
      </CartContent>
    </main>
  );
}

export default CartPage;
