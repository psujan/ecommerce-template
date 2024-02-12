import DealImg1 from "../../../assets/images/banner/_b1.jpg";
import DealImg2 from "../../../assets/images/banner/_b2.jpg";
import DealCard from "../../../components/ui/homepage/DealCard";
import DealImg3 from "../../../assets/images/banner/_b3.png";

export default function DealItems() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading mb-4">
          <h2 className="fw-bold ">Shop Deals From Zenith</h2>
        </div>
        <div className="row g-4">
          <DealCard
            title="New Year Specials"
            desc="Shop new year hot sales. Offer valid til Jan 15"
            image={DealImg1}
          />
          <DealCard
            title="Exclusive Footwears"
            desc="Enjoy free shipping on footwears above $200"
            image={DealImg2}
          />
          <DealCard
            title="Latest Smartphone Deals"
            desc="Enjoy 60mos interest free on smartphones"
            image={DealImg3}
          />
        </div>
      </div>
    </section>
  );
}
