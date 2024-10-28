import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="page-content">
      <div className="section page-content-first">
        <div className="container text-center mb-4">
          <h1>Our Products</h1>
          <p className="max-670 mt-3 mx-md-auto">
            Our programs customize the weight loss plan to the patient’s needs.
            All plans are medically supervised and under physician’s care.
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
                  Healthy eating is one of the best things you can do to prevent
                  and control health problems such as heart disease, high blood
                  pressure, type 2 diabetes, and some types of cancer.
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
                  Healthy eating is one of the best things you can do to prevent
                  and control health problems such as heart disease, high blood
                  pressure, type 2 diabetes, and some types of cancer.
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
                      alt="watch"
                    />
                  </Link>
                </div>
                <h5 className="service-card-name">
                  <a>Shoes</a>
                </h5>
                <div className="h-decor"></div>
                <p>
                  Healthy eating is one of the best things you can do to prevent
                  and control health problems such as heart disease, high blood
                  pressure, type 2 diabetes, and some types of cancer.
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
                      alt="car"
                    />
                  </Link>
                </div>
                <h5 className="service-card-name">
                  <a>Shoes</a>
                </h5>
                <div className="h-decor"></div>
                <p>
                  Healthy eating is one of the best things you can do to prevent
                  and control health problems such as heart disease, high blood
                  pressure, type 2 diabetes, and some types of cancer.
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
