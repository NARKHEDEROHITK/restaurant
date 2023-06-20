import React from 'react'
import BannerName from '../../components/BannerName/BannerName'
import FoodFilter from '../../components/FoodFilter/FoodFilter'
import FoodMenuChart from '../../components/FoodMenuChart/FoodMenuChart'
import SectionWrapper from '../../components/CommonComp/SectionWrapper/SectionWrapper'

const Foods = () => {
  return (
    <>
      <BannerName name="FOOD"/>
      <SectionWrapper classname="bgdep2">
      <FoodFilter/>
      <FoodMenuChart/>
      </SectionWrapper>
      
    </>
  )
}

export default Foods
