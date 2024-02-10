import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import CategoryItems from "./pages/CategoryItems/CategoryItems";
import CollectionItems from "./pages/CollectionItems/CollectionItem";
import DealItems from "./pages/DealItems/DealItems";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/product-detail" element={<ProductDetail />} />
      <Route path="/shop-by-category" element={<CategoryItems />} />
      <Route path="/shop-by-collection" element={<CollectionItems />} />
      <Route path="/shop-by-deal" element={<DealItems />} />
    </Routes>
  );
}
