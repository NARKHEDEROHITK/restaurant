import React from "react";
import BannerName from "../../components/BannerName/BannerName";
import GalleryImages from "../../components/GalleryImages/GalleryImages";
import SectionWrapper from "../../components/CommonComp/SectionWrapper/SectionWrapper";

const Gallery = () => {
  return (
    <>
      <BannerName name="GALLERY" />
      <SectionWrapper classname="bgdep2">
        <GalleryImages />
      </SectionWrapper>
    </>
  );
};

export default Gallery;
