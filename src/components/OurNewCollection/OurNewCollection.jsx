import React from "react";
import Noksha from '../../assets/images/noksha.png'
import Whts from '../../assets/images/whts.jpg'

const OurNewCollection = () => {
  return (
    <div className="auto-container">
      <div className="row m-0">
        {/* <!-- Content Column --> */}
        <div className="col-md-6 col-sm-6  wstnwt">
          <img src={Noksha} />
          <h3>Our New Collection</h3>
          <h2>Mughlai Biryani</h2>
          <h4>₹385/-</h4>
        </div>
        <div className="col-md-6 col-sm-6 p-0 wstnwim">
          <img src={Whts} />
        </div>
      </div>
    </div>
  );
};

export default OurNewCollection;
