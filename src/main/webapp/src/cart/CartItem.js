import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const ItemContainer = styled.li`
  border: solid 1px #666;
  list-style: none;
  display: flex;
  height: 80px;
  overflow: hidden;
  align-items: center;

  margin-bottom: 8px;
`;

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
`;

const ItemInformation = styled.div`
  height: 80px;
  box-sizing: border-box;
  padding: 8px;
  display: flex;
  flex-direction: column;
  flex-grow: 9;
  justify-content: space-around;

  h1 {
    font-size: 20px;
    margin: 0;
  }

  .item-options {
    display: flex;
    p {
      margin: 0;
      strong {
        margin-right: 4px;
      }
    }

    p + p {
      margin-left: 16px;
    }
  }
`;

const ItemPrice = styled.p`
  font-weight: 600;
  text-align: right;
  margin-right: 16px;
`;

const RemoveButton = styled(Button)`
  height: 100%;
`;

function CartItem({ item, onRemove, readonly = false }) {
  return (
    <ItemContainer className="CartItem">
      <ItemImage src={item.menuImgSrc} alt={item.menuName + "이미지"} />
      <ItemInformation>
        <h1>{item.menuName}</h1>
        <div className="item-options">
          <p>
            <strong>사이즈</strong> {item.size}
          </p>
          <p>
            <strong>옵션</strong>
            {item.options.length === 0
              ? " 없음"
              : item.options[0] +
                (item.options.length > 1
                  ? " 외 " + (item.options.length - 1)
                  : "")}
          </p>
          <p>
            <strong>수량</strong>
            {item.quantity}
          </p>
        </div>
      </ItemInformation>
      <ItemPrice>{item.itemPrice * item.quantity}원</ItemPrice>
      {readonly ? null : (
        <RemoveButton color="secondary" onClick={() => console.log(item.id)}>
          삭제
        </RemoveButton>
      )}
    </ItemContainer>
  );
}

export default CartItem;
