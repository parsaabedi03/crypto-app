const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-4nsazUduzeGmjoETbKSxRu63";

const getCoinList = (currency, paginate) => {
  const url = `${BASE_URL}/coins/markets?vs_currency=${currency}&price_change_percentage=1h&per_page=20&page=${paginate}`;
  const options = {
    method: "GET",
    headers: { "x-cg-demo-api-key": API_KEY },
  };
  return { url, options };
};

const searchCoinList = (search) => {
  const url = `${BASE_URL}/search?query=${search}`;
  const options = {
    method: "GET",
    headers: { "x-cg-demo-api-key": API_KEY },
  };
  return { url, options };
};

const getChartData = (id) => {
  const now = Math.floor(Date.now() / 1000);
  const oneYearAgo = Math.floor(
    (Date.now() - 365 * 24 * 60 * 60 * 1000) / 1000
  );
  console.log({now,oneYearAgo})
  const url = `${BASE_URL}/coins/${id}/market_chart/range?vs_currency=usd&from=${oneYearAgo}&to=${now}`;
  const options = {
    method: "GET",
    headers: { "x-cg-demo-api-key": API_KEY },
  };
  return { url, options };
};

export { getCoinList, searchCoinList, getChartData };
