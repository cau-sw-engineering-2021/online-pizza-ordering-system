import { apiserver } from '../../package.json';

const fetchMenuList = async () => {
  const response = await fetch(`${apiserver}/menulist`, {
    method: "GET",
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
      "X-AUTH_TOKEN": jwt,
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
}

export {
  fetchMenuList,
  fetchMenuDetail,
};
