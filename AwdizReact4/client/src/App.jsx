import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home";
import Login from "../../pages/Login";
import Register from "../../pages/register";
import NotFound from "../../pages/notFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
