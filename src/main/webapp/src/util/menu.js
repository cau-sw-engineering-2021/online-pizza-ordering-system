import { homepage as contextPath } from '../../package.json';

const fetchMenuList = async () => {
  const response = await fetch(`${contextPath}/api/menulist`, {
    method: "GET",
  });

  return await response.json();
};

const fetchMenuDetail = async ({id}) => {
  const response = await fetch(`${contextPath}/api/menu/${id}`, {
    method: "GET",
  });

  return await response.json();
};

export {
  fetchMenuList,
  fetchMenuDetail,
};
