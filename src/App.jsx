
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx'
import Resume from './components/Resume.jsx';
import Portfolio from './components/Portfolio.jsx';
import Partners from './components/Partners.jsx';
import Services from './components/Services.jsx';



function App() {
  return (
    <>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Resume />
      <Portfolio />
      <Partners />
      <Services />
      
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
                  Aren&apos;t They ?
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
                      I&apos;m also available for freelance work. Get in touch right
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
                  Drop A Message ! Let&apos;s{" "}
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
