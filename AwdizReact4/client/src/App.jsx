import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/Login";
import Register from "../pages/register";
import NotFound from "../pages/notFound";
import Products from "../pages/product";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/products" element={<Products />}></Route>
    </Routes>
  );
}

export default App;
