import React, { useState } from "react";
import OurMenuHeader from "./OurMenuHeader";
import OurMenuContent from "./OurMenuContent";
import './OurMenu.css'

const OurMenu = () => {

    const [selectedMenu, setselectedMenu] = useState('soup')

  return (
    <div className="auto-container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="sechdttl wow fadeInUp">
            <h4>Our Menu</h4>
            <h2>
              <span>
                Choose & Taste What You Like
                <div className="ttlhdb1"></div>
                <div className="ttlhdb2"></div>
              </span>
            </h2>
          </div>
          <div className="fodmnu wow fadeInUp">
          <OurMenuHeader setselectedMenu={setselectedMenu} selectedMenu={selectedMenu} />
           <OurMenuContent selectedMenu={selectedMenu} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
