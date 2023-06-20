import React from "react";
import { Link } from "react-router-dom";

const OurMenuContent = ({selectedMenu}) => {
  return (
    <>
     
        <div className="fdmnscp">
          <div className="row">
            <div className="col-md-6">
              <div className="fdmnscpu">
                <div className="fdmnscpu1">
                  <h4>
                    <ul>
                      <li>
                        <img src="images/veg.png" />
                      </li>
                    </ul>
                    <span>Chawli Beans and Mint Burger</span>
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className="fdmnscpu3"></div>
                <div className="fdmnscpu2">
                  <h4>
                    <span>₹185</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="fdmnscpu">
                <div className="fdmnscpu1">
                  <h4>
                    <ul>
                      <li>
                        <img src="images/nonveg.png" />
                      </li>
                    </ul>
                    <span>Chawli Beans and Mint Burger</span>
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className="fdmnscpu3"></div>
                <div className="fdmnscpu2">
                  <h4>
                    <span>₹185</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="fdmnscpu">
                <div className="fdmnscpu1">
                  <h4>
                    <ul>
                      <li>
                        <img src="images/nonveg.png" />
                      </li>
                    </ul>
                    <span>Chawli Beans and Mint Burger</span>
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className="fdmnscpu3"></div>
                <div className="fdmnscpu2">
                  <h4>
                    <span>₹185</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="fdmnscpu">
                <div className="fdmnscpu1">
                  <h4>
                    <ul>
                      <li>
                        <img src="images/veg.png" />
                      </li>
                    </ul>
                    <span>Chawli Beans and Mint Burger</span>
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className="fdmnscpu3"></div>
                <div className="fdmnscpu2">
                  <h4>
                    <span>₹185</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="fdmnscpu">
                <div className="fdmnscpu1">
                  <h4>
                    <ul>
                      <li>
                        <img src="images/redchili.png" />
                      </li>
                    </ul>
                    <span>Chawli Beans and Mint Burger</span>
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className="fdmnscpu3"></div>
                <div className="fdmnscpu2">
                  <h4>
                    <span>₹185</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="fdmnscpu">
                <div className="fdmnscpu1">
                  <h4>
                    <ul>
                      <li>
                        <img src="images/nonveg.png" />
                      </li>
                    </ul>
                    <span>Chawli Beans and Mint Burger</span>
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className="fdmnscpu3"></div>
                <div className="fdmnscpu2">
                  <h4>
                    <span>₹185</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="fdmnscpu">
                <div className="fdmnscpu1">
                  <h4>
                    <ul>
                      <li>
                        <img src="images/veg.png" />
                      </li>
                    </ul>
                    <span>Chawli Beans and Mint Burger</span>
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className="fdmnscpu3"></div>
                <div className="fdmnscpu2">
                  <h4>
                    <span>₹185</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="fdmnscpu">
                <div className="fdmnscpu1">
                  <h4>
                    <ul>
                      <li>
                        <img src="images/redchili.png" />
                      </li>
                    </ul>
                    <span>Chawli Beans and Mint Burger</span>
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className="fdmnscpu3"></div>
                <div className="fdmnscpu2">
                  <h4>
                    <span>₹185</span>
                  </h4>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="fdmnscbt">
                <Link to={selectedMenu === 'drinks' ? '/drinks':'/foods'} className="theme-btn btn-style-one">
                  <span className="btn-title">VIEW MORE</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
     
{/*     
        <div className="fdmnscp">
          <div className="row">
            <div className="col-md-6">
              <div className="fdmnscpu">
                <div className="fdmnscpu1">
                  <h4>
                    <ul>
                      <li>
                        <img src="images/veg.png" />
                      </li>
                    </ul>
                    <span>Chawli Beans and Mint Burger</span>
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className="fdmnscpu3"></div>
                <div className="fdmnscpu2">
                  <h4>
                    <span>₹185</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="fdmnscpu">
                <div className="fdmnscpu1">
                  <h4>
                    <ul>
                      <li>
                        <img src="images/nonveg.png" />
                      </li>
                    </ul>
                    <span>Chawli Beans and Mint Burger</span>
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className="fdmnscpu3"></div>
                <div className="fdmnscpu2">
                  <h4>
                    <span>₹185</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="fdmnscpu">
                <div className="fdmnscpu1">
                  <h4>
                    <ul>
                      <li>
                        <img src="images/nonveg.png" />
                      </li>
                    </ul>
                    <span>Chawli Beans and Mint Burger</span>
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className="fdmnscpu3"></div>
                <div className="fdmnscpu2">
                  <h4>
                    <span>₹185</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="fdmnscpu">
                <div className="fdmnscpu1">
                  <h4>
                    <ul>
                      <li>
                        <img src="images/veg.png" />
                      </li>
                    </ul>
                    <span>Chawli Beans and Mint Burger</span>
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className="fdmnscpu3"></div>
                <div className="fdmnscpu2">
                  <h4>
                    <span>₹185</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="fdmnscpu">
                <div className="fdmnscpu1">
                  <h4>
                    <ul>
                      <li>
                        <img src="images/redchili.png" />
                      </li>
                    </ul>
                    <span>Chawli Beans and Mint Burger</span>
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className="fdmnscpu3"></div>
                <div className="fdmnscpu2">
                  <h4>
                    <span>₹185</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="fdmnscpu">
                <div className="fdmnscpu1">
                  <h4>
                    <ul>
                      <li>
                        <img src="images/nonveg.png" />
                      </li>
                    </ul>
                    <span>Chawli Beans and Mint Burger</span>
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className="fdmnscpu3"></div>
                <div className="fdmnscpu2">
                  <h4>
                    <span>₹185</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="fdmnscpu">
                <div className="fdmnscpu1">
                  <h4>
                    <ul>
                      <li>
                        <img src="images/veg.png" />
                      </li>
                    </ul>
                    <span>Chawli Beans and Mint Burger</span>
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className="fdmnscpu3"></div>
                <div className="fdmnscpu2">
                  <h4>
                    <span>₹185</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="fdmnscpu">
                <div className="fdmnscpu1">
                  <h4>
                    <ul>
                      <li>
                        <img src="images/redchili.png" />
                      </li>
                    </ul>
                    <span>Chawli Beans and Mint Burger</span>
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className="fdmnscpu3"></div>
                <div className="fdmnscpu2">
                  <h4>
                    <span>₹185</span>
                  </h4>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="fdmnscbt">
                <a href="foods.php" className="theme-btn btn-style-one">
                  <span className="btn-title">VIEW MORE</span>
                </a>
              </div>
            </div>
          </div>
        </div>
     */}

      {/* <div id="menu3" className="tab-pane fade">
        <div className="fdmnscp">
          <div className="row">
            <div className="col-md-6">
              <div className="fdmnscpu">
                <div className="fdmnscpu1">
                  <h4>
                    <ul>
                      <li>
                        <img src="images/veg.png" />
                      </li>
                    </ul>
                    <span>Chawli Beans and Mint Burger</span>
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className="fdmnscpu3"></div>
                <div className="fdmnscpu2">
                  <h4>
                    <span>₹185</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="fdmnscpu">
                <div className="fdmnscpu1">
                  <h4>
                    <ul>
                      <li>
                        <img src="images/veg.png" />
                      </li>
                    </ul>
                    <span>Chawli Beans and Mint Burger</span>
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className="fdmnscpu3"></div>
                <div className="fdmnscpu2">
                  <h4>
                    <span>₹185</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="fdmnscpu">
                <div className="fdmnscpu1">
                  <h4>
                    <ul>
                      <li>
                        <img src="images/veg.png" />
                      </li>
                    </ul>
                    <span>Chawli Beans and Mint Burger</span>
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className="fdmnscpu3"></div>
                <div className="fdmnscpu2">
                  <h4>
                    <span>₹185</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="fdmnscpu">
                <div className="fdmnscpu1">
                  <h4>
                    <ul>
                      <li>
                        <img src="images/veg.png" />
                      </li>
                    </ul>
                    <span>Chawli Beans and Mint Burger</span>
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className="fdmnscpu3"></div>
                <div className="fdmnscpu2">
                  <h4>
                    <span>₹185</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="fdmnscpu">
                <div className="fdmnscpu1">
                  <h4>
                    <ul>
                      <li>
                        <img src="images/veg.png" />
                      </li>
                    </ul>
                    <span>Chawli Beans and Mint Burger</span>
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className="fdmnscpu3"></div>
                <div className="fdmnscpu2">
                  <h4>
                    <span>₹185</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="fdmnscpu">
                <div className="fdmnscpu1">
                  <h4>
                    <ul>
                      <li>
                        <img src="images/veg.png" />
                      </li>
                    </ul>
                    <span>Chawli Beans and Mint Burger</span>
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className="fdmnscpu3"></div>
                <div className="fdmnscpu2">
                  <h4>
                    <span>₹185</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="fdmnscpu">
                <div className="fdmnscpu1">
                  <h4>
                    <ul>
                      <li>
                        <img src="images/veg.png" />
                      </li>
                    </ul>
                    <span>Chawli Beans and Mint Burger</span>
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className="fdmnscpu3"></div>
                <div className="fdmnscpu2">
                  <h4>
                    <span>₹185</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="fdmnscpu">
                <div className="fdmnscpu1">
                  <h4>
                    <ul>
                      <li>
                        <img src="images/veg.png" />
                      </li>
                    </ul>
                    <span>Chawli Beans and Mint Burger</span>
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className="fdmnscpu3"></div>
                <div className="fdmnscpu2">
                  <h4>
                    <span>₹185</span>
                  </h4>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="fdmnscbt">
                <a href="foods.php" className="theme-btn btn-style-one">
                  <span className="btn-title">VIEW MORE</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="menu4" className="tab-pane fade">
        <div className="fdmnscp fdmnscpu1dlf">
          <div className="row">
            <div className="col-md-6">
              <div className="fdmnscpu">
                <div className="fdmnscpu1">
                  <h4>
                    <span>Chawli Beans and Mint Burger</span>
                    <span className="fdmnscpu1dlfm">30ML</span>
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className="fdmnscpu3"></div>
                <div className="fdmnscpu2">
                  <h4>
                    <span>₹185</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="fdmnscpu">
                <div className="fdmnscpu1">
                  <h4>
                    <span>Chawli Beans and Mint Burger</span>
                    <span className="fdmnscpu1dlfm">30ML</span>
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className="fdmnscpu3"></div>
                <div className="fdmnscpu2">
                  <h4>
                    <span>₹185</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="fdmnscpu">
                <div className="fdmnscpu1">
                  <h4>
                    <span>Chawli Beans and Mint Burger</span>
                    <span className="fdmnscpu1dlfm">30ML</span>
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className="fdmnscpu3"></div>
                <div className="fdmnscpu2">
                  <h4>
                    <span>₹185</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="fdmnscpu">
                <div className="fdmnscpu1">
                  <h4>
                    <span>Chawli Beans and Mint Burger</span>
                    <span className="fdmnscpu1dlfm">30ML</span>
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className="fdmnscpu3"></div>
                <div className="fdmnscpu2">
                  <h4>
                    <span>₹185</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="fdmnscpu">
                <div className="fdmnscpu1">
                  <h4>
                    <span>Chawli Beans and Mint Burger</span>
                    <span className="fdmnscpu1dlfm">30ML</span>
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className="fdmnscpu3"></div>
                <div className="fdmnscpu2">
                  <h4>
                    <span>₹185</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="fdmnscpu">
                <div className="fdmnscpu1">
                  <h4>
                    <span>Chawli Beans and Mint Burger</span>
                    <span className="fdmnscpu1dlfm">30ML</span>
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className="fdmnscpu3"></div>
                <div className="fdmnscpu2">
                  <h4>
                    <span>₹185</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="fdmnscpu">
                <div className="fdmnscpu1">
                  <h4>
                    <span>Chawli Beans and Mint Burger</span>
                    <span className="fdmnscpu1dlfm">30ML</span>
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className="fdmnscpu3"></div>
                <div className="fdmnscpu2">
                  <h4>
                    <span>₹185</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="fdmnscpu">
                <div className="fdmnscpu1">
                  <h4>
                    <span>Chawli Beans and Mint Burger</span>
                    <span className="fdmnscpu1dlfm">30ML</span>
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className="fdmnscpu3"></div>
                <div className="fdmnscpu2">
                  <h4>
                    <span>₹185</span>
                  </h4>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="fdmnscbt">
                <a href="drinks.php" className="theme-btn btn-style-one">
                  <span className="btn-title">VIEW MORE</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default OurMenuContent;
