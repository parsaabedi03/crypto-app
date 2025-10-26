import styles from "./TableCoin.module.css";

import churtUp from "../../assets/chart-up.svg";
import churtDown from "../../assets/chart-down.svg";

function CoinCard({ data, currency, handleModal }) {
  const {
    image,
    symbol,
    name,
    current_price,
    price_change_percentage_24h,
    total_volume,
  } = data;

  const icon = {
    usd: "$",
    eur: "€",
    jpy: "¥",
  };

  return (
    <tr className={styles.card}>
      <td className={styles.coin}>
        <img src={image} alt={name} />
        <button
          onClick={() =>
            handleModal(data)
          }
        >
          {symbol.toUpperCase()}
        </button>
      </td>
      <td>{name}</td>
      <td>
        {icon[currency]} {current_price?.toLocaleString()}
      </td>
      <td
        className={0 <= price_change_percentage_24h ? styles.green : styles.red}
      >
        {price_change_percentage_24h?.toFixed(2)} %
      </td>
      <td>
        {icon[currency]} {total_volume?.toLocaleString()}
      </td>
      <td>
        <img
          src={0 <= price_change_percentage_24h ? churtUp : churtDown}
          alt="chart"
        />
      </td>
    </tr>
  );
}

export default CoinCard;
