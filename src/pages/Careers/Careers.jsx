import React from "react";
import BannerName from "../../components/BannerName/BannerName";
import SectionWrapper from "../../components/CommonComp/SectionWrapper/SectionWrapper";

const Careers = () => {
  return (
    <>
      <BannerName name="CAREERS" />
      <SectionWrapper classname="bgdep2">
        <div className="auto-container">
          <div className="row">
            {/* <!-- Content Column --> */}
            <div className=" col-lg-12 col-md-12 col-sm-12 wow fadeInUp">
              <div className="insabtx ">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Careers;
