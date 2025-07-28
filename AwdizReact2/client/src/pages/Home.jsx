import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const buttonStyle = {
    padding: "10px 20px",
    margin: "0 10px",
    borderRadius: "8px",
    border: "none",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "16px",
    backgroundColor: "#4f46e5", // Indigo
    color: "#fff",
  };

  return (
    <>
      <h1>Home</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          alignItems: "center",
        }}
      >
        <button style={buttonStyle} onClick={() => navigate("/login")}>
          Login
        </button>
        <button style={buttonStyle} onClick={() => navigate("/register")}>
          Register
        </button>
      </div>
    </>
  );
};

export default Home;
