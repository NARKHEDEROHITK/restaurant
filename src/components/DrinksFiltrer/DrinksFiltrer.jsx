import React from "react";
import SectionWrapper from "../CommonComp/SectionWrapper/SectionWrapper";

const DrinksFiltrer = () => {
  return (
    <div className="fodflt">
      <div className="auto-container">
        <div className="fodflt2">
          <div className="fodflt2u">
            <h3>Filter</h3>
            <button type="button">Clear</button>
          </div>

          <ul>
            <li> Item :</li>
            <li>
              <label className="conta">
                Spirits
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="conta">
                Cocktail
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </li>

            <li>
              <label className="conta">
                Mocktail
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="conta">
                Areated Drinks
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="conta">
                Beer
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </li>
          </ul>
        </div>

        <div className="fodflt3">
          <form>
            <input type="text" placeholder="Search Drinks" />
            <button>
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DrinksFiltrer;
