import styles from "./SearchBar.module.css";

function SesrchBar({ currency, setCurrency }) {
  const handleSearch = (event) => {
    console.log(event.target.value);
  };
  const handleCurrency = (event) => {
    const value = event.target.value;
    setCurrency(value);
  };
  return (
    <div className={styles.search}>
      <input type="text" placeholder="Search ..." onChange={handleSearch} />
      <select value={currency} onChange={handleCurrency}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPy</option>
      </select>
    </div>
  );
}

export default SesrchBar;
