import ProductCard from "../../../components/ui/ProductCard";
import { Products } from "../../../data/product";
console.log(Products);

export default function FeaturedProducts() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading mb-4">
          <h2 className="fw-bold ">For You</h2>
        </div>
        <div className="row p-row no-gutters">
          {Products.map((row, i) => {
            console.log(i);
            const card =
              (i + 1) % 5 == 0 ? (
                <>
                  <ProductCard key={i} {...row}></ProductCard>
                  <div className="p-row-break"></div>
                </>
              ) : (
                <ProductCard key={i} {...row}></ProductCard>
              );
            return card;
          })}
        </div>
      </div>
    </section>
  );
}
