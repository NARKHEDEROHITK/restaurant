import React, { useEffect } from 'react'
import Banner1 from '../../assets/images/banner1.jpg'
import Banner2 from '../../assets/images/banner2.jpg'

const Slider = () => {

    useEffect(() => {
        if ($('.banner-carousel').length) {
            $('.banner-carousel').owlCarousel({
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                loop:true,
                margin:0,
                nav:false,
                dots:false,
                smartSpeed: 500,
                autoHeight: true,
                autoplay: true,
                autoplayTimeout:5000,
                navText: [ '<span className="fa fa-angle-left">', '<span className="fa fa-angle-right">' ],
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1024:{
                        items:1
                    },
                }
            }); 
        }
    })

    return (
        <>
            <section className="banner-section">
                <div className="banner-carousel owl-carousel owl-theme owl-loaded owl-drag">
                    <div style={{ backgroundImage: `url(${Banner1})` }} className="slide-item" >
                        <div className="auto-container">
                            <div className="content-box">
                                <h2><span>The Best Food</span><br /> For The  Best Moments </h2>
                            </div>
                        </div>
                    </div>

                    <div className="slide-item" style={{ backgroundImage: `url(${Banner2})` }}>
                        <div className="auto-container">
                            <div className="content-box">
                                <h2><span>Bar & Pub</span><br /> For Long Evening </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Slider
