import React from "react";

const GetInTouch = () => {
  return (
    <div className="auto-container">
      <div className="row rwspbt">
        <div className="col-md-5 col-sm-6 order-sm-2">
          <div className="contptx contptpd bgdep">
            <h3>Contact Info</h3>

            <div className="contptxu">
              <img src="images/cont1.png" />
              <h6>Call Us</h6>
              <p>
                <a href="tel:+918597898654">+91 85978 98654</a>
              </p>
            </div>
            <div className="contptxu">
              <img src="images/cont2.png" />
              <h6>Email Us</h6>
              <p>
                <a href="mailto:info@captainsdeck.com">
                  {" "}
                  info@captainsdeck.com
                </a>
              </p>
            </div>
            <div className="contptxu">
              <img src="images/cont3.png" />
              <h6>Address</h6>
              <p>51/B, Bosuje Lane, Kolkata-001</p>
            </div>
          </div>
        </div>

        <div className="col-md-5 col-sm-6">
          <div className="contptx ">
            <h3>Get in touch</h3>

            <form>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <input placeholder="Name" />
                </div>
                <div className="col-md-6 col-sm-12">
                  <input placeholder="Phone No." />
                </div>
                <div className="col-md-6 col-sm-12">
                  <input placeholder="Email" />
                </div>
                <div className="col-md-6 col-sm-12">
                  <input placeholder="Subject" />
                </div>
                <div className="col-md-12 col-sm-12">
                  <textarea placeholder="Message "></textarea>
                </div>
                <div className="col-12 cotpbt">
                  <button className="theme-btn btn-style-one">
                    <span className="btn-title">Send Message</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
