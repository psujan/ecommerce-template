import PageLayout from "../../components/layouts/PageLayout";
import Breadcrumb from "../../components/ui/Breadcrumb";
import { SearchProducts } from "../../data/product";
import ProductCard from "../../components/ui/ProductCard";
import SortFilter from "../../components/ui/select-filter/SortFilter";
import CategoryFilter from "../../components/ui/select-filter/CategoryFilter";
import DealFilter from "../../components/ui/select-filter/DealFilter";
import PriceFilter from "../../components/ui/select-filter/PriceFilter";
import ColorFilter from "../../components/ui/select-filter/ColorFilter";
import RelatedSearch from "./partials/RelatedSearch";

const BREADCRUMB_ITEMS = [
  {
    title: "Search Results",
    link: "/",
  },
];

export default function SearchResults() {
  return (
    <PageLayout>
      <Breadcrumb breadcrumbItems={[...BREADCRUMB_ITEMS]} />
      <section className="">
        <div className="container">
          <div className="row my-3">
            <div className="col-md-12">
              <p className="fs-text">
                539 results found for{" "}
                <span className="fw-medium text-primary">
                  &quot;Shoes&quot;
                </span>
              </p>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-md-12">
              <div className="d-flex align-items-center gap-4">
                <SortFilter />
                <PriceFilter />
                <CategoryFilter />
                <DealFilter />
                <ColorFilter />
                <div className="ml-auto bg-gray rounded py-2 px-2">
                  <span className=" fw-medium rounded-circle fs-tiny">
                    539 results
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-3 p-row no-gutters">
            {SearchProducts.map((row, i) => {
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
          <div className="row gap-4 my-3">
            <h3 className="fw-bold">Similar Searches</h3>
            <RelatedSearch />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
