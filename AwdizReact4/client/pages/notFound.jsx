import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./notFound.css"

function NotFound() {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        const newCount = prev - 1;

        if (newCount === 0) {
          clearInterval(timer);
          navigate("/");
        }

        return newCount;
      });
    }, 1000);
  }, []);

  return (
    <div className="NotFound-container">
      <h1 className="NotFound-heading">Page Not Found</h1>
      <h3 className="NotFound-subheading">Redirecting to Home in {count}</h3>
    </div>
  );
}

export default NotFound;
