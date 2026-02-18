import React, { useState } from 'react';
import { Footer, Navbar } from "../components";

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:8080/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    alert(data.message);

    // Clear the form
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5 py-3">
        <h2 className="text-center mb-4">Contact Us</h2>
        <div className="row justify-content-center">
          <div className="col-md-6"> {/* Bootstrap: half-width form */}
            <form onSubmit={handleSubmit} className="p-4 shadow-lg rounded" style={{ backgroundColor: 'var(--surface-color)', border: 'var(--glass-border)' }}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your message"
                  rows="4"
                  required
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-dark w-50">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
