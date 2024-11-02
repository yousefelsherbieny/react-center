import { Link } from "react-router-dom";

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
                <i className="icon-placeholder2"></i>
                1560 Holden Street San Diego, CA 92139
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
                <a href="#" className="hovicon">
                  <i className="icon-instagram-circle"></i>
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
                  src="Project/images/logo33.png"
                  alt=""
                  className="img-fluid logo"
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
                        <Link className="nav-link" to="/">
                          Home Page
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/our-services">
                          Our Services
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/our-team">
                          Our Team
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link" to="/product">
                          Product
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/contact-us">
                          ContactUs
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
