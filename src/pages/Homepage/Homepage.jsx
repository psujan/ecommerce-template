import PageLayout from "../../components/layouts/PageLayout";
import DealItems from "./partials/DealItems";
import FeaturedProducts from "./partials/FeaturedProducts";
import HomeBanner from "./partials/HomeBanner";
export default function Homepage() {
  return (
    <PageLayout>
      <HomeBanner />
      <DealItems />
      <FeaturedProducts />
    </PageLayout>
  );
}
