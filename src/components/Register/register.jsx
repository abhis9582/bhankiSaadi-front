// import React from 'react'
import Footer from '../Footer/footer';
// import { useState } from 'react';
import axios from 'axios';
import React, { useState } from 'react';
import Login from '../Login/login';
import { Link } from 'react-router-dom';


const Register = () => {

    const [formData, setFormData] = useState({
        Name: '',
        SurName: '',
        email: '',
        Address: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const prepareFormData = () => {
        // Perform any data cleanup or validation here
        return formData;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const cleanedFormData = prepareFormData();
            const response = await axios.post('http://192.168.1.3:45456/v1/Register', cleanedFormData);
            console.log("Successfully register..")
            alert(formData);
            // Rest of the code...
        } catch (error) {
            console.error('Error submitting registration:', error.message);
        }
    };

    return (
        <div className="container text-center">
            <div className="row d-flex ">
                <div className="col p-5 justify-content-center">
                    <div className="border border-2 border-warning rounded rounded-5">
                        <h1 className="text-center pt-2">Register</h1>
                        <form className="p-5 needs-validation" noValidate onSubmit={handleSubmit}>
                        
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmfor="exampleInputEmail1">First Name</label>
                                        <input
                                            type="text"
                                            className="form-control bg-dark text-light"
                                            id="Name"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter firstname"
                                            name="Name"
                                            value={formData.Name}
                                            onChange={handleInputChange}
                                            required
                                        />
                                         <div className="valid-feedback">
      Looks good!
    </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmfor="exampleInputEmail1">Last Name</label>
                                        <input
                                            type="text"
                                            className="form-control bg-dark text-light"
                                            id="SurName"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter lastname"
                                            name="SurName"
                                            value={formData.SurName}
                                            onChange={handleInputChange}
                                            required

                                        />
                                    </div>
                                </div>
                            </div>
                            

                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmfor="exampleInputEmail1">Email address</label>
                                        <input
                                            type="email"
                                            className="form-control bg-dark text-light"
                                            id="email"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter Email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label htmfor="exampleInputEmail1">Address</label>
                                        <input
                                            type="text"
                                            className="form-control bg-dark text-light"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter address"
                                            name="Address"
                                            value={formData.Address}
                                            onChange={handleInputChange}
                                            required
                                        />   
                                         </div> <div className="form-group">
                                        <label htmfor="exampleInputEmail1">Phone number</label>
                                        <input
                                            type="tel"
                                            className="form-control bg-dark text-light"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter phonenumber"
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleInputChange}
                                            required
                                        />    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmfor="exampleInputPassword1">Password</label>
                                        <input
                                            type="password"
                                            className="form-control bg-dark text-light"
                                            id="password"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            required
                                        />         </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label htmfor="exampleInputPassword1">Confirm Password</label>
                                        <input
                                            type="password"
                                            className="form-control bg-dark text-light"
                                            id="confirmPassword"
                                            aria-describedby="confirmpassword"
                                            placeholder="Enter Confirm Password"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleInputChange}
                                            required
                                        />          </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Create Account</button>
                            <div className="form-check">
                    <label htmlFor="" className=" form-check-label">
                     have a account?</label><span>
                    <Link to="/login">Login</Link> </span>
                  </div>

                        </form>
                    </div>
                </div>
            </div>
        
        </div>
    )
}



export default Register;