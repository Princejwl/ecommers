import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const state = useSelector(state => state.handleCart)
    return (
        <nav className="navbar navbar-expand-lg navbar-dark py-2 sticky-top" style={{ backgroundColor: 'rgba(18, 18, 18, 0.8)', backdropFilter: 'blur(15px)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2 navbar-brand-gradient" to="/"> CLICK & CART</NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center gap-3">
                        <li className="nav-item">
                            <NavLink className="nav-link nav-link-animated" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link nav-link-animated" to="/product">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link nav-link-animated" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link nav-link-animated" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center d-flex gap-2 justify-content-center">
                        <NavLink to="/login" className="btn btn-glass btn-sm m-0 px-3"><i className="fa fa-sign-in-alt mr-1"></i> Login</NavLink>
                        <NavLink to="/register" className="btn btn-glass btn-sm m-0 px-3"><i className="fa fa-user-plus mr-1"></i> Register</NavLink>
                        <NavLink to="/cart" className="btn btn-glass btn-sm m-0 px-3"><i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length}) </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar