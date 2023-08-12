import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Department from "./pages/Department";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import AddProduct from "./pages/AddProduct";

export default function App() {
  return (
    <div className="min-h-screen p-0 w-full dark:bg-slate-900 dark:text-slate-50">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/department" element={<Department />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/products/add" element={<AddProduct />} />
      </Routes>
    </div>
  );
}
