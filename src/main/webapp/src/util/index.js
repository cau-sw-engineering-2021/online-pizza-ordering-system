/* DELETE ME. This code is sample code for login and response */
import { homepage as contextPath } from '../../package.json';
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

const ping = async (jwtToken) => {
  const response = await fetch(`${contextPath}/api/ping`, {
    method: "GET",
    headers: {
      "X-AUTH-TOKEN": jwtToken,
      "Content-Type": "application/json",
    }
  });
  return await response.json();
}
export {
  join,
  login,
  ping
};