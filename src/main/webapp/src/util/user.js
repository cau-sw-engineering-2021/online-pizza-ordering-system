import { apiserver } from '../../package.json';

const fetchUserList = async () => {
  const response = await fetch(`${apiserver}/user/userlist`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'Accept': "application/json"
    }
  });
  console.log(response);
  return await response.json();
};

const join = async ({name, id, phone, address, email, password}) => {
  const response = await fetch(`${apiserver}/join`, {
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
  const response = await fetch(`${apiserver}/login`, {
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

const fetchAddress = async ({jwt}) => {
  const response = await fetch(`${apiserver}/user/address`, {
    method: "GET",
    headers: {
      "X-AUTH-TOKEN": jwt
    }
  });

  return await response.json();
}

const deleteUser = async ({jwt, userid}) => {
  const response = await fetch(`${apiserver}/user/delete`, {
    method: "POST",
    headers: {
      "X-AUTH-TOKEN": jwt,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: userid,
    })
  });

  return await response.json();
}

/* only test function */
const ping = async ({jwt}) => {
  const response = await fetch(`${apiserver}/ping`, {
    method: "GET",
    headers: {
      "X-AUTH-TOKEN": jwt,
      "Content-Type": "application/json",
    }
  });
  return await response.json();
}

const fetchUserList = async ({jwt}) => {
  const response = await fetch(`${apiserver}/user/userlist`, {
    method: "GET",
    headers: {
      "X-AUTH-TOKEN": jwt,
      "Content-Type": "application/json",
    }
  });
  return await response.json();
}

export {
  fetchUserList,
  join,
  login,
  fetchAddress,
  deleteUser,
  ping,
  fetchUserList,
};
