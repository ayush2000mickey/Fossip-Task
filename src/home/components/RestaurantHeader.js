import React from "react";
import restaurantLogo from "../../Images/restaurant logo.JPG";

import phoneIcon from "../../Images/phone-call.png";
import mapIcon from "../../Images/icons8-google-maps-48.png";

import "../styles/RestaurantHeader.css";

const RestaurantHeader = () => {
  return (
    <header className="header">
      <div className="headerTop">
        <div className="headerLogo">
          <img src={restaurantLogo} alt="logo" />
        </div>
        <div className="headerInfo">
          <div className="restaurantName">Shandaar Momo's</div>
          <div className="restaurantTiming">11:00 AM - 0:00 AM</div>
          <div className="restaurantAddress">15/25, U-BLOCK, DLF PHASE-3</div>
        </div>
        <div className="headerButtons">
          <div className="headerPhoneLogo">
            <img src={phoneIcon} alt="phone icon" />
          </div>
          <div className="headerMapLogo">
            <img src={mapIcon} alt="map icon" />
          </div>
        </div>
      </div>
      <div className="headerBottom">
        Note : Please refresh the page to view updated order status
      </div>
    </header>
  );
};

export default RestaurantHeader;
