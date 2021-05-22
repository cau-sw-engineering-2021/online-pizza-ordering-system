import { apiserver as contextPath } from '../../package.json';
const join = async ({name, id, phone, address, email, password}) => {
  const response = await fetch(`${contextPath}/api/join`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      id,
      phoneNum:phone,
      address,
      email,
      password
    })
  });

  return await response.json();
}
const login = async ({id, password}) => {
  const response = await fetch(`${contextPath}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      password
    })
  });

  return await response.json();
}

const fetchAddress = ({jwt}) => {
  const response = await fetch(`${contextPath}/api/user/address`, {
    method: "GET",
    headers: {
      "X-AUTH_TOKEN": jwtToken
    }
  });

  return await response.json();
}

/* only test function */
const ping = async ({jwt}) => {
  const response = await fetch(`${contextPath}/api/ping`, {
    method: "GET",
    headers: {
      "X-AUTH-TOKEN": jwt,
      "Content-Type": "application/json",
    }
  });
  return await response.json();
}

export {
  join,
  login,
  fetchAddress,
  ping,
};
