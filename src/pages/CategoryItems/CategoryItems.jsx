import PageLayout from "../../components/layouts/PageLayout";
import Breadcrumb from "../../components/ui/Breadcrumb";
import { Products } from "../../data/product";
import ProductCard from "../../components/ui/ProductCard";
import ProductFilter from "../../components/ui/prouduct-filter/ProductFilter";
import Form from "react-bootstrap/Form";

const BREADCRUMB_ITEMS = [
  {
    title: "Electronics",
    link: "/shop-by-category",
  },
  {
    title: "Laptops",
    link: "/",
  },
];
export default function CategoryItems() {
  return (
    <PageLayout>
      <Breadcrumb breadcrumbItems={[...BREADCRUMB_ITEMS]} />
      <section className="">
        <div className="container">
          <div className="row mt-3">
            <div className="col-lg-2">
              <ProductFilter />
            </div>
            <div className="col-lg-10 col-md-12">
              <div className="row mb-4">
                <div className="col-12">
                  <div className="d-flex justify-content-between align-items-top">
                    <div>
                      <span className="fs-text">
                        567 Items found for
                        <span className="ps-1 text-primary">
                          &quot;Laptops&quot;
                        </span>
                      </span>
                    </div>
                    <div className="d-flex">
                      <span className="fs-text">Sort By</span>
                      <Form.Select>
                        <option value="v0">Best Match</option>
                        <option value="v1">Price Low To High</option>
                        <option value="v2">Price High To Low</option>
                        <option value="v3">Latest Arrivals</option>
                        <option value="v4">Top Selling</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row p-row no-gutters">
                {Products.map((row, i) => (
                  <ProductCard
                    key={i}
                    {...row}
                    baseClass="col-lg-3 col-sm-6 col-md-4 mb-4"
                  ></ProductCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
