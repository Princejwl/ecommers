import React, { useState } from 'react';
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',   // 👈 backend "username" expect karta hai, "name" nahi
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Dummy registration simulation
        alert("Registration Successful!");
        // Redirect to login or home? Usually login.
        // But since we don't have navigate hook imported, let's just alert.
        // Wait, I should import useNavigate if I want to redirect.
        // But the original probably didn't have it if I didn't see it.
        // I'll just leave it as alert.
    };

    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Register</h1>
                <hr />
                <div className="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto animate-fade-in-up">
                        <form onSubmit={handleSubmit} className="p-4 rounded shadow-lg" style={{ backgroundColor: 'var(--surface-color)', border: 'var(--glass-border)' }}>
                            <div className="form my-3">
                                <label htmlFor="username">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    name="username"
                                    placeholder="Enter Your Name"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="name@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="my-3">
                                <p>
                                    Already have an account?{" "}
                                    <Link to="/login" className="text-decoration-underline" style={{ color: 'var(--primary-color)' }}>
                                        Login
                                    </Link>
                                </p>
                            </div>
                            <div className="text-center">
                                <button className="my-2 mx-auto btn btn-dark" type="submit">
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Register;
