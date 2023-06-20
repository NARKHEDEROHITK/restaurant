import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {

  const scrollToTop = () => {
    var target = $(this).attr('data-target');
    // animate
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1500);
  }

  return (
    <>
      <footer className="main-footer bgdep">
        {/* <!--Widgets Section--> */}
        <div className="widgets-section">
          <div className="auto-container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="ftrsc wow fadeInUp">
                  <div className="ftrscim">
                    <Link to={"/"}>
                      <img src="images/logo.png" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 col-sm-4 wow fadeInUp">
                <div className="ftebxd">
                  <h3>Our Address</h3>
                  <p>51/B, Bosuje Lane, Kolkata-001</p>
                  <ul className="social-icon-one social-icon-colored">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-4 col-sm-4 wow fadeInUp">
                <div className="ftebxd">
                  <h3>Order Online</h3>
                  <p>
                    If you want to book a table, You can contact with our staff
                  </p>
                  <h4>
                    <a href="tel:+918597898654">+91 85978 98654</a>
                  </h4>
                </div>
              </div>

              <div className="col-md-4 col-sm-4 wow fadeInUp">
                <div className="ftebxd">
                  <h3>Open Hours</h3>
                  <p>
                    <span>Sun - Mon </span> 09:00 AM - 10:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!--Footer Bottom--> */}
          <div className="footer-bottom">
            <div className="auto-container">
              <div className="inner-container clearfix">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <ul className="ftrsctxul2">
                      <li>
                        <Link to={"/careers"}>Careers</Link>
                      </li>
                      <li>
                        <Link to={"/privacy-policy"}>Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to={"/disclaimer"}>Disclaimer</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="copyright-text">
                      <p>© Copyright 2023 All Rights Reserved </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div class="scroll-to-top scroll-to-target" data-target="html">
        <span onClick={()=>scrollToTop()} class="fa fa-angle-double-up"></span>
      </div>
    </>
  );
};

export default Footer;
