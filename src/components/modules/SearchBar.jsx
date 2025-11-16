import { useState, useEffect } from "react";
import { searchCoinList } from "../../services/cryptoApi";

import styles from "./SearchBar.module.css";
import SearchCoinCard from "./SearchCoinCard";
import Loading from "./Loading";

function SesrchBar({ currency, setCurrency }) {
  const [query, setQuery] = useState("");
  const [searchCoins, setSearchCoins] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!query) {
      setShow(false);
      return;
    }

    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const { url, options } = searchCoinList(query);
        const response = await fetch(url, {
          ...options,
          signal: controller.signal,
        });
        const json = await response.json();
        setSearchCoins(json.coins);
        setShow(true);
      } catch (err) {
        if (err.name !== "AbortError") console.log(err);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [query]);

  const handleSearch = (e) => {
    setQuery(e.target.value.toLowerCase().trim());
  };
  
  const handleCurrency = (event) => {
    const value = event.target.value;
    setCurrency(value);
  };

  return (
    <div className={styles.search}>
      <div className={styles.container}>
        <input type="text" placeholder="Search ..." onChange={handleSearch} />
        {show && (
          <div>
            {!searchCoins.length ? (
              <Loading />
            ) : (
              searchCoins.map((coin) => (
                <SearchCoinCard key={coin.id} coin={coin} />
              ))
            )}
          </div>
        )}
      </div>
      <select value={currency} onChange={handleCurrency}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPy</option>
      </select>
    </div>
  );
}

export default SesrchBar;
