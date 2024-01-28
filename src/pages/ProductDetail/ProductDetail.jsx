import PageLayout from "../../components/layouts/PageLayout";
import Breadcrumb from "../../components/ui/Breadcrumb";
import ProductDescription from "./partials/ProductDescription";
import ProductInfo from "./partials/ProductInfo";
import ProductReviews from "./partials/ProductReviews";

export default function ProductDetail(){
  return (
    <PageLayout>
      <Breadcrumb />
      <ProductInfo />
      <ProductDescription />
      <ProductReviews />
    </PageLayout>
  )
}