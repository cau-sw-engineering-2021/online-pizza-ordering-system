import { Button } from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import CartList from "../cart/CartList";
import useCart from "../hooks/useCart";

const OrderContainer = styled.main`
  max-width: 1280px;
  margin: 80px auto;

  display: flex;
`;

const OrderForm = styled.form`
  flex-grow: 6;

  label {
    display: block;
    margin: 24px 0;
    font-weight: 600;
    font-size: 18px;

    input[type="text"] {
      margin-top: 8px;
      font-size: 24px;
      display: block;
      width: 50%;
    }
  }
`;

const OrderTypeRadio = styled.article`
  display: flex;
  width: 50%;
  justify-content: space-around;
  text-align: center;
  label {
  }

  input {
    display: block;
    margin: 0 auto;
  }
`;

const OrderList = styled(CartList)`
  flex-grow: 4;
`;

function OrderPage() {
  const history = useHistory();
  const [state, actions] = useCart();
  const [orderData, setOrderData] = useState([]);

  const [formData, setFormData] = useState({
    type: "delivery",
    address: "",
    tel: "",
    message: "",
  });

  const onFormChange = useCallback(
    (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    },
    [formData]
  );

  const onPayClicked = useCallback(() => {
    const result = window.confirm("결제하시겠습니까?");
    if (result) {
      alert("완료되었습니다!");
      state.items.forEach((item) => actions.removeItem(item.id));
      history.push("");
    }
  }, [history, state, actions]);

  useEffect(() => {
    setOrderData(state.items);
  }, [state]);

  return (
    <>
      <OrderContainer>
        <OrderForm>
          <OrderTypeRadio>
            <label>
              배달
              <input
                type="radio"
                name="type"
                value="delivery"
                onChange={onFormChange}
                checked={formData.type === "delivery"}
              />
            </label>
            <label>
              포장
              <input
                type="radio"
                name="type"
                value="pickup"
                onChange={onFormChange}
                checked={formData.type === "pickup"}
              />
            </label>
            <label>
              매장식사
              <input
                type="radio"
                name="type"
                value="eat-in"
                onChange={onFormChange}
                checked={formData.type === "eat-in"}
              />
            </label>
          </OrderTypeRadio>

          {formData.type === "delivery" ? (
            <label>
              주소
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={onFormChange}
              />
            </label>
          ) : null}
          <label>
            전화번호
            <input
              type="text"
              name="tel"
              value={formData.tel}
              onChange={onFormChange}
            />
          </label>
          <label>
            추가요청사항
            <input
              type="text"
              name="message"
              value={formData.message}
              onChange={onFormChange}
            />
          </label>
        </OrderForm>
        <section>
          <OrderList cartData={orderData} readonly={true} />
          <Button
            color="primary"
            variant="outlined"
            style={{
              float: "right",
              width: "300px",
              padding: "12px",
              marginTop: 24,
            }}
            onClick={onPayClicked}
          >
            총{" "}
            {orderData.reduce(
              (prev, cur) => (prev += cur.itemPrice * cur.quantity),
              0
            )}
            원 결제
          </Button>
        </section>
      </OrderContainer>
    </>
  );
}

export default OrderPage;
