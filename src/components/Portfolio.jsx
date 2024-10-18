
function Portfolio() {
  return (
    <section className="section overflow-hidden" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center my-4 pb-2">
              <span className="sub-title text-uppercase">Project</span>
              <h3 className="title">My Portfolio</h3>
            </div>
          </div>
          {/* end col */}
        </div>
        {/* end row */}
        <div className="row justify-content-center">
          <div className="col-12 text-center my-4 pt-2">
            <div className="filters-group">
              <ul className="container-filter mb-0 categories-filter list-unstyled filter-options h6">
                <li
                  className="filter-list list-inline-item categories fw-normal position-relative active"
                  data-group="all"
                >
                  All
                </li>
                <li
                  className="filter-list list-inline-item categories fw-normal position-relative"
                  data-group="designing"
                >
                  Designing
                </li>
                <li
                  className="filter-list list-inline-item categories fw-normal position-relative"
                  data-group="branding"
                >
                  Branding
                </li>
                <li
                  className="filter-list list-inline-item categories fw-normal position-relative"
                  data-group="development"
                >
                  Development
                </li>
                <li
                  className="filter-list list-inline-item categories fw-normal position-relative"
                  data-group="application"
                >
                  Application
                </li>
              </ul>
            </div>
          </div>
          {/*end col*/}
        </div>
        {/*end row*/}
        <div
          id="grid"
          className="row g-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1"
        >
          <div className="col picture-item" data-groups='["branding"]'>
            <div className="portfolio position-relative portfolio-standard overflow-hidden rounded">
              <div className="port-image">
                <a
                  href="images/portfolio/1-1.jpg"
                  className="lightbox tobii-zoom"
                >
                  <img
                    src="images/portfolio/1-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>
              <div className="overlay-content bg-white p-3 rounded text-center mb-2">
                <h5 className="portfolio-title mb-1">
                  <a href="javascript:void(0)" className="text-dark">
                    Fishy Work
                  </a>
                </h5>
                <span className="text-muted">Branding</span>
              </div>
            </div>
          </div>
          {/*end col*/}
          <div className="col picture-item" data-groups='["branding"]'>
            <div className="portfolio position-relative portfolio-standard overflow-hidden rounded">
              <div className="port-image">
                <div className="p-0 overflow-hidden">
                  <a href="images/portfolio/1-2.jpg" className="lightbox">
                    <img
                      src="images/portfolio/1-2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="overlay-content bg-white p-3 rounded text-center mb-2">
                <h5 className="portfolio-title mb-1">
                  <a href="javascript:void(0)" className="text-dark">
                    Wood Fire
                  </a>
                </h5>
                <span className="text-muted">Branding</span>
              </div>
            </div>
          </div>
          {/*end col*/}
          <div className="col picture-item" data-groups='["designing"]'>
            <div className="portfolio position-relative portfolio-standard overflow-hidden rounded">
              <div className="port-image">
                <div className="p-0 overflow-hidden">
                  <a href="images/portfolio/1-3.jpg" className="lightbox">
                    <img
                      src="images/portfolio/1-3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="overlay-content bg-white p-3 rounded text-center mb-2">
                <h5 className="portfolio-title mb-1">
                  <a href="javascript:void(0)" className="text-dark">
                    Blind Makeup
                  </a>
                </h5>
                <span className="text-muted">Designing</span>
              </div>
            </div>
          </div>
          {/*end col*/}
          <div className="col picture-item" data-groups='["development"]'>
            <div className="portfolio position-relative portfolio-standard overflow-hidden rounded">
              <div className="port-image">
                <div className="p-0 overflow-hidden">
                  <a href="images/portfolio/1-4.jpg" className="lightbox">
                    <img
                      src="images/portfolio/1-4.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="overlay-content bg-white p-3 rounded text-center mb-2">
                <h5 className="portfolio-title mb-1">
                  <a href="javascript:void(0)" className="text-dark">
                    Pink Flower
                  </a>
                </h5>
                <span className="text-muted">Development</span>
              </div>
            </div>
          </div>
          {/*end col*/}
          <div className="col picture-item" data-groups='["designing"]'>
            <div className="portfolio position-relative portfolio-standard overflow-hidden rounded">
              <div className="port-image">
                <div className="p-0 overflow-hidden">
                  <a href="images/portfolio/1-5.jpg" className="lightbox">
                    <img
                      src="images/portfolio/1-5.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="overlay-content bg-white p-3 rounded text-center mb-2">
                <h5 className="portfolio-title mb-1">
                  <a href="javascript:void(0)" className="text-dark">
                    Cutting Skills
                  </a>
                </h5>
                <span className="text-muted">Designing</span>
              </div>
            </div>
          </div>
          {/*end col*/}
          <div className="col picture-item" data-groups='["application"]'>
            <div className="portfolio position-relative portfolio-standard overflow-hidden rounded">
              <div className="port-image">
                <div className="p-0 overflow-hidden">
                  <a href="images/portfolio/1-6.jpg" className="lightbox">
                    <img
                      src="images/portfolio/1-6.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="overlay-content bg-white p-3 rounded text-center mb-2">
                <h5 className="portfolio-title mb-1">
                  <a href="javascript:void(0)" className="text-dark">
                    Some Lights
                  </a>
                </h5>
                <span className="text-muted">Application</span>
              </div>
            </div>
          </div>
          {/*end col*/}
        </div>
        {/* end row */}
      </div>
      {/*end container*/}
    </section>
  );
}

export default Portfolio;
