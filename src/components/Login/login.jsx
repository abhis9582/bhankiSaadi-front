import React, { useState } from "react";
import axios from "axios";
import {  useNavigate, Link } from "react-router-dom";
// import Register from "../Register/Register";
import '../Login/login.css'


const LoginForm = ({handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();


    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("http://192.168.1.5:45455/v1/Login", {
        userEmail: email,
        password: password,
      });
      if (response.status === 200) {
        const authToken = response.data.token;
        const name = response.data.detail.name;

        localStorage.setItem("authToken", authToken);
        localStorage.setItem('name', name);

        // Call the handleLogin function passed as a prop
        handleLogin();

        // Redirect to the home page or any other route after successful login
        navigate('/home');
      }
      // Reset form and error state
      setEmail("");
      setPassword("");
      setError(null);



    } catch (error) {
      console.error("Error during login:", error);

      if (error.response && error.response.data && error.response.data.errors) {
        const validationErrors = error.response.data.errors;
        setError(`Validation error: ${Object.values(validationErrors).flat().join(', ')}`);
      } else {
        setError("Invalid email or password. Please try again.");
      }
    } finally {
      setLoading(false);
    }
   
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
 

  return (
    <div className="container-fluid">
      <div className="container  border border-4 justify-content-center text-center">
        <div className="row">
          <div className="col p-5">
            <div className="border border-2 rounded border-0">
              <h2 className=" text-center p-2">Login</h2>

              <form className=" p-5" onSubmit={handleSubmit}>
                <div className="form-group">

                  <label>Email:</label>
                  <input
                    type="email"
                    className=" form-control bg-dark text-light"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />

                  <label>Password:</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    className=" form-control bg-dark text-light"
                    placeholder="Enter your password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <div className="showcontainer">

                   <input
              type="checkbox"
              id="showPassword"
              onChange={handleShowPassword}
            />
            <label htmlFor="">Show Password</label>
                  </div>
                  
            <div className="form-group">
          
                  <button type="submit"
                  className=" btn bg-primary my-2" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                  </button>

                  {error && <p style={{ color: "red" }}>{error}</p>}
                  <div className="form-check">
                    <label htmlFor="" className=" form-check-label">
                    Not have a account?</label><span>
                    <Link to="/Register">Register</Link> </span>
                  </div>
                </div>
                </div>
              </form>
            </div>
 
          </div>
        </div>

      </div>
    </div>
   
  );
};

export default LoginForm;
