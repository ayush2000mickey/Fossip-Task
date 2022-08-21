import React from "react";
import RestaurantHeader from "./components/RestaurantHeader";
import CategoryGrid from "./components/CategoryGrid";

import "./styles/Home.css";

const home = () => {
  return (
    <div className="home">
      <RestaurantHeader />
      <CategoryGrid />
    </div>
  );
};

export default home;
