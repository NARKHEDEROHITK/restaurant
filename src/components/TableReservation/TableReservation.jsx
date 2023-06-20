import React from "react";

const TableReservation = () => {

  

  return (
    <div className="auto-container">
      <div className="sechdttl wow fadeInUp">
        <h4>Reservations</h4>
        <h2>
          <span>
            BOOK A TABLE <div className="ttlhdb1"></div>
            <div className="ttlhdb2"></div>
          </span>
        </h2>
      </div>
      <form className="bktfmmn wow fadeInUp">
        <div className="row">
          <div className=" col-lg-3 col-md-3 col-sm-6">
            <div className="bktbfm">
              <select>
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5">5 People</option>
                <option value="6">6 People</option>
                <option value="7">7 People</option>
                <option value="8">8 People</option>
                <option value="9">9 People</option>
                <option value="10">10 People</option>
              </select>
            </div>
          </div>

          <div className=" col-lg-3 col-md-3 col-sm-6">
            <div className="bktbfm">
              <input
                type="text"
                className="datepicker_input form-control border-2"
                id="datepicker1"
                required
                placeholder="DD/MM/YYYY"
              />
            </div>
          </div>
          <div className=" col-lg-3 col-md-3 col-sm-6">
            <div className="bktbfm">
              <select>
                <option value="16:30">04:30 pm</option>
                <option value="17:00">05:00 pm</option>
                <option value="17:30">05:30 pm</option>
                <option value="18:00">06:00 pm</option>
                <option value="18:30">06:30 pm</option>
                <option value="19:00">07:00 pm</option>
                <option value="19:30">07:30 pm</option>
                <option value="20:00">08:00 pm</option>
                <option value="20:30">08:30 pm</option>
                <option value="21:00">09:00 pm</option>
                <option value="21:30">09:30 pm</option>
                <option value="22:00">10:00 pm</option>
                <option value="22:30">10:30 pm</option>
                <option value="23:00">11:00 pm</option>
                <option value="23:30">11:30 pm</option>
                <option value="24:00">12:00 pm</option>
              </select>
            </div>
          </div>
          <div className=" col-lg-3 col-md-3 col-sm-6">
            <div className="bktbfm">
              <button className="theme-btn btn-style-one w100">
                <span className="btn-title">BOOK NOW</span>
              </button>
            </div>
          </div>
          <div className="col-md-12 bkyfmp">
            <p>*Powered by OpenTable</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TableReservation;
