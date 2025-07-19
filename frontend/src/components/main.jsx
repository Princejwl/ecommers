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
          <div className="card bg-dark text-white border-0 mx-3">
            <img
              className="card-img img-fluid"
              src="./assets/main.jpeg"
              alt="Slide 1"
              style={{ height: "400px", objectFit: "cover", width: "100%" }}
            />
            <div className="card-img-overlay d-flex align-items-center">
              <div className="container">
                <h5 className="card-title fs-1 text fw-lighter">New Season Arrivals</h5>
                <p className="card-text fs-5 d-none d-sm-block">
                  Discover the latest trends and gear up for your next adventure!
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card bg-dark text-white border-0 mx-3">
            <img
              className="card-img img-fluid"
              src="./assets/main4.webp"
              alt="Slide 2"
              style={{ height: "400px", objectFit: "cover", width: "100%" }}
            />
            <div className="card-img-overlay d-flex align-items-center">
              <div className="container">
                <h5 className="card-title fs-1 text fw-lighter">Fresh Styles</h5>
                <p className="card-text fs-5 d-none d-sm-block">
                  Upgrade your wardrobe with the latest fashion picks.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card bg-dark text-white border-0 mx-3">
            <img
              className="card-img img-fluid"
              src="./assets/main3.webp"
              alt="Slide 3"
              style={{ height: "400px", objectFit: "cover", width: "100%" }}
            />
            <div className="card-img-overlay d-flex align-items-center">
              <div className="container">
                <h5 className="card-title fs-1 text fw-lighter">Electronics & More</h5>
                <p className="card-text fs-5 d-none d-sm-block">
                  Great deals on top tech and home essentials!
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
