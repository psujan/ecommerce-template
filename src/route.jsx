import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import ProductDetail from "./pages/ProductDetail/ProductDetail";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/product-detail" element={<ProductDetail />} />

    </Routes>
  );
}