const AllServices = () => {
  return (
    <>
      <div className="page-content">
        <div className="section page-content-first">
          <div className="container">
            <div className="text-center mb-2  mb-md-3 mb-lg-4">
              <div className="h-sub theme-color">What We Offer</div>
              <h1>Our Services</h1>
              <div className="h-decor"></div>
              <div className="text-center mt-4">
                <p>
                  All these services are rendered to enable patients enjoy a
                  healthy life style where they feel no hesitation
                  <br />
                  in displaying their beautiful smile
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row col-equalH">
             
              <div className="col-md-6 col-lg-4">
                <div className="service-card">
                  <div className="service-card-photo">
                    <a href="service-page.html">
                      <img
                        src="Project/images/content/services-04.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <h5 className="service-card-name">
                    <a href="service-page.html">Dental Implants</a>
                  </h5>
                  <div className="h-decor"></div>
                  <p>
                    When teeth are lost because of disease or an accident,
                    dental implants may be a good option
                  </p>
                  <ul className="marker-list-md">
                    <li>Same Day Implants</li>
                    <li>Implant br/idges</li>
                    <li>Dental Implants</li>
                    <li>All on 4</li>
                    <li>Implant Dentures</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="service-card">
                  <div className="service-card-photo">
                    <a href="service-page.html">
                      <img
                        src="Project/images/content/services-07.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <h5 className="service-card-name">
                    <a href="service-page.html">Periodontics</a>
                  </h5>
                  <div className="h-decor"></div>
                  <p>
                    The Periodontal department provides diagnosis, prevention
                    and treatment of simple to severe periodontal (gum) disease.
                  </p>
                  <ul className="marker-list-md">
                    <li>Gingivitis</li>
                    <li>Mild Periodontitis</li>
                    <li>Moderate Periodontitis</li>
                    <li>Severe Periodontitis</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="service-card">
                  <div className="service-card-photo">
                    <a href="service-page.html">
                      <img
                        src="Project/images/content/services-08.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <h5 className="service-card-name">
                    <a href="service-page.html">Dental Surgery</a>
                  </h5>
                  <div className="h-decor"></div>
                  <p>
                    Surgeries are carried out in cases when other methods of
                    therapeutic treatment can’t be used.
                  </p>
                  <ul className="marker-list-md">
                    <li>Teeth extraction</li>
                    <li>Curettage</li>
                    <li>Plastic surgery</li>
                    <li>Other types of surgeries</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="service-card">
                  <div className="service-card-photo">
                    <a href="service-page.html">
                      <img
                        src="Project/images/content/services-09.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                  <h5 className="service-card-name">
                    <a href="service-page.html">Crowns & br/idges</a>
                  </h5>
                  <div className="h-decor"></div>
                  <p>
                    Crowns and br/idges are the most usual dental restoration
                    work in dentistry.{" "}
                  </p>
                  <ul className="marker-list-md">
                    <li>Removable dentures</li>
                    <li>Fixed dentures</li>
                    <li>Veneers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllServices;
