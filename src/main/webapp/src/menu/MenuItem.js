import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components";

const GridItem = styled(Grid)``;

const ItemWrapper = styled.div`
  border: solid 1px #eee;
`;

const ItemLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

const ItemImg = styled.img`
  display: block;
  width: 100%;
`;

const ItemInfoCont = styled.div`
  padding: 16px;
`;

const ItemName = styled.h1`
  font-size: 24px;
  margin: 0 0 12px;
`;

const ItemSize = styled.strong`
  color: rgb(234, 56, 69);
`;

const ItemPrice = styled.span`
  font-weight: 600;
  margin: 0 4px;
`;

function MenuItem({ menu = {} }) {
  return (
    <GridItem item md={3}>
      <ItemLink to={`/menu/${menu.id}`}>
        <ItemWrapper>
          <ItemImg src={menu.imgSrc} alt={menu.name} />
          <ItemInfoCont>
            <ItemName>{menu.name}</ItemName>
            <div className="price-cont">
              {menu.size.map((size) => (
                <>
                  <ItemSize className="size">{size}</ItemSize>
                  <ItemPrice className="price">{menu.price[size]} ~ </ItemPrice>
                </>
              ))}
            </div>
          </ItemInfoCont>
        </ItemWrapper>
      </ItemLink>
    </GridItem>
  );
}

export default MenuItem;
