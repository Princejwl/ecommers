import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">Your Cart is Empty</h4>
            <Link to="/" className="btn btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const addItem = (product) => {
    dispatch(addCart(product));
  };

  const removeItem = (product) => {
    dispatch(delCart(product));
  };

  const ShowCart = () => {
    let subtotal = state.reduce((acc, item) => acc + item.price * item.qty, 0);
    let shipping = 30.0;
    let totalItems = state.reduce((acc, item) => acc + item.qty, 0);

    return (
      <>
        <section className="h-100">
          <div className="container py-5 animate-fade-in-up">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4 shimmer-effect" style={{ backgroundColor: 'var(--surface-color)' }}>
                  <div className="card-header py-3" style={{ borderBottom: 'var(--glass-border)' }}>
                    <h5 className="mb-0">Item List</h5>
                  </div>
                  <div className="card-body">
                    {state.map((item) => (
                      <div key={item.id}>
                        <div className="row d-flex align-items-center">
                          <div className="col-lg-3 col-md-12">
                            <div className="bg-white rounded p-2" style={{ width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <img
                                src={item.image}
                                alt={item.title}
                                width={80}
                                height={60}
                                style={{ objectFit: 'contain' }}
                              />
                            </div>
                          </div>

                          <div className="col-lg-5 col-md-6">
                            <p>
                              <strong>{item.title}</strong>
                            </p>
                          </div>

                          <div className="col-lg-4 col-md-6">
                            <div className="d-flex align-items-center">
                              <button
                                className="btn btn-outline-light px-3 hover-lift"
                                onClick={() => removeItem(item)}
                              >
                                <i className="fa fa-minus"></i>
                              </button>

                              <p className="mx-3 mb-0 fs-5">{item.qty}</p>

                              <button
                                className="btn btn-outline-light px-3 hover-lift"
                                onClick={() => addItem(item)}
                              >
                                <i className="fa fa-plus"></i>
                              </button>
                            </div>

                            <p className="text-start text-md-center mt-2 text-primary" style={{ color: 'var(--primary-color)' }}>
                              <strong>
                                {item.qty} x ${item.price.toFixed(2)}
                              </strong>
                            </p>
                          </div>
                        </div>
                        <hr className="my-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card mb-4" style={{ backgroundColor: 'var(--surface-color)' }}>
                  <div className="card-header py-3" style={{ borderBottom: 'var(--glass-border)' }}>
                    <h5 className="mb-0">Order Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 bg-transparent text-white">
                        Products ({totalItems}) <span>${subtotal.toFixed(2)}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0 bg-transparent text-white">
                        Shipping <span>${shipping.toFixed(2)}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3 bg-transparent text-white">
                        <div>
                          <strong>Total amount</strong>
                        </div>
                        <span style={{ color: 'var(--primary-color)', fontSize: '1.2rem' }}>
                          <strong>${(subtotal + shipping).toFixed(2)}</strong>
                        </span>
                      </li>
                    </ul>

                    <Link to="/checkout" className="btn btn-primary btn-lg btn-block text-dark fw-bold w-100 btn-shine">
                      Go to checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Cart</h1>
        <hr />
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
