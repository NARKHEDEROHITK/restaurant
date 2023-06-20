import React from "react";
import menuh from '../../assets/images/menu-h-img-rev.jpg'

const Video = () => {
  return (
    <section className="video-section bgdep">
      <div className="auto-container">
        <div
          className="content-box vdbgim wow fadeInUp"
          style={{ backgroundImage: `url(${menuh})` }}
        >
          <a
            href="https://www.youtube.com/watch?v=Fvae8nxzVz4"
            className="play-now"
            data-fancybox="gallery"
            data-caption=""
          >
            <i className="icon flaticon-play-button-3" aria-hidden="true"></i>
            <span className="ripple"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Video;
