import { useEffect, useState } from "react";

import TableCoin from "../modules/TableCoin";
import { getCoinList } from "../../services/cryptoApi";
import SearchBar from "../modules/SearchBar";
import Pagination from "../modules/Pagination";
import ModalChart from "../modules/ModalChart";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [currency, setCurrency] = useState("usd");
  const [paginate, setPaginate] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [coinData, setCoinData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const { url, options } = getCoinList(currency, paginate);
      const response = await fetch(url, options);
      const json = await response.json();
      setCoins(json);
    };
    getData();
  }, [currency, paginate]);

  const handleModal = (data) => {
    setShowModal(true);
    setCoinData(data);
  };

  return (
    <div>
      <SearchBar currency={currency} setCurrency={setCurrency} />
      <TableCoin coins={coins} currency={currency} handleModal={handleModal} />
      <Pagination paginate={paginate} setPaginate={setPaginate} />
      {showModal && (
        <ModalChart setShowModal={setShowModal} currency={currency} coinData={coinData} />
      )}
    </div>
  );
}

export default HomePage;
