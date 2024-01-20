import FlashBanner from "../../../assets/images/banner/falsh_sale_banner.png";

export default function FlashSale() {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <img src={FlashBanner} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}
