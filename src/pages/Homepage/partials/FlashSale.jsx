import FlashBanner from "../../../assets/images/banner/falsh_sale_banner.png";

export default function FlashSale() {
  return (
    <section className="py-3">
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
