import { apiserver } from '../../package.json';
const fetchSalesList = async ({
  /* ?? I Don't know about it */
  start, end,
}) => {
  const response = await fetch(`${apiserver}/saleslist?start=${encodeURIComponent(start)}&end=${encodeURIComponent(end)}`, {
    method: "GET",
    headers: {
      //"X-AUTH-TOKEN": jwt,
      "Content-Type": "application/json",
      'Accept': "application/json"
    },
  });

  return await response.json();
}

export {
  fetchSalesList,
}
