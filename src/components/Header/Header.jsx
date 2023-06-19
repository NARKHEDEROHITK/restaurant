import React from 'react'
import LOGO from '../../assets/images/logo.png'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className="main-header header-style-two alternate">
        <div className="main-box">
          <div className="container-fluid clearfix">

            <div className="row">
              <div className="col-lg-2 col-md-3 col-sm-3 col-3 order-lg-last">
                <div className="hdr_righb">

                </div>
                <div className="hdr_righbsh">
                  <div className="hdr_righbcl"><span className="icon flaticon-cancel-music"></span></div>
                  <div className="hdrilg">
                    <a href="index">
                      <img src={LOGO} /></a>
                  </div>
                  <div className="hdritx">
                    <p>Captain's Deck</p>
                    <p>51/B, Bosuje Lane, Kolkata-001</p>
                    <p><a href="tel:+918597898654">+91 85978 98654</a></p>
                    <p>Open Hours: 09:00 am – 01:00 pm</p>


                    <ul className="social-icon-one social-icon-colored">
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                      <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                    </ul>
                  </div>

                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-6">
                <div className="logo-box">
                  <div className="logo">
                    <NavLink to="/">
                      <img src={LOGO} alt="" title="" />
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-3 col-sm-3 col-3">
                {/* <!--Nav Box--> */}
                <div className="nav-outer clearfix">
                  {/* <!--Mobile Navigation Toggler--> */}
                  <div className="mobile-nav-toggler"><div className="hdr_righbmnu"></div></div>
                  {/* <!-- Main Menu --> */}
                  <nav className="main-menu navbar-expand-md navbar-light">
                    <div className="navbar-header">
                      {/* <!-- Togg le Button --> */}
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon flaticon-menu-button"></span>
                      </button>
                    </div>

                    <div className="collapse navbar-collapse clearfix" id="navbarSupportedContent">
                      <ul className="navigation clearfix">
                        <li><NavLink to={'/'} className="actvhm">Home</NavLink></li>
                        <li><NavLink to={'/about-us'} className="actvab">About us</NavLink></li>
                        {/* <!--<li><a href="menu" className="actvmn">Menu</a></li>--> */}
                        <li className="dropdown"><a className="actvmn">Menu</a>
                          <ul>
                            <li><NavLink to={'/drinks'} className="actvmndk">Drinks</NavLink></li>
                            <li><NavLink to={'/foods'} className="actvmnfd">Foods</NavLink></li>
                          </ul>
                        </li>
                        <li><NavLink to={'/gallery'} className="actvgl">Gallery</NavLink></li>
                        <li><NavLink to={'/media'} className="actvmd">Media</NavLink></li>
                        <li><NavLink to={'/whats-new'} className="actvwn">What’s new</NavLink></li>
                        <li><NavLink to={'/location'} className="actvlo">Location</NavLink></li>
                      </ul>
                    </div>
                  </nav>
                  {/* <!-- Main Menu End--> */}

                </div>
              </div>

            </div>

          </div>
        </div>

        {/* <!-- Mobile Menu  --> */}
        <div className="mobile-menu">
          <div className="menu-backdrop"></div>
          <div className="close-btn"><span className="icon flaticon-cancel-1"></span></div>

          {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
          <nav className="menu-box">
            <div className="nav-logo">
              <a NavLink to={'/'}>
                <img src="" alt=""  />
              </a>
            </div>

            <ul className="navigation clearfix">
              {/* <!--Keep This Empty / Menu will come through Javascript--> */}
            </ul>
          </nav>
        </div>
        {/* <!-- End Mobile Menu --> */}
      </header>
    </>
  )
}

export default Header
