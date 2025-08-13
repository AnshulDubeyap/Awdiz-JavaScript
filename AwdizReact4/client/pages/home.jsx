import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <h1 className="home-heading">Home</h1>
      <button
        className="button"
        onClick={() => {
          navigate("/login");
        }}
      >
        login
      </button>
      <button
        className="button"
        onClick={() => {
          navigate("/products");
        }}
      >
        Products
      </button>
      <button
        className="button"
        onClick={() => {
          navigate("/register");
        }}
      >
        Register
      </button>
      <button
        className="button"
        onClick={() => {
          navigate("/cart");
        }}
      >
        Cart
      </button>
    </div>
  );
}

export default Home;
