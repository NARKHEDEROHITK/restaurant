import React, { useEffect } from "react";
import dish1 from "../../../assets/images/dish1.jpg";
import dish2 from "../../../assets/images/dish2.jpg";
import dish3 from "../../../assets/images/dish3.jpg";
import dish4 from "../../../assets/images/dish4.jpg";

const allDishesh = [dish1, dish2, dish3, dish4];

const OurGallerySlider = () => {
  useEffect(() => {
    $(".carousel_slide4").each(function () {
      var $carousel = $(this);
      $carousel.owlCarousel({
        dots: $carousel.data("dots"),
        loop: $carousel.data("loop"),
        margin: $carousel.data("margin"),
        autoHeight: true,
        rewind: $carousel.data("rewind"),
        autoplay: $carousel.data("autoplay"),
        nav: $carousel.data("nav"),
        navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>',
        ],
        autoplayTimeout: $carousel.data("autoplay-timeout"),
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
            items: 4,
          },
        },
      });
    });
  });

  return (
    <>
      <div className="auto-container">
        <div className="sechdttl wow fadeInUp">
          <h4>Our Gallery</h4>
          <h2>
            <span>
              TRY OUR SPECIAL DISHES <div className="ttlhdb1"></div>
              <div className="ttlhdb2"></div>
            </span>
          </h2>
        </div>

        <div className="glrydv wow fadeInUp">
          <div
            className="carousel_slide4 products-style-2 nav-style-2 owl-carousel owl-theme"
            data-margin="30"
            data-dots="false"
            data-autoplay="true"
            data-nav="false"
            data-loop="true"
          >
            {allDishesh.map((dish, index) => {
              return (
                <div className="item" key={index}>
                  <div className="glrbim">
                    <a
                      href={dish}
                      className="lightbox-image"
                      data-fancybox="gallery"
                    >
                      <img src={dish} />
                      <div className="glrbtxmn">
                        <div className="glrbtx">
                          <p>Main Course</p>
                          <h3>Grilled Chicken</h3>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}

            {/* <div className="item">
              <div className="glrbim">
                <a
                  href={dish2}
                  className="lightbox-image"
                  data-fancybox="gallery"
                >
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
                <a
                  href={dish4}
                  className="lightbox-image"
                  data-fancybox="gallery"
                >
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
                <a
                  href={dish3}
                  className="lightbox-image"
                  data-fancybox="gallery"
                >
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
                <a
                  href={dish2}
                  className="lightbox-image"
                  data-fancybox="gallery"
                >
                  <img src={dish2} />
                  <div className="glrbtxmn">
                    <div className="glrbtx">
                      <p>Main Course</p>
                      <h3>Grilled Chicken</h3>
                    </div>
                  </div>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurGallerySlider;
