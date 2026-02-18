import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All"); // Track active filter
  let componentMounted = true;

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        {[...Array(6)].map((_, i) => (
          <div className="col-md-4 col-sm-6 col-12 mb-4" key={i}>
            <Skeleton height={592} />
          </div>
        ))}
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
    setActiveFilter(cat);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-5 d-flex flex-wrap justify-content-center gap-3">
          <button 
            className={`btn filter-btn ${activeFilter === "All" ? "active" : ""}`} 
            onClick={() => { setFilter(data); setActiveFilter("All"); }}
          >
            All
          </button>
          <button 
            className={`btn filter-btn ${activeFilter === "men's clothing" ? "active" : ""}`} 
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button 
            className={`btn filter-btn ${activeFilter === "women's clothing" ? "active" : ""}`} 
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button 
            className={`btn filter-btn ${activeFilter === "jewelery" ? "active" : ""}`} 
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button 
            className={`btn filter-btn ${activeFilter === "electronics" ? "active" : ""}`} 
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
        </div>

        {filter.map((product) => (
          <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-12 mb-4 animate-fade-in-up" style={{ animationDelay: `${product.id * 50}ms` }}>
            <div className="card h-100 text-center p-4 hover-lift" style={{ backgroundColor: 'var(--surface-color)', border: 'var(--glass-border)' }}>
              <div className="overflow-hidden rounded-3 mb-3 bg-white d-flex align-items-center justify-content-center" style={{ height: "250px" }}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="card-img-top"
                    style={{
                      height: "200px",
                      width: "auto",
                      objectFit: "contain",
                      transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1) rotate(2deg)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}
                  />
              </div>
              <div className="card-body p-0">
                <h5 className="card-title mb-2 fs-5 fw-bold text-truncate" style={{ color: 'var(--text-primary)' }}>{product.title}</h5>
                <p className="card-text mb-3 text-truncate" style={{ color: 'var(--text-secondary)' }}>
                  {product.description}
                </p>
              </div>
              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item fw-bold border-0 bg-transparent fs-4" style={{ color: 'var(--primary-color)' }}>${product.price}</li>
              </ul>
              <div className="card-body p-0 d-flex justify-content-center gap-2">
                <Link to={`/product/${product.id}`} className="btn btn-dark btn-sm px-4 py-2 btn-shine">
                  Buy Now
                </Link>
                <button className="btn btn-outline-dark btn-sm px-4 py-2 hover-lift" onClick={() => addProduct(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12">
          <h2 className="display-5 text-center">Latest Products</h2>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default Products;
