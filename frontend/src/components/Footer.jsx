import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white py-5" style={{ backgroundColor: 'var(--surface-color)', borderTop: 'var(--glass-border)' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4">
            <h5 className="font-weight-bold mb-3">Company</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-white text-decoration-none hover-underline-animation">About Us</a></li>
              <li><a href="/contact" className="text-white text-decoration-none hover-underline-animation">Contact</a></li>
              <li><a href="/careers" className="text-white text-decoration-none hover-underline-animation">Careers</a></li>
              <li><a href="/privacy-policy" className="text-white text-decoration-none hover-underline-animation">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="font-weight-bold mb-3">Customer Service</h5>
            <ul className="list-unstyled">
              <li><a href="/faq" className="text-white text-decoration-none hover-underline-animation">FAQ</a></li>
              <li><a href="/returns" className="text-white text-decoration-none hover-underline-animation">Returns</a></li>
              <li><a href="/shipping" className="text-white text-decoration-none hover-underline-animation">Shipping Info</a></li>
              <li><a href="/terms" className="text-white text-decoration-none hover-underline-animation">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="font-weight-bold mb-3">Follow Us</h5>
            <ul className="list-inline">
              <li className="list-inline-item hover-lift"><a href="https://www.facebook.com" className="text-white text-decoration-none"><i className="fab fa-facebook-f"></i> Facebook</a></li>
              <li className="list-inline-item hover-lift"><a href="https://www.instagram.com" className="text-white text-decoration-none"><i className="fab fa-instagram"></i> Instagram</a></li>
              <li className="list-inline-item hover-lift"><a href="https://twitter.com" className="text-white text-decoration-none"><i className="fab fa-twitter"></i> Twitter</a></li>
              <li className="list-inline-item hover-lift"><a href="https://www.linkedin.com" className="text-white text-decoration-none"><i className="fab fa-linkedin-in"></i> LinkedIn</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="font-weight-bold mb-3">Newsletter</h5>
            <p className="mb-3">Sign up for our newsletter to get the latest updates on new arrivals and offers.</p>
            <form>
              <div className="input-group">
                <input type="email" placeholder="Enter your email" className="form-control" />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-primary">Subscribe</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="mb-0">&copy; 2025 React Ecommerce. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
