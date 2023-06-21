import React from "react";

const allDrinks = [
  {
    name: "Dewar's White Label",
    quantity: "30ML",
    price: 185,
    desc: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    name: "Dewar's White Label",
    quantity: "30ML",
    price: 185,
    desc: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    name: "Dewar's White Label",
    quantity: "30ML",
    price: 185,
    desc: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    name: "Dewar's White Label",
    quantity: "30ML",
    price: 185,
    desc: "Lorem ipsum dolor sit amet, consectetur",
  },
];

const DrinksMenuChart = () => {
  return (
    <div class="auto-container">
      <div class="row">
        {/* <!-- Content Column --> */}
        <div class=" col-lg-12 col-md-12 col-sm-12 wow fadeInUp">
          <div class="fofimnhd main-title">
            <h2>
              <span>
                Spirits <div class="ttlhdb2"></div>
              </span>
            </h2>
          </div>
          <div class="fofimnhd sub-title">
            <h4>
              <span>
                Single Malt <div class="ttlhdb2ndbd"></div>
              </span>
            </h4>
          </div>
          <div class="fdmnscp">
            <div class="row">
              {allDrinks.map((drink, index) => {
                return (
                  <div class="col-md-6" key={index}>
                    <div class="fdmnscpu">
                      <div class="fdmnscpu1 fdmnscpu1dlf">
                        <h4>
                          <span>{drink.name}</span>
                          <span class="fdmnscpu1dlfm">30ML</span>
                        </h4>
                        <p>{drink.desc}</p>
                      </div>
                      <div class="fdmnscpu3"></div>
                      <div class="fdmnscpu2">
                        <h4>
                          <span>₹{drink.price}</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div class="fofimnhd">
            <h4>
              <span>
                Irish <div class="ttlhdb2ndbd"></div>
              </span>
            </h4>
          </div>
          <div class="fdmnscp">
            <div class="row">
              {allDrinks.map((drink, index) => {
                return (
                  <div class="col-md-6" key={index}>
                    <div class="fdmnscpu">
                      <div class="fdmnscpu1 fdmnscpu1dlf">
                        <h4>
                          <span>{drink.name}</span>
                          <span class="fdmnscpu1dlfm">30ML</span>
                        </h4>
                        <p>{drink.desc}</p>
                      </div>
                      <div class="fdmnscpu3"></div>
                      <div class="fdmnscpu2">
                        <h4>
                          <span>₹{drink.price}</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div class="fofimnhd">
            <h2>
              <span>
                Cocktail <div class="ttlhdb2"></div>
              </span>
            </h2>

            <h4>
              <span>
                Mojito <div class="ttlhdb2ndbd"></div>
              </span>
            </h4>
          </div>
          <div class="fdmnscp">
          <div class="row">
              {
                allDrinks.map((drink , index)=>{
                  return(
                    <div class="col-md-6" key={index}>
                    <div class="fdmnscpu">
                      <div class="fdmnscpu1 fdmnscpu1dlf">
                        <h4>
                          <span>{drink.name}</span>
                          <span class="fdmnscpu1dlfm">30ML</span>
                        </h4>
                        <p>{drink.desc}</p>
                      </div>
                      <div class="fdmnscpu3"></div>
                      <div class="fdmnscpu2">
                        <h4>
                          <span>₹{drink.price}</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  )
                })
              }
             
             
            </div>
          </div>

          <div class="fofimnhd">
            <h2>
              <span>
                Mocktail <div class="ttlhdb2"></div>
              </span>
            </h2>

            <h4>
              <span>
                Mojito <div class="ttlhdb2ndbd"></div>
              </span>
            </h4>
          </div>
          <div class="fdmnscp">
            <div class="row">
              {allDrinks.map((drink, index) => {
                return (
                  <div class="col-md-6" key={index}>
                    <div class="fdmnscpu">
                      <div class="fdmnscpu1 fdmnscpu1dlf">
                        <h4>
                          <span>{drink.name}</span>
                          <span class="fdmnscpu1dlfm">30ML</span>
                        </h4>
                        <p>{drink.desc}</p>
                      </div>
                      <div class="fdmnscpu3"></div>
                      <div class="fdmnscpu2">
                        <h4>
                          <span>₹{drink.price}</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div class="fofimnhd">
            <h2>
              <span>
                Areated Drinks <div class="ttlhdb2"></div>
              </span>
            </h2>

            <h4>
              <span>
                Single Malt <div class="ttlhdb2ndbd"></div>
              </span>
            </h4>
          </div>
          <div class="fdmnscp">
            <div class="row">
              {allDrinks.map((drink, index) => {
                return (
                  <div class="col-md-6" key={index}>
                    <div class="fdmnscpu">
                      <div class="fdmnscpu1 fdmnscpu1dlf">
                        <h4>
                          <span>{drink.name}</span>
                          <span class="fdmnscpu1dlfm">30ML</span>
                        </h4>
                        <p>{drink.desc}</p>
                      </div>
                      <div class="fdmnscpu3"></div>
                      <div class="fdmnscpu2">
                        <h4>
                          <span>₹{drink.price}</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div class="fofimnhd">
            <h2>
              <span>
                Beer <div class="ttlhdb2"></div>
              </span>
            </h2>
          </div>
          <div class="fdmnscp">
            <div class="row">
              {allDrinks.map((drink, index) => {
                return (
                  <div class="col-md-6" key={index}>
                    <div class="fdmnscpu">
                      <div class="fdmnscpu1 fdmnscpu1dlf">
                        <h4>
                          <span>{drink.name}</span>
                          <span class="fdmnscpu1dlfm">30ML</span>
                        </h4>
                        <p>{drink.desc}</p>
                      </div>
                      <div class="fdmnscpu3"></div>
                      <div class="fdmnscpu2">
                        <h4>
                          <span>₹{drink.price}</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinksMenuChart;
