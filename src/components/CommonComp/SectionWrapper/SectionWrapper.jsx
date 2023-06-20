import React from 'react'

const SectionWrapper = ({children , classname}) => {
  return (
      <section className={`about-section secexp ${classname}`}>
        {children}
      </section>
  )
}

export default SectionWrapper
