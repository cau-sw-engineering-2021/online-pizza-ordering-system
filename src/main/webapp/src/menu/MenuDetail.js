import styled from "styled-components";
import React, { useCallback } from "react";
import { useParams } from "react-router";
import OptionForm from "../option/OptionForm";

function getMenu(id) {
  // Dummy Data
  return {
    id: 1,
    name: "Pizza1",
    price: { L: 20000, M: 11000 },
    size: ["L", "M"],
    imgSrc:
      "https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    options: [
      {
        id: 1,
        name: "토핑",
        values: [
          {
            id: 1,
            name: "치즈 추가",
            price: 1000,
          },
          {
            id: 2,
            name: "치즈 좀 더 추가",
            price: 1500,
          },
        ],
      },
      {
        id: 2,
        name: "사이드",
        values: [
          {
            id: 4,
            name: "오븐스파게티",
            price: 6000,
          },
          {
            id: 5,
            name: "감자튀김",
            price: 3000,
          },
          {
            id: 6,
            name: "치킨텐더",
            price: 3500,
          },
        ],
      },
      {
        id: 3,
        name: "음료",
        values: [
          {
            id: 7,
            name: "콜라 1.25L",
            price: 1500,
          },
          {
            id: 8,
            name: "사이다 1.25L",
            price: 1500,
          },
          {
            id: 9,
            name: "콜라 500mL",
            price: 800,
          },
        ],
      },
    ],
  };
}

const DetailContainer = styled.main`
  max-width: 1280px;
  margin: 80px auto;
  display: flex;
`;

const ImageSection = styled.section`
  width: 50%;
`;

const MenuImage = styled.img`
  width: 80%;
  display: block;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  border: solid 2px #000;
`;

const DetailSection = styled.section`
  width: 50%;
`;

const MenuTitle = styled.h1`
  margin: 0 0 16px;
`;

function MenuDetail() {
  const { id } = useParams();

  const menu = getMenu(id);

  const addToCart = useCallback((data) => {
    // TODO: Add To Cart
    console.log(data);
  }, []);

  return (
    <DetailContainer className="MenuDetail">
      <ImageSection>
        <MenuImage src={menu.imgSrc} alt={menu.name} />
      </ImageSection>
      <DetailSection>
        <MenuTitle>{menu.name}</MenuTitle>
        <OptionForm menu={menu} onSubmit={addToCart} />
      </DetailSection>
    </DetailContainer>
  );
}

export default MenuDetail;
