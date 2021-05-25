import { apiserver } from "../../package.json";

const fetchSalesList = async () => {
  const response = await fetch(`${apiserver}/sales/getsaleslist`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  console.log(response);
  return await response.json();
};

const fetchSalesListByPeriod = async ({
  /* ?? I Don't know about it */
  start,
  end,
}) => {
  const response = await fetch(
    `${apiserver}/sales/saleslist?start=${encodeURIComponent(
      start
    )}&end=${encodeURIComponent(end)}`,
    {
      method: "GET",
      headers: {
        //"X-AUTH-TOKEN": jwt,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );

  return await response.json();
};

export { fetchSalesList, fetchSalesListByPeriod };
