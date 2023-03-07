import React from "react";

//router
import { Link } from "react-router-dom";

//style
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <section className="banner-section">
        <div className="banner">
          <div className="detail-box">
            <h1>
              <span>Sale 20% Off</span> On Every Thing
            </h1>
            <Link to="products">Shop Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
