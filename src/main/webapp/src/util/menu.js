import { apiserver } from '../../package.json';

const fetchMenuList = async ({jwt}) => {
  const response = await fetch(`${apiserver}/menu/menulist`, {
    method: "GET",
    headers: {
      "X-AUTH_TOKEN": jwt
    }
  });

  return await response.json();
};

const fetchMenuDetail = async ({id}) => {
  const response = await fetch(`${apiserver}/menu/${id}`, {
    method: "GET",
  });

  return await response.json();
};

const AddMenu = async ({jwt, id, name, price, size, detail, imgLocation}) => {
  const response = await fetch(`${apiserver}/menu/add`, {
    method: "POST",
    headers: {
      "X-AUTH-TOKEN": jwt,
    },
    body: JSON.stringify({
      id: id,
      name: name,
      price: price,
      size: size,
      detail: detail,
      imgLocation: imgLocation,
    })
  });
  
  return await response.json();
}

export {
  AddMenu,
  fetchMenuList,
  fetchMenuDetail,
};
