import React, { useState } from "react";
import "./register.css";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = (data) => {
    const errors = {};

    if (!data.name.trim()) {
      errors.name = "Name is required";
    }

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Invalid email format";
    }

    if (!data.password) {
      errors.password = "Password is required";
    } else if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (!data.confirmPassword) {
      errors.confirmPassword = "Please confirm your password";
    } else if (data.password !== data.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Registered Data:", formData);
      // Clear form
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <div className="register-container">
      <h1 className="register-title">Register</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="register-input"
          onChange={handleChange}
          value={formData.name}
        />
        {errors.name && <p className="register-error">{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="register-input"
          onChange={handleChange}
          value={formData.email}
        />
        {errors.email && <p className="register-error">{errors.email}</p>}

        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          className="register-input"
          onChange={handleChange}
          value={formData.password}
        />
        {errors.password && <p className="register-error">{errors.password}</p>}

        <input
          type={showPassword ? "text" : "password"}
          name="confirmPassword"
          placeholder="Confirm Password"
          className="register-input"
          onChange={handleChange}
          value={formData.confirmPassword}
        />
        {errors.confirmPassword && (
          <p className="register-error">{errors.confirmPassword}</p>
        )}

        <div className="toggle-password">
          <label>
            <input
              type="checkbox"
              onChange={() => setShowPassword(!showPassword)}
            />
            Show Password
          </label>
        </div>

        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
