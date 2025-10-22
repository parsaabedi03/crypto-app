import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1>Crypto App</h1>
      <p>React Project</p>
    </header>
  );
}

export default Header;
