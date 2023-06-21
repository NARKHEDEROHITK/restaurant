import React, { useEffect } from "react";

const AllTestimonials = [
  {
    name: "Bikash Mitra",
    location: "Kolkata",
    review:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.",
  },
  {
    name: "Rahul Saha",
    location: "Kolkata",
    review:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.",
  },
  {
    name: "Bikash Mitra",
    location: "Kolkata",
    review:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.",
  },
];

const Testimonial = () => {
  useEffect(() => {
    $(".carousel_slide01").each(function () {
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
          '<i className="fa fa-angle-left"></i>',
          '<i className="fa fa-angle-right"></i>',
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
            items: 1,
          },
          1000: {
            items: 1,
          },
          1199: {
            items: 1,
          },
        },
      });
    });
  });

  return (
    <div className="auto-container">
      <div className="sechdttl wow fadeInUp">
        <h4>Testimonials</h4>
        <h2>
          <span>
            What Our Clients Says <div className="ttlhdb1"></div>
            <div className="ttlhdb2"></div>
          </span>
        </h2>
      </div>

      <div className="clttst wow fadeInUp">
        <div className="clttstic">
          <img src="images/qutn.png" />
        </div>
        <div
          className="carousel_slide01 products-style-2 nav-style-2 owl-carousel owl-theme"
          data-margin="30"
          data-dots="true"
          data-autoplay="true"
          data-nav="false"
          data-loop="true"
        >
          {AllTestimonials.map((item, index) => {
            return (
              <div className="item" key={index}>
                <div className="tstx">
                  <p>{item.review}</p>
                  <h3>{item.name}</h3>
                  <h4>{item.location}</h4>
                </div>
              </div>
            );
          })}

          {/* <div className="item">
            <div className="tstx">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum.
              </p>
              <h3>Bikash Mitra</h3>
              <h4>Kolkata</h4>
            </div>
          </div>

          <div className="item">
            <div className="tstx">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum.
              </p>
              <h3>Rahul Saha</h3>
              <h4>Kolkata</h4>
            </div>
          </div>

          <div className="item">
            <div className="tstx">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum.
              </p>
              <h3>Rabib Biswas</h3>
              <h4>Kolkata</h4>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
