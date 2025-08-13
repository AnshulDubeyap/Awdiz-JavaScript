import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/Login";
import Register from "../pages/register";
import NotFound from "../pages/notFound";
import Products from "../pages/products";
import Product from "../pages/product";
import Cart from "../pages/cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/products" element={<Products />}></Route>
      <Route path="/product/:productId" element={<Product />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Routes>
  );
}

export default App;
