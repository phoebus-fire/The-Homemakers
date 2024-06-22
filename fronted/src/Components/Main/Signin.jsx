import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signin() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    // Handle signup logic here
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("http://localhost:8000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        if (response.status === 409) {
          throw new Error("User with email or username already exists");
        }
        throw new Error("Failed to sign up");
      }
  
      toast.success("Signup Successful");
      const result = await response.json();
      setSuccess(true);
  
      setTimeout(() => {
        navigate("/login"); // Redirect to login page after successful signup
      }, 500);
  
    } catch (error) {
      setError(error.message);
      toast.error(error.message)
    }
    // console.log("Signup submitted", formData);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="auth-page">
      <h1 className="text-5xl font-semibold w-full text-center py-[3rem]">
        Sign in
      </h1>
      <div className="form-container">
        <div className="form signup-form">
          <h2>Signup</h2>
          <form onSubmit={handleSignupSubmit}>
            <div className="input-group">
              <label>Name</label>
              <input
                type="text"
                required
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                required
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                required
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="submit-button">
              Signup
            </button>
            <div className="toggle-link">
              Already have an account? <NavLink to="/login">Login</NavLink>
            </div>
            {error && <div className="error-message">{error}</div>}
            {success && (
              <div className="success-message">Signup successful!</div>
            )}
          </form>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default Signin;
