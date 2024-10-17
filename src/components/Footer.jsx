function Footer() {
  return (
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
                © Kirk. Design with <i className="mdi mdi-heart text-danger" />{" "}
                by
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
  );
}

export default Footer;