import React from 'react'

const SectionWrapper = ({children , classname}) => {
  return (
      <section className={`about-section secexp bgdep2 ${classname}`}>
        {children}
      </section>
   
  )
}

export default SectionWrapper
