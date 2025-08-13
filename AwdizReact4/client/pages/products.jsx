import { useEffect, useState } from "react";
import axios from "axios";
import "./products.css";
import { useNavigate } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    existingCart.push(product);
    localStorage.setItem("cart", JSON.stringify(existingCart));

    alert(`${product.title} has been added to your cart!`);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-container">
      <h1 className="product-title">All Products</h1>

      <div className="product-section">
        {products.map((product) => (
          <div
            className="product-card"
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <div className="product-description">
              <p className="product-name">{product.title}</p>
              <p className="product-price">${product.price.toFixed(2)}</p>
            </div>

            <div className="button-container">
              <button
                className="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCart(product);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
