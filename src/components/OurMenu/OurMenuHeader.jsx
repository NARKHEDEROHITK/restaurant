import React from "react";

const OurMenuHeader = ({setselectedMenu , selectedMenu}) => {
  return (
    <ul className="nav nav-tabs fdmnutb">
      <li className={selectedMenu === 'soup'? 'actfdmn':''} onClick={()=>setselectedMenu('soup')} >
        <img src="images/mnu2.png" />
        <br />
        Soup
      </li>
      <li className={selectedMenu === 'main-course'? 'actfdmn':''} onClick={()=>setselectedMenu('main-course')}>
        <img src="images/mnu3.png" />
        <br />
        Main Course
      </li>
      <li className={selectedMenu === 'dessert'? 'actfdmn':''} onClick={()=>setselectedMenu('dessert')}>
        <img src="images/mnu4.png" />
        <br />
        Dessert
      </li>
      <li className={selectedMenu === 'drinks'? 'actfdmn':''} onClick={()=>setselectedMenu('drinks')}>
        <img src="images/mnu5.png" />
        <br />
        Drinks
      </li>
    </ul>
  );
};

export default OurMenuHeader;
