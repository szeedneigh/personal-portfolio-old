
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';



function App() {
  return (
    <>

      <Navbar />
      <Hero />

      
      {/* start about */}
      <section className="section overflow-hidden bg-light" id="about">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title mb-4 pb-2">
                <span className="sub-title text-uppercase">about</span>
                <h3 className="title">About</h3>
              </div>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
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
            {/* end col */}
            <div className="col-lg-7 col-md-12 col-12 mt-5 mt-lg-0 pt-4 pt-lg-0">
              <div className="about-content">
                <h5 className="text-dark mb-3">
                  I&apos;m Sidney John a
                  <span
                    className="typewrite text-primary"
                    data-period={2000}
                    data-type='[ "Handsome.", "CEO.", "Philanthropist."]'
                  >
                    <span className="wrap">CEO</span>
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
                  {/* end row */}
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
                  {/* end row */}
                </address>
                {/* end contact info */}
                <a
                  href="javascript:void(0)"
                  className="btn btn-outline-dark btn-icon mt-3 pt-2"
                >
                  <div className="btn-text">Download CV</div>
                </a>
              </div>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      {/* end section */}
      {/* start skills */}
      <section className="section overflow-hidden" id="skills">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6 col-12 mt-5 mt-sm-0 pt-3 pt-sm-0 order-2 order-lg-1">
              <div className="section-title mb-4 pb-2">
                <span className="sub-title text-uppercase">skill</span>
                <h3 className="title">Skills.</h3>
              </div>
              <p className="text-muted para-desc mb-4">
                I'm a professional web designer, My motive is to build a best
                web design with my all years of experience and efforts.
              </p>
              <div className="progress-box mt-4">
                <h6 className="title fw-normal text-muted">MERN</h6>
                <div className="progress">
                  <div
                    className="progress-bar progress-animate position-relative rounded-pill"
                    style={{ width: "40%" }}
                  >
                    <div className="progress-value d-block text-muted">40%</div>
                  </div>
                </div>
              </div>
              {/*end process box*/}
              <div className="progress-box mt-4 pt-2">
                <h6 className="title fw-normal text-muted">ML &amp; AI</h6>
                <div className="progress">
                  <div
                    className="progress-bar progress-animate position-relative rounded-pill"
                    style={{ width: "33%" }}
                  >
                    <div className="progress-value d-block text-muted">33%</div>
                  </div>
                </div>
              </div>
              {/*end process box*/}
              <div className="progress-box mt-4 pt-2">
                <h6 className="title fw-normal text-muted">Web Design</h6>
                <div className="progress">
                  <div
                    className="progress-bar progress-animate position-relative rounded-pill"
                    style={{ width: "80%" }}
                  >
                    <div className="progress-value d-block text-muted">80%</div>
                  </div>
                </div>
              </div>
              {/*end process box*/}
            </div>
            {/* end col */}
            <div className="col-lg-5 col-md-6 col-12 order-1 order-lg-1">
              <div className="skill">
                <span className="skill-circle" />
                <div
                  className="skill-number text-parallax"
                  style={{ backgroundImage: "url(images/bg/program.jpg)" }}
                >
                  <span>3.</span>
                </div>
                <p className="skill-text text-dark h5 ms-3">
                  Years
                  <br />
                  of working
                  <br />
                  experience
                </p>
              </div>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      {/* end section */}
      {/* start resume */}
      <section className="section bg-light overflow-hidden" id="resume">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <span className="sub-title text-uppercase">Resume</span>
                <h3 className="title">My Resume</h3>
              </div>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
          <div className="row">
            <div className="col-12 mt-4 pt-2">
              <div className="text-center">
                <ul
                  className="nav nav-pills justify-content-center bg-transparent rounded border-0 d-inline-block border p-1 mb-5"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item d-inline-block">
                    <a
                      className="nav-link text-primary active p-1"
                      id="pills-job-tab"
                      data-bs-toggle="pill"
                      href="#pills-job"
                      role="tab"
                      aria-controls="pills-job"
                      aria-selected="false"
                    >
                      <div className="py-1 px-3">
                        <h6 className="mb-0">Experience</h6>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item d-inline-block">
                    <a
                      className="nav-link text-primary p-1"
                      id="pills-school-tab"
                      data-bs-toggle="pill"
                      href="#pills-school"
                      role="tab"
                      aria-controls="pills-school"
                      aria-selected="false"
                    >
                      <div className="py-1 px-3">
                        <h6 className="mb-0">Qualification</h6>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-job"
                  role="tabpanel"
                  aria-labelledby="pills-job-tab"
                >
                  <div className="timeline-page position-relative">
                    <div className="timeline-item">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          <div className="duration date-label-left position-relative text-md-end">
                            <img
                              src="images/brand/shree-logo.png"
                              className="rounded-pill avatar avatar-ex-small"
                              alt=""
                            />
                            <h5 className="my-2">Wise Mind Solutions</h5>
                            <span className="text-primary mb-0">
                              2022- present
                            </span>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-lg-6 col-md-6 col-sm-6 mt-4 mt-sm-0">
                          <div className="event event-description-right float-left text-start">
                            <h6 className="title text-capitalize">MANAGER</h6>
                            <p className="timeline-subtitle mt-3 mb-0 text-muted">
                              As a Manager at Wise Mind Solutions in the
                              Philippines from September 2022 to this day, I
                              successfully led a team of professionals in
                              providing innovative solutions for clients. I
                              oversaw daily operations, managed budgets, and
                              maintained strong relationships with stakeholders.
                            </p>
                          </div>
                        </div>
                        {/*end col*/}
                      </div>
                      {/*end row*/}
                    </div>
                    {/*end timeline item*/}
                    <div className="timeline-item mt-5 pt-4">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 order-sm-1 order-2 mt-4 mt-sm-0">
                          <div className="event event-description-left float-left text-end">
                            <h6 className="title text-capitalize">
                              Full Stack Janitor
                            </h6>
                            <p className="timeline-subtitle mt-3 mb-0 text-muted">
                              As a FULL STACK JANITOR at BNM &amp; CO. in the
                              Philippines from 2023-06 to 2024, I was
                              responsible for maintaining the cleanliness and
                              organization of the office space and ensuring a
                              sanitary and safe environment for employees and
                              clients alike. In addition, I also took on the
                              role of IT support, assisting with computer
                              troubleshooting and maintenance.
                            </p>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-lg-6 col-md-6 col-sm-6 order-sm-2 order-1">
                          <div className="duration duration-right position-relative">
                            <img
                              src="images/brand/twitter-logo.png"
                              className="rounded-pill avatar avatar-ex-small"
                              alt=""
                            />
                            <h5 className="my-2">BNM &amp; CO.</h5>
                            <span className="text-primary mb-0">
                              2023 - Present
                            </span>
                          </div>
                        </div>
                        {/*end col*/}
                      </div>
                      {/*end row*/}
                    </div>
                    {/*end timeline item*/}
                    <div className="timeline-item mt-5 pt-4">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          <div className="duration date-label-left position-relative text-md-end">
                            <img
                              src="images/brand/behance-logo.png"
                              className="rounded-pill avatar avatar-ex-small"
                              alt=""
                            />
                            <h5 className="my-2">Uncaged Melodies</h5>
                            <span className="text-primary mb-0">
                              2022 - Present
                            </span>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-lg-6 col-md-6 col-sm-6 mt-4 mt-sm-0">
                          <div className="event event-description-right float-left text-start">
                            <h6 className="title text-capitalize">
                              Founder & CEO
                            </h6>
                            <p className="timeline-subtitle mt-3 mb-0 text-muted">
                            Founded in 2022, UNCAGED MELODIES empowers innovative artists 
                            to express their unique sounds. Our mission is to celebrate originality
                            and foster collaboration across genres. Through strategic marketing 
                            and artist development, we amplify diverse voices, creating a vibrant 
                            community that encourages authenticity and creativity in music.
                            </p>
                          </div>
                        </div>
                        {/*end col*/}
                      </div>
                      {/*end row*/}
                    </div>
                    {/*end timeline item*/}
                    <div className="timeline-item mt-5 pt-4">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 order-sm-1 order-2 mt-4 mt-sm-0">
                          <div className="event event-description-left float-left text-end">
                            <h6 className="title text-capitalize">
                              Frontend Developer
                            </h6>
                            <p className="timeline-subtitle mt-3 mb-0 text-muted">
                              I'm a professional web designer, My motive is to
                              build a best web design with my all years of
                              experience and efforts again during the as desktop
                              publishers bundled the text with their software.
                            </p>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-lg-6 col-md-6 col-sm-6 order-sm-2 order-1">
                          <div className="duration duration-right position-relative">
                            <img
                              src="images/brand/envato-logo.png"
                              className="rounded-pill avatar avatar-ex-small"
                              alt=""
                            />
                            <h5 className="my-2">Envato</h5>
                            <span className="text-primary mb-0">
                              2017 - 2016
                            </span>
                          </div>
                        </div>
                        {/*end col*/}
                      </div>
                      {/*end row*/}
                    </div>
                    {/*end timeline item*/}
                  </div>
                  {/*end timeline page*/}
                </div>
                {/* end timeline */}
                <div
                  className="tab-pane fade"
                  id="pills-school"
                  role="tabpanel"
                  aria-labelledby="pills-school-tab"
                >
                  <div className="timeline-page position-relative">
                    <div className="timeline-item">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          <div className="duration date-label-left position-relative text-md-end">
                            <i className="mdi mdi-school text-primary h3" />
                            <h5 className="my-2">
                              La Verdad Christian College
                            </h5>
                            <span className="text-muted mb-0">2024</span>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-lg-6 col-md-6 col-sm-6 mt-4 mt-sm-0">
                          <div className="event event-description-right position-relative">
                            <h6 className="title text-capitalize">
                              Associate in Computer Technology
                            </h6>
                            <p className="timeline-subtitle mt-3 mb-0 text-muted">
                              This degree features the fundamentals of the
                              Modern requirements in the tech world.
                            </p>
                          </div>
                        </div>
                        {/*end col*/}
                      </div>
                      {/*end row*/}
                    </div>
                    {/*end timeline item*/}
                    <div className="timeline-item mt-5 pt-4">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 order-sm-1 order-2 mt-4 mt-sm-0">
                          <div className="event event-description-left float-left text-end">
                            <h6 className="title text-capitalize">
                              Bachelor of Science in Information Systems
                            </h6>
                            <p className="timeline-subtitle mt-3 mb-0 text-muted">
                              This degree is the deeper understanding of the
                              modern technologies required to complete the
                              necessary knowledge that can we apply in the the
                              future.
                            </p>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-lg-6 col-md-6 col-sm-6 order-sm-2 order-1">
                          <div className="duration duration-right position-relative">
                            <i className="mdi mdi-layers-triple-outline text-primary h3" />
                            <h5 className="my-2">
                              La Verdad Christian College
                            </h5>
                            <span className="text-muted mb-0">2024</span>
                          </div>
                        </div>
                        {/*end col*/}
                      </div>
                      {/*end row*/}
                    </div>
                    {/*end timeline item*/}
                    <div className="timeline-item mt-5 pt-4">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 mt-4 mt-sm-0">
                          <div className="duration date-label-left position-relative text-end">
                            <i className="mdi mdi-book-outline text-primary h3" />
                            <h5 className="my-2">University </h5>
                            <span className="text-muted mb-0">2014 - 2013</span>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-lg-6 col-md-6 col-sm-6 mt-4 mt-sm-0">
                          <div className="event event-description-right position-relative">
                            <h6 className="title text-capitalize">
                              Graphics Designing
                            </h6>
                            <p className="timeline-subtitle mt-3 mb-0 text-muted">
                              I'm a professional web designer, My motive is to
                              build a best web design with my all years of
                              experience and efforts again during the as desktop
                              publishers bundled the text with their software.
                            </p>
                          </div>
                        </div>
                        {/*end col*/}
                      </div>
                      {/*end row*/}
                    </div>
                    {/*end timeline item*/}
                    <div className="timeline-item mt-5 pt-4">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 order-sm-1 order-2 mt-4 mt-sm-0">
                          <div className="event event-description-left float-left text-end">
                            <h6 className="title text-capitalize">
                              Academic Course
                            </h6>
                            <p className="timeline-subtitle mt-3 mb-0 text-muted">
                              I'm a professional web designer, My motive is to
                              build a best web design with my all years of
                              experience and efforts again during the as desktop
                              publishers bundled the text with their software.
                            </p>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-lg-6 col-md-6 col-sm-6 order-sm-2 order-1">
                          <div className="duration duration-right position-relative">
                            <i className="mdi mdi-hexagon-multiple-outline text-primary h3" />
                            <h5 className="my-2">Institute Of Graphics</h5>
                            <span className="text-muted mb-0">2013 - 2012</span>
                          </div>
                        </div>
                        {/*end col*/}
                      </div>
                      {/*end row*/}
                    </div>
                    {/*end timeline item*/}
                  </div>
                  {/*end timeline page*/}
                </div>
                {/* end timeline */}
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/* end container */}
      </section>
      {/* end section */}
      {/* Start Work */}
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
      {/*end section*/}
      {/* End work */}
      {/* start partners */}
      <section className="section bg-light overflow-hidden" id="partner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-4 pb-2">
                <span className="sub-title text-uppercase">partner</span>
                <h3 className="title">My Partners</h3>
              </div>
              {/* end col */}
            </div>
            {/* end col */}
            <div className="col-lg-6">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
                  <div className="client-card bg-white p-4 border-0 mx-auto text-center rounded">
                    <a href="javascript:void(0)">
                      <img
                        src="images/brand/envato.png"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
                  <div className="client-card bg-white p-4 border-0 mx-auto text-center rounded">
                    <a href="javascript:void(0)">
                      <img
                        src="images/brand/edunet.png"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
                  <div className="client-card bg-white p-4 border-0 mx-auto text-center rounded">
                    <a href="javascript:void(0)">
                      <img
                        src="images/brand/frenfy.png"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
                  <div className="client-card bg-white p-4 border-0 mx-auto text-center rounded">
                    <a href="javascript:void(0)">
                      <img
                        src="images/brand/behance.png"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
                  <div className="client-card bg-white p-4 border-0 mx-auto text-center rounded">
                    <a href="javascript:void(0)">
                      <img
                        src="images/brand/wetland.png"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
                  <div className="client-card bg-white p-4 border-0 mx-auto text-center rounded">
                    <a href="javascript:void(0)">
                      <img
                        src="images/brand/dribble.png"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                {/* end col */}
              </div>
              {/* end row */}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* end col */}
      </section>
      {/* end section */}
      {/* start services */}
      <section className="section overflow-hidden" id="services">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <span className="sub-title text-uppercase">Services</span>
                <h3 className="title">My Services</h3>
              </div>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div className="service-wrapper rounded position-relative text-center border border-footer p-4 pt-5 pb-5">
                <div className="icon text-primary">
                  <i data-feather="layers" className="fea icon-md" />
                </div>
                <div className="content mt-4">
                  <h5 className="title">Graphics Design</h5>
                  <p className="text-muted mt-3 mb-0">
                    The purpose of lorem ipsum is to create a natural looking
                    block of textwhen looking at its layout.
                  </p>
                </div>
                <div className="big-icon">
                  <i data-feather="layers" className="fea icons" />
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div className="service-wrapper rounded position-relative text-center border border-footer p-4 pt-5 pb-5">
                <div className="icon text-primary">
                  <i data-feather="box" className="fea icon-md" />
                </div>
                <div className="content mt-4">
                  <h5 className="title">Web Design</h5>
                  <p className="text-muted mt-3 mb-0">
                    It is a long established fact that a reader will be
                    distracted by the when looking at its layout.
                  </p>
                </div>
                <div className="big-icon">
                  <i data-feather="box" className="fea icons" />
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div className="service-wrapper rounded position-relative text-center border border-footer p-4 pt-5 pb-5">
                <div className="icon text-primary">
                  <i data-feather="search" className="fea icon-md" />
                </div>
                <div className="content mt-4">
                  <h5 className="title">App Research</h5>
                  <p className="text-muted mt-3 mb-0">
                    It is a long established fact that a reader will be
                    distracted by the when looking at its layout.
                  </p>
                </div>
                <div className="big-icon">
                  <i data-feather="search" className="fea icons" />
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div className="service-wrapper rounded position-relative text-center border border-footer p-4 pt-5 pb-5">
                <div className="icon text-primary">
                  <i data-feather="paperclip" className="fea icon-md" />
                </div>
                <div className="content mt-4">
                  <h5 className="title">Branding</h5>
                  <p className="text-muted mt-3 mb-0">
                    It is a long established fact that a reader will be
                    distracted by the when looking at its layout.
                  </p>
                </div>
                <div className="big-icon">
                  <i data-feather="paperclip" className="fea icons" />
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div className="service-wrapper rounded position-relative text-center border border-footer p-4 pt-5 pb-5">
                <div className="icon text-primary">
                  <i data-feather="layout" className="fea icon-md" />
                </div>
                <div className="content mt-4">
                  <h5 className="title">Responsive Web</h5>
                  <p className="text-muted mt-3 mb-0">
                    It is a long established fact that a reader will be
                    distracted by the when looking at its layout.
                  </p>
                </div>
                <div className="big-icon">
                  <i data-feather="layout" className="fea icons" />
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
              <div className="service-wrapper rounded position-relative text-center border border-footer p-4 pt-5 pb-5">
                <div className="icon text-primary">
                  <i data-feather="navigation" className="fea icon-md" />
                </div>
                <div className="content mt-4">
                  <h5 className="title">Trendy Work</h5>
                  <p className="text-muted mt-3 mb-0">
                    It is a long established fact that a reader will be
                    distracted by the when looking at its layout.
                  </p>
                </div>
                <div className="big-icon">
                  <i data-feather="navigation" className="fea icons" />
                </div>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      {/* end section */}
      {/* start testimony */}
      <section className="section bg-light overflow-hidden" id="testimonial">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5 col-xl-6">
              <div className="section-title text-start">
                <span className="testi-icon text-primary">
                  <i className="mdi mdi-format-quote-open" />
                </span>
                <h2 className="title">
                  People<span className="text-primary"> Say Good</span> Things
                  <br />
                  Aren't They ?
                </h2>
              </div>
            </div>
            {/* end col */}
            <div className="col-lg-7 col-xl-6 col-12">
              <div className="tiny-single-item">
                <div className="tiny-slide">
                  <div className="testi m-1 bg-white p-md-5 p-4 position-relative rounded">
                    <span className="quote">
                      <img src="images/testimony/quot.png" alt="" />
                    </span>
                    <ul className="text-warning list-unstyled mb-2 ms-4">
                      <li className="list-inline-item me-0">
                        <i className="mdi mdi-star fs-6" />
                      </li>
                      <li className="list-inline-item me-0">
                        <i className="mdi mdi-star fs-6" />
                      </li>
                      <li className="list-inline-item me-0">
                        <i className="mdi mdi-star fs-6" />
                      </li>
                      <li className="list-inline-item me-0">
                        <i className="mdi mdi-star fs-6" />
                      </li>
                      <li className="list-inline-item me-0">
                        <i className="mdi mdi-star fs-6" />
                      </li>
                    </ul>
                    <p className="testi-para text-muted mb-4 fs-6">
                      The passage experienced a surge in popularity during the
                      1960s when Letraset used it on their dry-transfer sheets
                      bundled the text with their software.
                    </p>
                    <div className="testi-content d-flex align-items-center">
                      <img
                        className="avatar avatar-small img-fluid rounded-pill"
                        src="images/testimony/1.jpg"
                        alt="testimony"
                      />
                      <div className="author-detail ms-3">
                        <h5 className="title fs-6 mb-0">Courtney Sink</h5>
                        <p className="text-muted mb-0">Designer</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end slide */}
                <div className="tiny-slide">
                  <div className="testi m-1 bg-white p-md-5 p-4 position-relative rounded">
                    <span className="quote">
                      <img src="images/testimony/quot.png" alt="" />
                    </span>
                    <ul className="text-warning list-unstyled mb-2 ms-4">
                      <li className="list-inline-item me-0">
                        <i className="mdi mdi-star fs-6" />
                      </li>
                      <li className="list-inline-item me-0">
                        <i className="mdi mdi-star fs-6" />
                      </li>
                      <li className="list-inline-item me-0">
                        <i className="mdi mdi-star fs-6" />
                      </li>
                      <li className="list-inline-item me-0">
                        <i className="mdi mdi-star fs-6" />
                      </li>
                      <li className="list-inline-item me-0">
                        <i className="mdi mdi-star fs-6" />
                      </li>
                    </ul>
                    <p className="testi-para text-muted mb-4 fs-6">
                      The passage experienced a surge in popularity during the
                      1960s when Letraset used it on their dry-transfer sheets
                      bundled the text with their software.
                    </p>
                    <div className="testi-content d-flex align-items-center">
                      <img
                        className="avatar avatar-small img-fluid rounded-pill"
                        src="images/testimony/2.jpg"
                        alt="testimony"
                      />
                      <div className="author-detail ms-3">
                        <h5 className="title fs-6 mb-0">Joay Gilbert</h5>
                        <p className="text-muted mb-0">Designer</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end slide */}
                <div className="tiny-slide">
                  <div className="testi m-1 bg-white p-md-5 p-4 position-relative rounded">
                    <span className="quote">
                      <img src="images/testimony/quot.png" alt="" />
                    </span>
                    <ul className="text-warning list-unstyled mb-2 ms-4">
                      <li className="list-inline-item me-0">
                        <i className="mdi mdi-star fs-6" />
                      </li>
                      <li className="list-inline-item me-0">
                        <i className="mdi mdi-star fs-6" />
                      </li>
                      <li className="list-inline-item me-0">
                        <i className="mdi mdi-star fs-6" />
                      </li>
                      <li className="list-inline-item me-0">
                        <i className="mdi mdi-star fs-6" />
                      </li>
                      <li className="list-inline-item me-0">
                        <i className="mdi mdi-star fs-6" />
                      </li>
                    </ul>
                    <p className="testi-para text-muted mb-4 fs-6">
                      The passage experienced a surge in popularity during the
                      1960s when Letraset used it on their dry-transfer sheets
                      bundled the text with their software.
                    </p>
                    <div className="testi-content d-flex align-items-center">
                      <img
                        className="avatar avatar-small img-fluid rounded-pill"
                        src="images/testimony/3.jpg"
                        alt="testimony"
                      />
                      <div className="author-detail ms-3">
                        <h5 className="title fs-6 mb-0">Steph Bennet</h5>
                        <p className="text-muted mb-0">Developer</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end slide */}
              </div>
              {/* end tiny slider */}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      {/* end section */}
      {/* Blog Start */}
      <section className="section overflow-hidden" id="blog">
        <div className="page-triangle triangle-light" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <span className="sub-title text-uppercase">Articles</span>
                <h3 className="title">Latest Posts</h3>
              </div>
            </div>
            {/* end col */}
          </div>
          {/*end row*/}
          <div className="row">
            <div className="col-lg-4 col-md-6 mt-4">
              <div className="blog overflow-hidden position-relative bg-white rounded">
                <div className="blog-image position-relative overflow-hidden">
                  <img src="images/blog/1.jpg" className="img-fluid" alt="" />
                  <div className="blog-tag">
                    <div className="badge bg-primary text-white rounded">
                      16th May 2022
                    </div>
                  </div>
                </div>
                <div className="content p-4">
                  <h5 className="mb-3">
                    <a
                      href="javascript:void(0)"
                      className="blog-title text-dark"
                    >
                      Compare the best front hand designer
                    </a>
                  </h5>
                  <p className="text-muted mb-0">
                    The purpose of lorem ipsum is to create a natural looking
                    block of text.
                  </p>
                  <div className="read-more mt-3">
                    <a
                      href="javascript:void(0)"
                      className="text-muted blog-link"
                    >
                      Read More <i className="uil uil-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* end col */}
            <div className="col-lg-4 col-md-6 mt-4">
              <div className="blog overflow-hidden position-relative bg-white rounded">
                <div className="blog-image position-relative overflow-hidden">
                  <img src="images/blog/2.jpg" className="img-fluid" alt="" />
                  <div className="blog-tag">
                    <div className="badge bg-primary text-white rounded">
                      6th June 2022
                    </div>
                  </div>
                </div>
                <div className="content p-4">
                  <h5 className="mb-3">
                    <a
                      href="javascript:void(0)"
                      className="blog-title text-dark"
                    >
                      Why market is all about social work
                    </a>
                  </h5>
                  <p className="text-muted mb-0">
                    The purpose of lorem ipsum is to create a natural looking
                    block of text.
                  </p>
                  <div className="read-more mt-3">
                    <a
                      href="javascript:void(0)"
                      className="text-muted blog-link"
                    >
                      Read More <i className="uil uil-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* end col */}
            <div className="col-lg-4 col-md-6 mt-4">
              <div className="blog overflow-hidden position-relative bg-white rounded">
                <div className="blog-image position-relative overflow-hidden">
                  <img src="images/blog/3.jpg" className="img-fluid" alt="" />
                  <div className="blog-tag">
                    <div className="badge bg-primary text-white rounded">
                      2th July 2022
                    </div>
                  </div>
                </div>
                <div className="content p-4">
                  <h5 className="mb-3">
                    <a
                      href="javascript:void(0)"
                      className="blog-title text-dark"
                    >
                      Know more ideas about latest design
                    </a>
                  </h5>
                  <p className="text-muted mb-0">
                    The purpose of lorem ipsum is to create a natural looking
                    block of text.
                  </p>
                  <div className="read-more mt-3">
                    <a
                      href="javascript:void(0)"
                      className="text-muted blog-link"
                    >
                      Read More <i className="uil uil-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      {/* Blog End */}
      {/* start contact */}
      <section
        className="section overflow-hidden"
        id="contact"
        style={{ background: "url(images/bg/map-img.png) center" }}
      >
        <div className="bg-overlay bg-light" style={{ opacity: "0.7" }} />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <span className="sub-title text-uppercase">contact</span>
                <h3 className="title mb-4">Contact</h3>
              </div>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
          <div className="row">
            <div className="col-lg-5 col-md-8 col-12">
              <div className="contact overflow-hidden border-0 bg-white shadow rounded">
                <div className="position-relative overflow-hidden mx-4 mt-4 rounded">
                  <img
                    src="images/contact/1.jpg"
                    className="img-fluid rounded"
                    alt=""
                  />
                </div>
                <div className="content">
                  <div className="p-4">
                    <p className="text-muted">
                      I'm also available for freelance work. Get in touch right
                      now.
                    </p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-2">Phone :</span>
                      <a
                        href="javascript:void(0)"
                        className="contact-link text-muted"
                      >
                        +1 849-657-9847
                      </a>
                    </p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-2">Email :</span>
                      <a
                        href="javascript:void(0)"
                        className="contact-link text-muted"
                      >
                        contact@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* end col */}
            <div className="col-lg-7 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0 mx-auto">
              <div className="contact-form border-0 p-4">
                <h5 className="mb-4">
                  Drop A Message ! Let's{" "}
                  <span className="text-primary">Work</span>
                  Together
                </h5>
                <form
                  method="post"
                  id="myForm"
                  name="myForm"
                  onSubmit="return validateForm()"
                >
                  <p className="mb-0" id="error-msg" />
                  <div id="simple-msg" />
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-4 fs-6">
                        <input
                          name="name"
                          id="name"
                          type="text"
                          className="form-control border-bottom fs-6 text-dark"
                          placeholder="Name :"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-4 fs-6">
                        <input
                          name="email"
                          id="email"
                          type="email"
                          className="form-control border-bottom fs-6 text-dark"
                          placeholder="Email :"
                        />
                      </div>
                    </div>
                    {/*end col*/}
                    <div className="col-12">
                      <div className="mb-4 fs-6">
                        <input
                          name="subject"
                          id="subject"
                          className="form-control border-bottom fs-6 text-dark"
                          placeholder="Subject :"
                        />
                      </div>
                    </div>
                    {/*end col*/}
                    <div className="col-12">
                      <div className="mb-4 fs-6">
                        <textarea
                          name="comments"
                          id="comments"
                          rows={4}
                          className="form-control border-bottom fs-6 text-dark"
                          placeholder="Message :"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <button
                        type="submit"
                        id="submit"
                        name="send"
                        className="btn btn-primary mt-3 pt-2"
                      >
                        Send Here
                      </button>
                    </div>
                    {/*end col*/}
                  </div>
                  {/*end row*/}
                </form>
                {/* end form */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
          {/*end row*/}
        </div>
        {/* end container */}
      </section>
      {/* end section */}
      {/* Start Footer bar */}
      <footer className="footer footer-bar bg-black">
        <div className="container">
          <div className="row align-items-center text-center">
            <div className="col-sm-3">
              <div className="text-sm-start">
                <a href="#" className="logo-footer">
                  <img src="images/logo-light.png" alt="" />
                </a>
              </div>
            </div>
            {/* end col */}
            <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="text-center text-white-50">
                <p className="mb-0 fs-6">
                  © Kirk. Design with{" "}
                  <i className="mdi mdi-heart text-danger" /> by
                  <a
                    href="https://shreethemes.in/"
                    target="_blank"
                    className="text-reset"
                  >
                    Shreethemes
                  </a>
                  .
                </p>
              </div>
            </div>
            {/* end col */}
            <div className="col-sm-3 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <ul className="list-unstyled foot-social-icon mb-0 text-lg-end">
                <li className="list-inline-item mb-0">
                  <a
                    href="javascript:void(0)"
                    className="rounded icon-sm text-white-50"
                  >
                    <i data-feather="facebook" className="fea icon-sm" />
                  </a>
                </li>
                <li className="list-inline-item mb-0">
                  <a
                    href="javascript:void(0)"
                    className="rounded icon-sm text-white-50"
                  >
                    <i data-feather="instagram" className="fea icon-sm" />
                  </a>
                </li>
                <li className="list-inline-item mb-0">
                  <a
                    href="javascript:void(0)"
                    className="rounded icon-sm text-white-50"
                  >
                    <i data-feather="twitter" className="fea icon-sm" />
                  </a>
                </li>
                <li className="list-inline-item mb-0">
                  <a
                    href="javascript:void(0)"
                    className="rounded icon-sm text-white-50"
                  >
                    <i data-feather="linkedin" className="fea icon-sm" />
                  </a>
                </li>
              </ul>
            </div>
            {/* end col */}
          </div>
        </div>
        {/* end container */}
      </footer>
      {/*end footer*/}
      {/* Back to top */}
      <a
        href="#"
        className="back-to-top rounded text-center"
        id="back-to-top"
        title="Top"
      >
        <i className="mdi mdi-chevron-up d-block icons"> </i>
      </a>
      {/* Back to top */}
      <div className="cursor cursor-small" />
      <canvas className="cursor cursor-canvas" />
      {/* JAVASCRIPTS */}
      {/* menu */}
      {/* Icons */}
      {/* portfolio */}
      {/* slider */}
      {/* app js */}
    </>
  );
}

export default App;
