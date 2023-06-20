import React, { useEffect } from 'react'
import Slider from '../../components/Slider/Slider'
import SectionWrapper from '../../components/CommonComp/SectionWrapper/SectionWrapper';
import OurStory from '../../components/OurStory/OurStory';
import hmpinbnr from '../../assets/images/hmpinbnr.jpg'
import OurGallerySlider from '../../components/CommonComp/OurGallerySlider/OurGallerySlider';
import Testimonial from '../../components/Testimonial/Testimonial';
import Video from '../../components/Video/Video';
import TableReservation from '../../components/TableReservation/TableReservation';
import HappyHours from '../../components/HappyHours/HappyHours';
import OurMenu from '../../components/OurMenu/OurMenu';


const Home = () => {
  return (
    <>
      <Slider />

      <SectionWrapper classname='bgdep2'>
        <OurStory />
      </SectionWrapper>

      <section className="about-section mdlbr p-0">
        <img src={hmpinbnr} className="w100" />
      </section>

     <HappyHours/>

      {/* <!-- Video Section --> */}
      {/* <section className="video-section bgdep" >
        <div className="auto-container">
          <div className="content-box vdbgim wow fadeInUp" style={{ backgroundImage: `url(${menuh})` }}>

            <a href="https://www.youtube.com/watch?v=Fvae8nxzVz4" className="play-now" data-fancybox="gallery" data-caption=""><i className="icon flaticon-play-button-3" aria-hidden="true"></i><span className="ripple"></span></a>
          </div>
        </div>
      </section> */}
      <Video/>
      {/* <!--End Video Section --> */}

      <SectionWrapper classname='bgdep'>
        <OurMenu/>
      </SectionWrapper>


      {/* <section className="about-section secexp bgdep2">

        <div className="auto-container">
          <div className="sechdttl wow fadeInUp">
            <h4>Our Gallery</h4>
            <h2><span>TRY OUR SPECIAL DISHES <div className="ttlhdb1"></div><div className="ttlhdb2"></div></span></h2>
          </div>

          <div className="glrydv wow fadeInUp">
            <div className="carousel_slide4 products-style-2 nav-style-2 owl-carousel owl-theme" data-margin="30" data-dots="false" data-autoplay="true" data-nav="false" data-loop="true">
              <div className="item">
                <div className="glrbim">
                  <a href={dish1} className="lightbox-image" data-fancybox="gallery">
                    <img src={dish1} />
                    <div className="glrbtxmn">
                      <div className="glrbtx">
                        <p>Main Course</p>
                        <h3>Grilled Chicken</h3>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="glrbim">
                  <a href={dish2} className="lightbox-image" data-fancybox="gallery">
                    <img src={dish2} />
                    <div className="glrbtxmn">
                      <div className="glrbtx">
                        <p>Main Course</p>
                        <h3>Grilled Chicken</h3>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="glrbim">
                  <a href={dish4} className="lightbox-image" data-fancybox="gallery">
                    <img src={dish4} />
                    <div className="glrbtxmn">
                      <div className="glrbtx">
                        <p>Main Course</p>
                        <h3>Grilled Chicken</h3>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="glrbim">
                  <a href={dish3} className="lightbox-image" data-fancybox="gallery">
                    <img src={dish3} />
                    <div className="glrbtxmn">
                      <div className="glrbtx">
                        <p>Main Course</p>
                        <h3>Grilled Chicken</h3>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="glrbim">
                  <a href={dish2} className="lightbox-image" data-fancybox="gallery">
                    <img src={dish2} />
                    <div className="glrbtxmn">
                      <div className="glrbtx">
                        <p>Main Course</p>
                        <h3>Grilled Chicken</h3>
                      </div>
                    </div>
                  </a>
                </div>
              </div>




            </div>
          </div>


        </div>
      </section> */}

      <SectionWrapper classname='bgdep2'>
        <OurGallerySlider/>
      </SectionWrapper>

      <SectionWrapper classname='bgdep'>
        <TableReservation/>
      </SectionWrapper>

      <SectionWrapper classname='bgdep2' >
        <Testimonial/>
        </SectionWrapper>

    </>
  )
};

export default Home
