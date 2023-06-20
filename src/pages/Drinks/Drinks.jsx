import React from "react";
import BannerName from "../../components/BannerName/BannerName";
import DrinksFiltrer from "../../components/DrinksFiltrer/DrinksFiltrer";
import DrinksMenuChart from "../../components/DrinksMenuChart/DrinksMenuChart";
import SectionWrapper from "../../components/CommonComp/SectionWrapper/SectionWrapper";

const Drinks = () => {
  return (
    <>
      <BannerName name="DRINKS" />
      <SectionWrapper classname="bgdep2">
        <DrinksFiltrer />
        <DrinksMenuChart />
      </SectionWrapper>
    </>
  );
};

export default Drinks;
