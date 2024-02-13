import PageLayout from "../../components/layouts/PageLayout";
import Breadcrumb from "../../components/ui/Breadcrumb";
import DeliveryAddress from "./partials/DeliveryAddress";
import OrderSummary from "./partials/OrderSummary";
import CheckoutSummary from "./partials/CheckoutSummary";

const BREADCRUMB_ITEMS = [
  {
    title: "Checkout",
    link: "/checkout",
  },
];
export default function Checkout() {
  return (
    <PageLayout>
      <Breadcrumb breadcrumbItems={[...BREADCRUMB_ITEMS]}></Breadcrumb>
      <section className="py-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 mb-4">
              <DeliveryAddress />
              <OrderSummary />
            </div>
            <div className="col-lg-4 col-md-12 mb-4">
              <CheckoutSummary />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
