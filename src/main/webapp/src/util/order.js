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

const fetchOrderList = async ({ jwt }) => {
  const response = await fetch(`${apiserver}/order`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-AUTH-TOKEN": jwt,
    }
  });

  return await response.json();
}

const acceptOrder = async ({ orderId, jwt }) => {
  const response = await fetch(`${apiserver}/order/accept`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-AUTH-TOKEN": jwt,
    },
    body: JSON.stringify({orderId}),
  });

  return await response.json();
}

const rejectOrder = async ({ orderId, jwt }) => {
  const response = await fetch(`${apiserver}/order/reject`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-AUTH-TOKEN": jwt,
    },
    body: JSON.stringify({orderId}),
  });

  return await response.json();
}

const completeCook = async ({ orderId, jwt }) => {
  const response = await fetch(`${apiserver}/order/complete-cook`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-AUTH-TOKEN": jwt,
    },
    body: JSON.stringify({orderId}),
  });

  return await response.json();
}

const serveOrder = async ({ orderId, jwt }) => {
  const response = await fetch(`${apiserver}/order/serve`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-AUTH-TOKEN": jwt,
    },
    body: JSON.stringify({orderId}),
  });

  return await response.json();
}

const startDelivery = async ({ orderId, jwt }) => {
  const response = await fetch(`${apiserver}/order/start-delivery`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-AUTH-TOKEN": jwt,
    },
    body: JSON.stringify({orderId}),
  });

  return await response.json();
}

const completeDelivery = async ({ orderId, jwt }) => {
  const response = await fetch(`${apiserver}/order/complete-delivery`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-AUTH-TOKEN": jwt,
    },
    body: JSON.stringify({orderId}),
  });

  return await response.json();
}

const emergency = async ({ orderId, jwt }) => {
  const response = await fetch(`${apiserver}/order/emergency`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-AUTH-TOKEN": jwt,
    },
    body: JSON.stringify({orderId}),
  });

  return await response.json();
}

export {
  createOrder,
  fetchOrderList,
  acceptOrder,
  rejectOrder,
  completeCook,
  serveOrder,
  startDelivery,
  completeDelivery,
  emergency,
}
