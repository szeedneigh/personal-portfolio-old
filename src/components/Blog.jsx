
function Blog() {
  return (
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
                  <a href="javascript:void(0)" className="blog-title text-dark">
                    Compare the best front hand designer
                  </a>
                </h5>
                <p className="text-muted mb-0">
                  The purpose of lorem ipsum is to create a natural looking
                  block of text.
                </p>
                <div className="read-more mt-3">
                  <a href="javascript:void(0)" className="text-muted blog-link">
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
                  <a href="javascript:void(0)" className="blog-title text-dark">
                    Why market is all about social work
                  </a>
                </h5>
                <p className="text-muted mb-0">
                  The purpose of lorem ipsum is to create a natural looking
                  block of text.
                </p>
                <div className="read-more mt-3">
                  <a href="javascript:void(0)" className="text-muted blog-link">
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
                  <a href="javascript:void(0)" className="blog-title text-dark">
                    Know more ideas about latest design
                  </a>
                </h5>
                <p className="text-muted mb-0">
                  The purpose of lorem ipsum is to create a natural looking
                  block of text.
                </p>
                <div className="read-more mt-3">
                  <a href="javascript:void(0)" className="text-muted blog-link">
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
  );
}

export default Blog;