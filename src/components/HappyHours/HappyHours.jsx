import React from 'react'
import abc from '../../assets/images/home-3-img-5.jpg'

const HappyHours = () => {
  return (
    <section className="bout-section p-0 bgdep">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 col-sm-6 opnbgim" style={{ backgroundImage: `url(${abc})` }}>
          <img src={abc} />
        </div>
        <div className="col-md-6 col-sm-6 opnbgtx">
          <div className="opnbgtx wow fadeInUp">
            <h2>Happy Hours</h2>
            <h3>MONDAY - SATURDAY<br /><span>5:00 PM - 1:00 AM</span></h3>
            <h4><span>ALL DAY</span></h4>
            <h4><span>BUY 1 GET 1</span></h4>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HappyHours
