import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./c.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {
  return (
    <div className="hero border-1 pb-3">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="card bg-dark text-white border-0 mx-3 overflow-hidden rounded-4">
            <div style={{ position: 'relative', height: '500px' }}>
                <img
                className="card-img img-fluid w-100 h-100"
                src="./assets/main.jpeg"
                alt="Slide 1"
                style={{ objectFit: "cover", opacity: 0.6 }}
                />
                 <div className="card-img-overlay d-flex flex-column justify-content-center align-items-start p-5">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bold mb-3 animate-slide-in">New Season Arrivals</h5>
                        <p className="card-text fs-4 mb-4 d-none d-sm-block text-white-50 animate-fade-in-up delay-200">
                        Discover the latest trends and gear up for your next adventure!
                        </p>
                        <a href="#products" className="btn btn-light btn-lg px-4 py-2 fw-bold animate-fade-in-up delay-400 btn-shine">Shop Now</a>
                    </div>
                </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card bg-dark text-white border-0 mx-3 overflow-hidden rounded-4">
            <div style={{ position: 'relative', height: '500px' }}>
                <img
                className="card-img img-fluid w-100 h-100"
                src="./assets/main4.webp"
                alt="Slide 2"
                style={{ objectFit: "cover", opacity: 0.6 }}
                />
                <div className="card-img-overlay d-flex flex-column justify-content-center align-items-start p-5">
                    <div className="container fadeIn">
                        <h5 className="card-title display-3 fw-bold mb-3">Fresh Styles</h5>
                        <p className="card-text fs-4 mb-4 d-none d-sm-block text-white-50">
                        Upgrade your wardrobe with the latest fashion picks.
                        </p>
                        <a href="/product" className="btn btn-outline-light btn-lg px-4 py-2 fw-bold">View Collection</a>
                    </div>
                </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card bg-dark text-white border-0 mx-3 overflow-hidden rounded-4">
             <div style={{ position: 'relative', height: '500px' }}>
                <img
                className="card-img img-fluid w-100 h-100"
                src="./assets/main3.webp"
                alt="Slide 3"
                style={{ objectFit: "cover", opacity: 0.6 }}
                />
                <div className="card-img-overlay d-flex flex-column justify-content-center align-items-start p-5">
                    <div className="container fadeIn">
                        <h5 className="card-title display-3 fw-bold mb-3">Electronics & More</h5>
                        <p className="card-text fs-4 mb-4 d-none d-sm-block text-white-50">
                        Great deals on top tech and home essentials!
                        </p>
                        <a href="/product" className="btn btn-light btn-lg px-4 py-2 fw-bold">Shop Tech</a>
                    </div>
                </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
