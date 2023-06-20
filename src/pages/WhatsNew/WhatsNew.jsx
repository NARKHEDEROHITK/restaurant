import React from "react";
import BannerName from "../../components/BannerName/BannerName";
import SectionWrapper from "../../components/CommonComp/SectionWrapper/SectionWrapper";
import OurNewCollection from "../../components/OurNewCollection/OurNewCollection";

const WhatsNew = () => {
  return (
    <>
      <BannerName name="WHAT’S NEW" />

      <SectionWrapper classname="bgdep2">
        <OurNewCollection />
      </SectionWrapper>
    </>
  );
};

export default WhatsNew;
