import React, { useEffect, useState } from "react";
import Loading from "../common/Loading";
import CartList from "./CartList";
import { Button, Typography } from "@material-ui/core";
import styled from "styled-components";

const getCartData = async () => [
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
  const [loading, setLoading] = useState(true);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    getCartData().then((data) => {
      setCartData(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main>
          <Typography variant="h3" align="center" style={{ margin: "1.5em 0" }}>
            장바구니
          </Typography>
          <CartContent>
            <CartList cartData={cartData} />
            <section className="CartPanel">
              <TotalPrice>
                총{" "}
                <strong>
                  {cartData.reduce(
                    (prev, cur) => (prev += cur.itemPrice * cur.quantity),
                    0
                  )}
                  원
                </strong>
              </TotalPrice>
              <OrderButton variant="outlined">주문하기</OrderButton>
            </section>
          </CartContent>
        </main>
      )}
    </>
  );
}

export default CartPage;
