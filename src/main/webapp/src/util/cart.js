import { apiserver } from '../../package.json';

const fetchCartList = async () => {
  const response = await fetch(`${apiserver}/cart`, {
    method: "GET",
  });

  return await response.json();
}

const addCartItem = async ({id}) => {
  const response = await fetch(`${apiserver}/cart/add`, {
    method: "POST",
    headers: {
      "Content-Type":"application/json",
    },
    body: JSON.stringify({id})
  });

  return await response.json();
}

const removeCartItem = async ({id}) => {
  const response = await fetch(`${apiserver}/cart/remove`, {
    method: "POST",
    headers: {
      "Content-Type":"application/json",
    },
    body: JSON.stringify({id})
  });

  return await response.json();
}

export {
  fetchCartList,
  addCartItem,
  removeCartItem,
}
