import React from "react";

const FoodFilter = () => {
  return (
    <div class="fodflt">
      <div class="auto-container">
        <div class="fodflt1">
          <ul>
            <li>
              <label class="conta">
                Asian
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </li>
            <li>
              <label class="conta">
                Continental
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </li>
            <li>
              <label class="conta">
                Chinese
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </li>
            <li>
              <label class="conta">
                North Indian
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </li>
            <li>
              <label class="conta">
                Bengali
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </li>
          </ul>
        </div>

        <div class="fodflt2">
          <div class="fodflt2u">
            <h3>Filter</h3>
            <button type="button">Clear</button>
          </div>
          <ul>
            <li> Item :</li>
            <li>
              <label class="conta">
                <img src="images/veg.png" /> Veg
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </li>
            <li>
              <label class="conta">
                <img src="images/nonveg.png" /> Nonveg
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </li>
          </ul>

          <ul>
            <li> Dishes :</li>
            <li>
              <label class="conta">
                {" "}
                Soup
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </li>
            <li>
              <label class="conta">
                {" "}
                Main Course
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </li>

            <li>
              <label class="conta">
                {" "}
                Dessert
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </li>
          </ul>
        </div>

        <div class="fodflt3">
          <form>
            <input type="text" placeholder="Search Foods " />
            <button>
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FoodFilter;
