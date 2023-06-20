import React from "react";
import Chef1 from '../../assets/images/chef1.jpg'
import Chef2 from '../../assets/images/chef2.jpg'
const OurChef = () => {
  return (
    <div className="auto-container">
      <div className="sechdttl wow fadeInUp">
        <h4>Our Chef</h4>
        <h2>
          <span>
            Kitchen Experts <div className="ttlhdb1"></div>
            <div className="ttlhdb2"></div>
          </span>
        </h2>
      </div>
      <div className="row rowjsct">
        <div className=" col-lg-4 col-md-5 col-sm-6 ">
          <div className="nefcf">
            <img src={Chef1} />
            <div className="nefcfu">
              <h4>Biplab Ganguly</h4>
              <p>Chief of Cuisine</p>
            </div>
          </div>
        </div>
        <div className=" col-lg-4 col-md-5 col-sm-6 ">
          <div className="nefcf">
            <img src={Chef2} />
            <div className="nefcfu">
              <h4>rajib Shukla</h4>
              <p>Corporate Chef</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurChef;
