import PageLayout from "../../components/layouts/PageLayout";
import Breadcrumb from "../../components/ui/Breadcrumb";
import ProductInfo from "./partials/ProductInfo";

export default function ProductDetail(){
  return (
    <PageLayout>
      <Breadcrumb />
      <ProductInfo />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 p-5"></div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}