import React from 'react'
import About2 from '../../assets/images/about2.jpg'
import About3 from '../../assets/images/about3.jpg'

const AboutCaptainDesk = () => {
  return (
    <>
         <div className="auto-container">
            <div className="abcpgb">
            <div className="row">
                {/* <!-- Content Column --> */}
                <div className=" col-lg-6 col-md-6 col-sm-6 ">
                        <div className="insabtim ">
						    <img src={About2} className="insabtim1"/>
						    <img src={About3} />
						</div>
                </div>
                <div className=" col-lg-6 col-md-6 col-sm-6 ">
                        <div className="insabtx m-0">
								<h4>About</h4>
								<h2>Captain's Deck</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                        
                        </div>
                </div>
                
            </div>
            </div>
        </div>
    </>
  )
}

export default AboutCaptainDesk
