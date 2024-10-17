
function About() {
  return (
    <section className="section overflow-hidden bg-light" id="about">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title mb-4 pb-2">
                <span className="sub-title text-uppercase">about</span>
                <h3 className="title">About</h3>
              </div>
            </div>
            
          </div>
          
          <div className="row position-relative align-items-center">
            <div className="col-lg-5 col-md-6 col-12 mt-4 pt-2">
              <div className="about-img">
                <img
                  src="images/about/about2.png"
                  alt=""
                  className="img-fluid rounded position-relative"
                />
              </div>
            </div>
            
            <div className="col-lg-7 col-md-12 col-12 mt-5 mt-lg-0 pt-4 pt-lg-0">
              <div className="about-content">
                <h5 className="text-dark mb-3">
                  I&apos;m Sidney John a 
                  <span
                    className="typewrite text-primary"
                    data-period={2000}
                    data-type='[ "Handsome.", "CEO.", "Philanthropist."]'
                  >
                    <span className="wrap"> CEO</span>
                  </span>
                </h5>
                <p className="text-muted para-desc mb-0">
                My unmatched perspicacity coupled with sheer
                indefatigability, makes me a feared opponent
                in any realm of human endeavor.
                </p>
                <address className="content-info mt-3 pt-2">
                  <div className="row">
                    <div className="col-lg-5 col-sm-12 col-md-6">
                      <i className="mdi mdi-school text-primary me-2" />
                      <span className="fw-bold me-2">Degree:</span>
                      <p className="d-inline-block text-muted mb-2">35</p>
                    </div>
                    <div className="col-lg-5 col-sm-12 col-md-6">
                      <i className="mdi mdi-email text-primary me-2" />
                      <span className="fw-bold me-2">Email:</span>
                      <p className="d-inline-block text-muted mb-2">
                        sidneyjohn1704@gmail.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-lg-5 col-sm-12 col-md-6">
                      <i className="mdi mdi-human-greeting-variant text-primary me-2" />
                      <span className="fw-bold me-2">Age:</span>
                      <p className="d-inline-block text-muted mb-2">21</p>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-6">
                      <i className="mdi mdi-map-marker text-primary me-2" />
                      <span className="fw-bold me-2">Country:</span>
                      <p className="d-inline-block text-muted mb-2">
                        Pampanga, Philippines
                      </p>
                    </div>
                  </div>
                  
                </address>
                
                <a
                  href="javascript:void(0)"
                  className="btn btn-outline-dark btn-icon mt-3 pt-2"
                >
                  <div className="btn-text">Download CV</div>
                </a>
              </div>
            </div>
            
          </div>
          
        </div>
      
      </section>
  );
}

export default About;