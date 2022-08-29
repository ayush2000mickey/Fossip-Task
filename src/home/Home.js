import React from "react";
import RestaurantHeader from "./components/RestaurantHeader";
import CategoryGrid from "./components/CategoryGrid";
import RatingComponent from "./components/RatingComponent";

import "./styles/Home.css";

const home = () => {
  return (
    <div className="home">
      <RestaurantHeader />
      <CategoryGrid />
      <RatingComponent />
    </div>
  );
};

export default home;
