import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="page-content">
      <div className="section page-content-first">
        <div className="container text-center mb-4">
          <h1>Our Products</h1>
          <p className="max-670 mt-3 mx-md-auto">
            Explore our diverse range of products, each crafted to meet your
            unique needs and enhance your lifestyle. Browse and find what suits
            you best!
          </p>
        </div>

        <div className="container">
          <div className="row col-equalH">
            <div className="col-md-6 col-lg-4">
              <div className="service-card">
                <div className="service-card-photo">
                  <Link to="/shoe-app">
                    <img
                      src="Project/images/shose.png"
                      className="img-fluid"
                      alt="Shoes"
                    />
                  </Link>
                </div>
                <h5 className="service-card-name">
                  <a>Shoes</a>
                </h5>
                <div className="h-decor"></div>
                <p>
                  Discover comfort and style with our premium shoes, designed to
                  support your every step with cutting-edge materials.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-card">
                <div className="service-card-photo">
                  <Link to="/mac-model">
                    <img
                      src="Project/images/laptop.png"
                      className="img-fluid"
                      alt="MacModel"
                    />
                  </Link>
                </div>
                <h5 className="service-card-name">
                  <a>MacModel</a>
                </h5>
                <div className="h-decor"></div>
                <p>
                  Enhance productivity and creativity with our MacModel,
                  featuring top-notch performance and sleek design for modern
                  users.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-card">
                <div className="service-card-photo">
                  <Link to="/watch">
                    <img
                      src="Project/images/watch.png"
                      className="img-fluid"
                      alt="Watch"
                    />
                  </Link>
                </div>
                <h5 className="service-card-name">
                  <a>Watch</a>
                </h5>
                <div className="h-decor"></div>
                <p>
                  Stay stylishly on time with our sophisticated watches,
                  combining elegance with advanced functionality.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-card">
                <div className="service-card-photo">
                  <Link to="/car">
                    <img
                      src="Project/images/car.png"
                      className="img-fluid"
                      alt="Car"
                    />
                  </Link>
                </div>
                <h5 className="service-card-name">
                  <a>Car</a>
                </h5>
                <div className="h-decor"></div>
                <p>
                  Experience the thrill of driving with our state-of-the-art
                  cars, designed for performance and comfort on every journey.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-card">
                <div className="service-card-photo">
                  <Link to="/character">
                    <img
                      src="Project/images/Character.png"
                      className="img-fluid"
                      alt="Character"
                    />
                  </Link>
                </div>
                <h5 className="service-card-name">
                  <a>Rings</a>
                </h5>
                <div className="h-decor"></div>
                <p>
                  Elevate your style with our unique rings, crafted with
                  precision and designed to make a statement on any occasion.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-card">
                <div className="service-card-photo">
                  <Link to="/main-canvas">
                    <img
                      src="Project/images/phone.png"
                      className="img-fluid"
                      alt="Model Mac"
                    />
                  </Link>
                </div>
                <h5 className="service-card-name">
                  <a>iPhone 15 Pro Max</a>
                </h5>
                <div className="h-decor"></div>
                <p>
                  Discover the future of technology with our latest models,
                  designed to optimize your tech experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
