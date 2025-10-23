import { useEffect, useState } from "react";

import TableCoin from "../modules/TableCoin";
import { getCoinList } from "../../services/cryptoApi";
import SearchBar from "../modules/SearchBar";
import Pagination from "../modules/Pagination";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [currency, setCurrency] = useState("usd");
  const [paginate, setPaginate] = useState(1);

  useEffect(() => {
    const getData = async () => {
      const { url, options } = getCoinList(currency, paginate);
      const response = await fetch(url, options);
      const json = await response.json();
      setCoins(json);
    };
    getData();
  }, [currency, paginate]);

  return (
    <div>
      <SearchBar currency={currency} setCurrency={setCurrency} />
      <TableCoin coins={coins} currency={currency} />
      <Pagination paginate={paginate} setPaginate={setPaginate} />
    </div>
  );
}

export default HomePage;
