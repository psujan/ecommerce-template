import Logo from "../../ui/Logo";
import HeaderBottom from "./HeaderBottom";
import MobileHeader from "./MobileHeader";
import SearchBar from "./Searchbar";
import UserToolTest from "./UserToolTest";
import styles from "./styles/Header.module.scss";

export default function Header() {
  return (
    <header>
      <div
        className={`${styles.headerTop} d-none d-lg-flex align-items-center border-bottom-light`}
      >
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <Logo />
            <SearchBar />
            <UserToolTest />
          </div>
        </div>
      </div>
      <HeaderBottom />
      <MobileHeader />
    </header>
  );
}
