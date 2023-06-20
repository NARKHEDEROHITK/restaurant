import React from "react";
import BannerName from "../../components/BannerName/BannerName";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import SectionWrapper from "../../components/CommonComp/SectionWrapper/SectionWrapper";

const Location = () => {
  return (
    <>
      <BannerName name="LOCATION" />
      <SectionWrapper classname="bgdep2">
        <GetInTouch />
      </SectionWrapper>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1842.8646535484559!2d88.36208720300048!3d22.514337182639125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02715bba14eeff%3A0x4a7e4f2267f8f3fa!2sCaptain&#39;s%20Deck%20Bar%20And%20Grill!5e0!3m2!1sen!2sin!4v1686213983565!5m2!1sen!2sin"
        width="100%"
        height="350"
        style={{border:0}}
        loading="lazy"
    
      ></iframe>
    </>
  );
};

export default Location;
