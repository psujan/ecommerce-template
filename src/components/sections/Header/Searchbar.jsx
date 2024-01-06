import styles from "./styles/Searchbar.module.scss";
export default function SearchBar() {
  return (
    <div className={`${styles.searchBar} d-none d-lg-block`}>
      <form action="" className="d-flex position-relative align-items-center">
        <input
          type="search"
          placeholder="Search Products"
          className={`form-control shadow-none ${styles.inputSearch}`}
        />
        <button className={styles.btnSearch}>
          <i className="ri-search-line"></i>
        </button>
      </form>
    </div>
  );
}
