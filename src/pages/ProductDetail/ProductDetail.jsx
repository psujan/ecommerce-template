import PageLayout from "../../components/layouts/PageLayout";
import Breadcrumb from "../../components/ui/Breadcrumb";
import ProductDescription from "./partials/ProductDescription";
import ProductInfo from "./partials/ProductInfo";
import ProductReviews from "./partials/ProductReviews";
import SimilarProducts from "./partials/SimilarProducts";

const BREADCRUMB_ITEMS = [
  {
    title: "Electronics",
    link: "/shop-by-category",
  },
  {
    title: "Camera",
    link: "/shop-by-category",
  },
  {
    title: "Canyon Camera 4k Lens Zoom Pro",
    link: "",
  },
];

export default function ProductDetail() {
  return (
    <PageLayout>
      <Breadcrumb breadcrumbItems={[...BREADCRUMB_ITEMS]} />
      <ProductInfo />
      <ProductDescription />
      <ProductReviews />
      <SimilarProducts />
    </PageLayout>
  );
}
