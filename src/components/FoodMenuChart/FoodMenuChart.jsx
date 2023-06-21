import React from "react";
import Veg from '../../assets/images/veg.png'
import NonVeg from '../../assets/images/nonveg.png'
import Redchili from '../../assets/images/redchili.png'

const allFoods = [
  {name:"Chawli Beans and Mint Burger" , price:185 , desc:"Lorem ipsum dolor sit amet, consectetur" , veg:true , redchilli:true},
  {name:"Chawli Beans and Mint Burger" , price:185 , desc:"Lorem ipsum dolor sit amet, consectetur" , veg:false , redchilli:false},
  {name:"Chawli Beans and Mint Burger" , price:185 , desc:"Lorem ipsum dolor sit amet, consectetur" , veg:false , redchilli:true},
  {name:"Chawli Beans and Mint Burger" , price:185 , desc:"Lorem ipsum dolor sit amet, consectetur" , veg:true , redchilli:false},
]

const FoodMenuChart = () => {
  return (
    <div class="auto-container">
      <div class="row">
        {/* <!-- Content Column --> */}
        <div class=" col-lg-12 col-md-12 col-sm-12 wow fadeInUp">
          <div class="fofimnhd">
            <h2>
              <span>
                Soup <div class="ttlhdb2"></div>
              </span>
            </h2>
          </div>

          <div class="fdmnscp">
            <div class="row">
              {allFoods.map((item,index)=>{
                return (
                  <div class="col-md-6" key={index}>
                  <div class="fdmnscpu">
                    <div class="fdmnscpu1">
                      <h4>
                        <ul>
                          <li style={{display: item.redchilli ?'':'none'}} >
                            <img src={Redchili} />
                          </li>
                          <li>
                            <img src={ item.veg?Veg:NonVeg} />
                          </li>
                        </ul>
                        <span>{item.name}</span>
                      </h4>
                      <p>{item.desc}</p>
                    </div>
                    <div class="fdmnscpu3"></div>
                    <div class="fdmnscpu2">
                      <h4>
                        <span>₹{item.price}</span>
                      </h4>
                    </div>
                  </div>
                </div>
                )
              })}
            
            </div>
          </div>

          <div class="fofimnhd">
            <h2>
              <span>
                Main Course <div class="ttlhdb2"></div>
              </span>
            </h2>
          </div>

          <div class="fdmnscp">
          <div class="row">
              {allFoods.map((item,index)=>{
                return (
                  <div class="col-md-6" key={index}>
                  <div class="fdmnscpu">
                    <div class="fdmnscpu1">
                      <h4>
                        <ul>
                          <li style={{display: item.redchilli ?'':'none'}} >
                            <img src={Redchili} />
                          </li>
                          <li>
                            <img src={ item.veg?Veg:NonVeg} />
                          </li>
                        </ul>
                        <span>{item.name}</span>
                      </h4>
                      <p>{item.desc}</p>
                    </div>
                    <div class="fdmnscpu3"></div>
                    <div class="fdmnscpu2">
                      <h4>
                        <span>₹{item.price}</span>
                      </h4>
                    </div>
                  </div>
                </div>
                )
              })}
            
            </div>
          </div>

          <div class="fofimnhd">
            <h2>
              <span>
                Dessert <div class="ttlhdb2"></div>
              </span>
            </h2>
          </div>

          <div class="fdmnscp">
          <div class="row">
              {allFoods.map((item,index)=>{
                return (
                  <div class="col-md-6" key={index}>
                  <div class="fdmnscpu">
                    <div class="fdmnscpu1">
                      <h4>
                        <ul>
                          <li style={{display: item.redchilli ?'':'none'}} >
                            <img src={Redchili} />
                          </li>
                          <li>
                            <img src={ item.veg?Veg:NonVeg} />
                          </li>
                        </ul>
                        <span>{item.name}</span>
                      </h4>
                      <p>{item.desc}</p>
                    </div>
                    <div class="fdmnscpu3"></div>
                    <div class="fdmnscpu2">
                      <h4>
                        <span>₹{item.price}</span>
                      </h4>
                    </div>
                  </div>
                </div>
                )
              })}
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodMenuChart;
