import { SimilarProductList } from "../../../data/product";
import ProductCard from "../../../components/ui/ProductCard";
export default function SimilarProducts() {
  return (
    <section className="py-2">
      <div className="container">
        <div className="pb-3 mb-3">
          <div className="pb-3">
            <h3 className="fw-bold">Similar Products</h3>
          </div>
        </div>
        <div className="row">
          <div className="row p-row no-gutters">
            {SimilarProductList.map((row, i) => {
              const card =
                (i + 1) % 5 == 0 ? (
                  <>
                    <ProductCard key={i+1} {...row}></ProductCard>
                    <div className="p-row-break"></div>
                  </>
                ) : (
                  <ProductCard key={i} {...row}></ProductCard>
                );
              return card;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
