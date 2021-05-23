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

export {
  fetchMenuList,
  fetchMenuDetail,
};
