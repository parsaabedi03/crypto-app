import styles from "./Pagination.module.css";

function Pagination({ paginate, setPaginate }) {
  //   const handleNext = () => {
  //     if (paginate >= 10) return;
  //     setPaginate((prev) => prev + 1);
  //   };
  //   const handlePrevious = () => {};
  return (
    <div className={styles.pagination}>
      <button
        onClick={() => setPaginate((prev) => prev - 1)}
        disabled={paginate <= 1}
      >
        Previous
      </button>
      <span className={paginate === 1 ? styles.selected : ""}>1</span>
      <span className={paginate === 2 ? styles.selected : ""}>2</span>
      <p>. . .</p>
      {paginate > 2 && paginate < 9 && (
        <>
          <span className={styles.selected}>{paginate}</span>
          <p>. . .</p>
        </>
      )}
      <span className={paginate === 9 ? styles.selected : ""}>9</span>
      <span className={paginate === 10 ? styles.selected : ""}>10</span>
      <button
        onClick={() => setPaginate((prev) => prev + 1)}
        disabled={paginate >= 10}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
