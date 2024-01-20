import PageLayout from "../../components/layouts/PageLayout";
import Collections from "./partials/Collections";
import DealItems from "./partials/DealItems";
import FeaturedProducts from "./partials/FeaturedProducts";
import FlashSale from "./partials/FlashSale";
import HomeBanner from "./partials/HomeBanner";
export default function Homepage() {
  return (
    <PageLayout>
      <HomeBanner />
      <DealItems />
      <Collections />
      <FlashSale />
      <FeaturedProducts />
    </PageLayout>
  );
}
