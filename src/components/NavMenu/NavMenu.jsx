import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const NavMenu = ({ closeMobile }) => {
  const [setshowNestedNavActive, setSetshowNestedNavActive] = useState(false);

  const setNestedDeactive = () =>{
    setSetshowNestedNavActive(false)
  }

  const setNestedActive = () =>{
    setSetshowNestedNavActive(true)
  }

  const activeClass = ({ isActive }) => (isActive ? "activeLink" : "");
  const nestedActiveClass = ({ isActive }) => (isActive ? "nested-active" : "");

  return (
    <>
      <li>
        <NavLink to={"/"} className={activeClass} onClick={()=>{closeMobile();setNestedDeactive()}}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/about-us"} className={activeClass} onClick={()=>{closeMobile();setNestedDeactive()}}>
          About us
        </NavLink>
      </li>
      {/* <!--<li><a href="menu" className="actvmn">Menu</a></li>--> */}
      <li className="dropdown">
        <NavLink className={setshowNestedNavActive ? "activeLink" : ""}>
          Menu
        </NavLink>
        <ul className="nested-nav">
        
          <li>
            <NavLink
              to={"/drinks"}
              className={nestedActiveClass}
              onClick={() => {
                closeMobile();setNestedActive()
              }}
            >
              Drinks
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/foods"}
              className={nestedActiveClass}
              onClick={() => {
                closeMobile();setNestedActive()
              }}
            >
              Foods
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <NavLink to={"/gallery"} className={activeClass} onClick={()=>{closeMobile();setNestedDeactive()}}>
          Gallery
        </NavLink>
      </li>
      <li>
        <NavLink to={"/media"} className={activeClass} onClick={()=>{closeMobile();setNestedDeactive()}}>
          Media
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/whats-new"}
          className={activeClass}
          onClick={()=>{closeMobile();setNestedDeactive()}}
        >
          What’s new
        </NavLink>
      </li>
      <li>
        <NavLink to={"/location"} className={activeClass} onClick={()=>{closeMobile();setNestedDeactive()}}>
          Location
        </NavLink>
      </li>
    </>
  );
};

export default NavMenu;
