import CoinCard from "./CoinCard";
import Loading from "./Loading";

import styles from "./TableCoin.module.css";

function TableCoin({ coins, currency, handleModal }) {
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
        {!coins.length && (
          <tr>
            <td colSpan="6">
              <Loading />
            </td>
          </tr>
        )}
        {coins.map((coin) => (
          <CoinCard
            key={coin.id}
            data={coin}
            currency={currency}
            handleModal={handleModal}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TableCoin;
