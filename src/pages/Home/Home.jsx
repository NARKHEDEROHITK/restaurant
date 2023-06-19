import React, { useEffect } from 'react'
import Slider from '../../components/Slider/Slider'
import SectionWrapper from '../../components/CommonComp/SectionWrapper';
import OurStory from '../../components/OurStory/OurStory';
import hmpinbnr from '../../assets/images/hmpinbnr.jpg'
import abc from '../../assets/images/home-3-img-5.jpg'
import menuh from '../../assets/images/menu-h-img-rev.jpg'
import dish1 from '../../assets/images/dish1.jpg'
import dish2 from '../../assets/images/dish2.jpg'
import dish3 from '../../assets/images/dish3.jpg'
import dish4 from '../../assets/images/dish4.jpg'


const Home = () => {

useEffect(() => {
  $('.carousel_slide4').each( function() {
    var $carousel = $(this);
    $carousel.owlCarousel({
      dots : $carousel.data("dots"),
      loop : $carousel.data("loop"),
      margin: $carousel.data("margin"),
      autoHeight: true,
      rewind: $carousel.data("rewind"),
      autoplay : $carousel.data("autoplay"),
      nav: $carousel.data("nav"),
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      autoplayTimeout : $carousel.data("autoplay-timeout"),
      responsive: {
        0: {
          items: 1,
        },
        380: {
          items: 1,
        },
        576: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1199: {
          items: 4
        }
      }
    });
  });
})

  return (
    <>
      <Slider />

      <SectionWrapper classname='bgdep'>
        <OurStory />
      </SectionWrapper>

      <section className="about-section mdlbr p-0">
        <img src={hmpinbnr} className="w100" />
      </section>

      <section className="bout-section p-0 bgdep">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-6 opnbgim" style={{ backgroundImage: `url(${abc})` }}>
              <img src={abc} />
            </div>
            <div className="col-md-6 col-sm-6 opnbgtx">
              <div className="opnbgtx wow fadeInUp">
                <h2>Happy Hours</h2>
                <h3>MONDAY - SATURDAY<br /><span>5:00 PM - 1:00 AM</span></h3>
                <h4><span>ALL DAY</span></h4>
                <h4><span>BUY 1 GET 1</span></h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Video Section --> */}
      <section className="video-section bgdep" >
        <div className="auto-container">
          <div className="content-box vdbgim wow fadeInUp" style={{ backgroundImage: `url(${menuh})` }}>

            <a href="https://www.youtube.com/watch?v=Fvae8nxzVz4" className="play-now" data-fancybox="gallery" data-caption=""><i className="icon flaticon-play-button-3" aria-hidden="true"></i><span className="ripple"></span></a>
          </div>
        </div>
      </section>
      {/* <!--End Video Section --> */}


      <section className="about-section secexp bgdep2">

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
      </section>

    </>
  )
};

export default Home
