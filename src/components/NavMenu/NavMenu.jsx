import React from "react";
import { NavLink } from "react-router-dom";

const NavMenu = ({closeMobile}) => {

    const activeClass =({isActive})=> isActive ? "activeLink":''
    const nestedActiveClass =({isActive})=> isActive ? "nested-active":''

  return (
    <>
      <li>
        <NavLink to={"/"} className={activeClass} onClick={closeMobile} >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/about-us"} className={activeClass} onClick={closeMobile}>
          About us
        </NavLink>
      </li>
      {/* <!--<li><a href="menu" className="actvmn">Menu</a></li>--> */}
      <li className="dropdown">
        <NavLink className="" >Menu</NavLink>
        <ul>
          <li>
            <NavLink to={"/drinks"} className={nestedActiveClass} onClick={()=>{closeMobile()}} >
              Drinks
            </NavLink>
          </li>
          <li>
            <NavLink to={"/foods"} className={nestedActiveClass} onClick={()=>{closeMobile()}} >
              Foods
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <NavLink to={"/gallery"} className={activeClass} onClick={closeMobile} >
          Gallery
        </NavLink>
      </li>
      <li>
        <NavLink to={"/media"} className={activeClass} onClick={closeMobile} >
          Media
        </NavLink>
      </li>
      <li>
        <NavLink to={"/whats-new"} className={activeClass} onClick={closeMobile} >
          What’s new
        </NavLink>
      </li>
      <li>
        <NavLink to={"/location"} className={activeClass} onClick={closeMobile} >
          Location
        </NavLink>
      </li>
    </>
  );
};

export default NavMenu;
