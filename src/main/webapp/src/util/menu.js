import { apiserver } from "../../package.json";

const fetchMenuList = async () => {
  const response = await fetch(`${apiserver}/menu/menulist`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      //"X-AUTH_TOKEN": jwt
    },
  });

  return await response.json();
};

const fetchMenuDetail = async ({ id }) => {
  const response = await fetch(`${apiserver}/menu/${id}`, {
    method: "GET",
  });

  return await response.json();
};

const AddMenu = async ({
  name,
  largePrice,
  mediumPrice,
  smallPrice,
  imgUrl,
}) => {
  const response = await fetch(`${apiserver}/menu/add`, {
    method: "POST",
    headers: {
      //"X-AUTH-TOKEN": jwt,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      largePrice,
      mediumPrice,
      smallPrice,
      imgUrl,
    }),
  });

  return await response.json();
};

export { AddMenu, fetchMenuList, fetchMenuDetail };
