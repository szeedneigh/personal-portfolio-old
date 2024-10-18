
function Skills() {
  return (
    <section className="section overflow-hidden" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-6 col-12 mt-5 mt-sm-0 pt-3 pt-sm-0 order-2 order-lg-1">
            <div className="section-title mb-4 pb-2">
              <span className="sub-title text-uppercase">skill</span>
              <h3 className="title">Skills.</h3>
            </div>
            <p className="text-muted para-desc mb-4">
              I&apos;m a professional web designer, My motive is to build a best
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
  );
}

export default Skills;