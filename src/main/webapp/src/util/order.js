import { apiserver } from '../../package.json';
const createOrder = async ({
  id,
  /* ?? I Don't know about it */
}) => {
  const response = await fetch(`${apiserver}/order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({id})
  });

  return await response.json();
}

export {
  createOrder,
}