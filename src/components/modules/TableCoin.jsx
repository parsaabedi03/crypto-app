import CoinCard from "./CoinCard";

import styles from "./TableCoin.module.css";

function TableCoin({ coins, currency }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Coin</th>
          <th>Name</th>
          <th>Price</th>
          <th>24h</th>
          <th>Total Volume</th>
        </tr>
      </thead>
      <tbody>
        {coins.map((coin) => (
          <CoinCard key={coin.id} data={coin} currency={currency} />
        ))}
      </tbody>
    </table>
  );
}

export default TableCoin;
