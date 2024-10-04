import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-quickLinks js-header-quickLinks d-lg-none">
        <div className="quickLinks-top js-quickLinks-top"></div>
        <div className="js-quickLinks-wrap-m"></div>
      </div>
      <div className="header-topline d-none d-lg-flex">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-auto d-flex align-items-center">
              <div className="header-phone">
                <i className="icon-telephone"></i>
                <a href="tel:1-847-555-5555">1-800-267-0000</a>
              </div>
              <div className="header-info">
                <i className="icon-placeholder2"></i>1560 Holden Street San
                Diego, CA 92139
              </div>
              <div className="header-info">
                <i className="icon-black-envelope"></i>
                <a href="mailto:info@dentco.net">info@dentco.net</a>
              </div>
            </div>
            <div className="col-auto ml-auto d-flex align-items-center">
              <span className="header-social">
                <a href="#" className="hovicon">
                  <i className="icon-facebook-logo-circle"></i>
                </a>
                <a href="#" className="hovicon">
                  <i className="icon-twitter-logo-circle"></i>
                </a>
                <a href="#" className="hovicon">
                  <i className="icon-google-plus-circle"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="header-content">
        <div className="container">
          <div className="row align-items-lg-center">
            <button
              className="navbar-toggler collapsed"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
            >
              <span className="icon-menu"></span>
            </button>
            <div className="col-lg-auto col-lg-2 d-flex align-items-lg-center">
              <a href="index-2.html" className="header-logo">
                <img
                  src="Project/images/logo.png"
                  alt=""
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-lg ml-auto header-nav-wrap">
              <div className="header-nav js-header-nav">
                <nav className="navbar navbar-expand-lg btco-hover-menu">
                  <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarNavDropdown"
                  >
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a className="nav-link" href="about.html">
                          About Us
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="services.html"
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Services
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <Link className="dropdown-item" to="/services">
                              All Services
                            </Link>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="service-page.html"
                            >
                              Service Page
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="prices.html">
                              Prices
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="shop-listing.html"
                            >
                              Online Shop
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a
                          href="gallery.html"
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Smiles Gallery
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="gallery.html">
                              Creative Gallery
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="gallery-simple.html"
                            >
                              Simple Gallery
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a
                          href="our-specialist.html"
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Our Specialists
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a
                              className="dropdown-item"
                              href="our-specialist.html"
                            >
                              All Specialists
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="doctor-page.html"
                            >
                              Doctor Page
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="schedule.html">
                              Schedule Table
                            </a>
                          </li>
                        </ul>
                      </li>{" "}
                      <li className="nav-item">
                        <a className="nav-link" href="testimonials.html">
                          Testimonials
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          href="blog.html"
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Blog
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="blog.html">
                              Blog Posts
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="blog-grid.html">
                              Blog Grid Posts
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="blog-post-page.html"
                            >
                              Blog Single Post
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="contact.html">
                          Contacts
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="header-cart cart-toggler">
                <a href="#" className="icon icon-cart"></a>
                <span className="badge">2</span>
                <div className="header-cart-dropdown">
                  <div className="prd-sm">
                    <div className="prd-sm-img">
                      <a href="shop-product.html">
                        <img
                          src="Project/images/product/prd-sm-1.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="prd-sm-info">
                      <h3>
                        <a href="shop-product.html">
                          Active Wow Teeth Whitening Charcoal Powder
                        </a>
                      </h3>
                      <div className="price">$38.88</div>
                    </div>
                    <div className="prd-sm-delete">
                      <i className="icon-close"></i>
                    </div>
                  </div>
                  <div className="prd-sm">
                    <div className="prd-sm-img">
                      <a href="shop-product.html">
                        <img
                          src="Project/images/product/prd-sm-2.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="prd-sm-info">
                      <h3>
                        <a href="shop-product.html">Electric Toothbrush</a>
                      </h3>
                      <div className="price">$39.97</div>
                    </div>
                    <div className="prd-sm-delete">
                      <i className="icon-close"></i>
                    </div>
                  </div>
                  <div className="header-cart-total">
                    <div className="float-left">Total:</div>
                    <div className="float-right">$78.85</div>
                  </div>
                  <a href="#" className="btn btn-sm btn-hover-fill">
                    <span>CheckOut</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
