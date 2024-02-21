import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import CategoryItems from "./pages/CategoryItems/CategoryItems";
import CollectionItems from "./pages/CollectionItems/CollectionItem";
import DealItems from "./pages/DealItems/DealItems";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Login from "./pages/Auth/Login";
import Registration from "./pages/Auth/Registration";
import SearchResults from "./pages/SearchResults/SearchResults";
import EmptySearch from "./pages/SearchResults/EmptySearch";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/product-detail" element={<ProductDetail />} />
      <Route path="/shop-by-category" element={<CategoryItems />} />
      <Route path="/shop-by-collection" element={<CollectionItems />} />
      <Route path="/shop-by-deal" element={<DealItems />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/search-results" element={<SearchResults />} />
      <Route path="/search-results-empty" element={<EmptySearch />} />

    </Routes>
  );
}
