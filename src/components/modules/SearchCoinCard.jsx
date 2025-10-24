import styles from "./SearchBar.module.css";

function SearchCoinCard({ coin }) {
  return (
    <div className={styles.card}>
      <img src={coin.thumb} alt={coin.name} />
      <p>{coin.name}</p>
    </div>
  );
}

export default SearchCoinCard;
