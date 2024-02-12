import PageLayout from "../../components/layouts/PageLayout";
import Breadcrumb from "../../components/ui/Breadcrumb";
import CartItems from "./partials/CartItems";
import CartSummary from "./partials/CartSummary";
 
const BREADCRUMB_ITEMS = [
  {
    title: "Cart",
    link: "/cart",
  },
];

export default function Cart() {
  return (
    <PageLayout>
      <Breadcrumb breadcrumbItems={[...BREADCRUMB_ITEMS]} />
      <section className="py-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 mb-4">
              <CartItems />
            </div>
            <div className="col-lg-4 col-md-12 mb-4">
              <CartSummary />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
