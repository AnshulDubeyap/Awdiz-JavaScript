import React, { useState } from "react";
import "./login.css";

function Login() {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const validate = (data) => {
    const errors = {};
    if (!data.email) {
      errors.email = "Email is required";
    }
    if (!data.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(userData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Submitted Data:", userData);
      setUserData({ email: "", password: "" }); // Clear fields only if valid
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="login-input"
          name="email"
          required
          onChange={handleChange}
          value={userData.email}
        />
        {errors.email && <p className="login-error">{errors.email}</p>}

        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          className="login-input"
          required
          onChange={handleChange}
          value={userData.password}
        />
        {errors.password && <p className="login-error">{errors.password}</p>}

        <div className="toggle-password">
          <label>
            <input
              type="checkbox"
              onChange={() => setShowPassword(!showPassword)}
            />
            Show Password
          </label>
        </div>

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
