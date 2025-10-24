import { useState } from "react";
import { searchCoinList } from "../../services/cryptoApi";

import styles from "./SearchBar.module.css";
import SearchCoinCard from "./SearchCoinCard";

function SesrchBar({ currency, setCurrency }) {
  const [searchCoins, setSearchCoins] = useState([]);
  const [show, setShow] = useState(false);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase().trim();
    if (!value) {
      setShow(false);
      return;
    }

    try {
      const searchCoins = async () => {
        const { url, options } = searchCoinList(value);
        const response = await fetch(url, options);
        const json = await response.json();
        setSearchCoins(json.coins);
        setShow(true);
      };
      searchCoins();
    } catch (error) {
      console.log(error);
    }
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
            {searchCoins.length > 0 ? (
              searchCoins.map((coin) => (
                <SearchCoinCard key={coin.id} coin={coin} />
              ))
            ) : (
              <p>There is nothing to show</p>
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
