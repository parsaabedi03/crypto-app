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

export { getCoinList };
