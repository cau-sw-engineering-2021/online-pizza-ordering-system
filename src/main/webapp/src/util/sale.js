import { apiserver } from '../../package.json';
const fetchSalesList = async ({ jwt,
  /* ?? I Don't know about it */
  start, end,
}) => {
  const response = await fetch(`${apiserver}/saleslist?start=${encodeURIComponent(start)}&end=${encodeURIComponent(end)}`, {
    method: "GET",
    headers: {
      "X-AUTH-TOKEN": jwt,
    },
  });

  return await response.json();
}

export {
  fetchSalesList,
}
