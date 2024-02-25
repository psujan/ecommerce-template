import PageLayout from "../../components/layouts/PageLayout";
import Breadcrumb from "../../components/ui/Breadcrumb";
import { DealProducts } from "../../data/product";
import ProductCard from "../../components/ui/ProductCard";
import RowProductFilter from "../../components/ui/prouduct-filter/RowProductFilter";

const BREADCRUMB_ITEMS = [
  {
    title: "Deals",
    link: "/shop-by-deals",
  },
  {
    title: "low-price-specials",
    link: "/",
  },
];

export default function DealItems() {
  return (
    <PageLayout>
      <Breadcrumb breadcrumbItems={[...BREADCRUMB_ITEMS]} />
      <section className="py-2">
        <div className="container p-5 bg-gray rounded">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="fw-bolder mb-3">Deals</h2>
              <p className="text-muted">
                Browse our wide range of categories and products exclusively at
                low price with huge discount offers in each item.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container">
          <div className="row my-3">
            <RowProductFilter />
          </div>
          <div className="row pt-3 p-row no-gutters">
            {DealProducts.map((row, i) => {
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
    </PageLayout>
  );
}
