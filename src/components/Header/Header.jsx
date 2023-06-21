import React, { useState } from 'react'
import LOGO from '../../assets/images/logo.png'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'
import NavMenu from '../NavMenu/NavMenu'

const Header = () => {
  const [show, setShow] = useState(false)

  const onCloseMenuMobile = ()=>{
		$('body').removeClass('mobile-menu-visible');
  }

  const onToggleMenu = ()=>{
    $('body').addClass('mobile-menu-visible');
  }

  return (
    <>
      <header className="main-header header-style-two alternate ">
        <div className="main-box">
          <div className="container-fluid clearfix">

            <div className="row">
              <div className="col-lg-2 col-md-3 col-sm-3 col-3 order-lg-last">
                <div className="hdr_righb" onClick={()=>setShow(true)} >

                </div>
                <div className="hdr_righbsh" style={{display:show?'block':'none'}} >
                  <div className="hdr_righbcl" onClick={()=>setShow(false)} ><span className="icon flaticon-cancel-music"></span></div>
                  <div className="hdrilg">
                    <Link to={'/'}>
                      <img src={LOGO} /></Link>
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
                  <div className="mobile-nav-toggler" onClick={()=>onToggleMenu()} ><div className="hdr_righbmnu"></div></div>
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
                        <NavMenu closeMobile={onCloseMenuMobile} />
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
          <div className="menu-backdrop" onClick={()=>onCloseMenuMobile()}></div>
          <div className="close-btn" onClick={()=>onCloseMenuMobile()} ><span className="icon flaticon-cancel-1 flaticon-cancel-music"></span></div>

          {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
          <nav className="menu-box">
            <div className="nav-logo">
              <a NavLink to={'/'}>
                <img src="" alt=""  />
              </a>
            </div>

            <ul className="navigation clearfix">
            <NavMenu closeMobile={onCloseMenuMobile} />
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
