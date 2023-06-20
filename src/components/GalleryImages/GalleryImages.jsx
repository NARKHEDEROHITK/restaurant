import React from "react";
import Dish1 from '../../assets/images/dish1.jpg'
import Dish2 from '../../assets/images/dish2.jpg'
import Dish3 from '../../assets/images/dish3.jpg'
import Dish4 from '../../assets/images/dish4.jpg'
import Dish5 from '../../assets/images/dish5.jpg'
import Dish6 from '../../assets/images/dish6.jpg'
import Dish7 from '../../assets/images/dish7.jpg'
import Dish8 from '../../assets/images/dish8.jpg'

const GalleryImages = () => {
  return (
    <div className="auto-container">
      <div className="row">
        {/* <!-- Content Column --> */}
        <div className="col-md-3 col-sm-6 ">
          <div className="glrbim">
            <a
              href={Dish8}
              className="lightbox-image"
              data-fancybox="gallery"
            >
              <img src={Dish8} />
              <div className="glrbtxmn">
                <div className="glrbtx">
                  <p>Main Course</p>
                  <h3>Grilled Chicken</h3>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 ">
          <div className="glrbim">
            <a
              href={Dish7}
              className="lightbox-image"
              data-fancybox="gallery"
            >
              <img src={Dish7} />
              <div className="glrbtxmn">
                <div className="glrbtx">
                  <p>Main Course</p>
                  <h3>Grilled Chicken</h3>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 ">
          <div className="glrbim">
            <a
              href={Dish3}
              className="lightbox-image"
              data-fancybox="gallery"
            >
              <img src={Dish3} />
              <div className="glrbtxmn">
                <div className="glrbtx">
                  <p>Main Course</p>
                  <h3>Grilled Chicken</h3>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 ">
          <div className="glrbim">
            <a
              href={Dish2}
              className="lightbox-image"
              data-fancybox="gallery"
            >
              <img src={Dish2} />
              <div className="glrbtxmn">
                <div className="glrbtx">
                  <p>Main Course</p>
                  <h3>Grilled Chicken</h3>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 ">
          <div className="glrbim">
            <a
              href={Dish1}
              className="lightbox-image"
              data-fancybox="gallery"
            >
              <img src={Dish1} />
              <div className="glrbtxmn">
                <div className="glrbtx">
                  <p>Main Course</p>
                  <h3>Grilled Chicken</h3>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 ">
          <div className="glrbim">
            <a
              href={Dish5}
              className="lightbox-image"
              data-fancybox="gallery"
            >
              <img src={Dish5} />
              <div className="glrbtxmn">
                <div className="glrbtx">
                  <p>Main Course</p>
                  <h3>Grilled Chicken</h3>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 ">
          <div className="glrbim">
            <a
              href={Dish8}
              className="lightbox-image"
              data-fancybox="gallery"
            >
              <img src={Dish8} />
              <div className="glrbtxmn">
                <div className="glrbtx">
                  <p>Main Course</p>
                  <h3>Grilled Chicken</h3>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 ">
          <div className="glrbim">
            <a
              href={Dish4}
              className="lightbox-image"
              data-fancybox="gallery"
            >
              <img src={Dish4} />
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
  );
};

export default GalleryImages;
