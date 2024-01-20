import Button from "../../../components/ui/Button";
import styles from "../styles/Banner.module.scss";

export default function HomeBanner() {
  return (
    <div className={`${styles.bannerImg} w-100`}>
      <div className="container">
        <div className={`${styles.bannerDesc}  py-5`}>
          <h2 className="fw-bold mb-3">Grab 30% Discount</h2>
          <p className={`mb-3 text-muted ${styles.bannerText}`}>
            Find cosmetic accessories at best price along with top hot deals.
          </p>
          <p className={styles.bannerTextPrice}>
            <span>Starting At</span>
            <span className="text-primary fs-5 fw-bold px-2">$50</span>
          </p>
          <div className="py-1 mt-3">
            <Button title="Shop Now" />
          </div>
        </div>
      </div>
    </div>
  );
}
