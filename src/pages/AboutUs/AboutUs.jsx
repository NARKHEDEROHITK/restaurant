import React, { useEffect } from 'react'
import BannerName from '../../components/BannerName/BannerName'
import SectionWrapper from '../../components/CommonComp/SectionWrapper/SectionWrapper'
import OurGallerySlider from '../../components/CommonComp/OurGallerySlider/OurGallerySlider'
import AboutCaptainDesk from '../../components/AboutCaptainDesk/AboutCaptainDesk'
import OurChef from '../../components/OurChef/OurChef'
import Testimonial from '../../components/Testimonial/Testimonial'

const AboutUs = () => {

 

  return (
    <>
        <BannerName name="ABOUT US"/>

        <SectionWrapper classname='bgdep' >
          <AboutCaptainDesk/>
        </SectionWrapper>

        <SectionWrapper classname='bgdep2' >
        <OurGallerySlider/>
        </SectionWrapper>

        <SectionWrapper classname='bgdep' >
        <OurChef/>
        </SectionWrapper>

        <SectionWrapper classname='bgdep2' >
        <Testimonial/>
        </SectionWrapper>
    </>
  )
}

export default AboutUs
