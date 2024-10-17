
function Resume() {
  return (
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
                              I&apos;m a professional web designer, My motive is to
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
                              I&apos;m a professional web designer, My motive is to
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
                              I&apos;m a professional web designer, My motive is to
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
  );
}

export default Resume;