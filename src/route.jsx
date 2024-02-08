import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import CategoryItems from "./pages/CategoryItems/CategoryItems";
import CollectionItem from "./pages/CollectionItems/CollectionItem";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/product-detail" element={<ProductDetail />} />
      <Route path="/shop-by-category" element={<CategoryItems />} />
      <Route path="/shop-by-collection" element={<CollectionItem />} />
    </Routes>
  );
}