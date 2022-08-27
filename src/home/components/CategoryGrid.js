import React from "react";
import OrderDetails from "./OrderDetails";
import OrderStatus from "./OrderStatus";

import "../styles/CategoryGrid.css";

const CategoryGrid = () => {
  return (
    <div className="categoryGrid">
      <OrderStatus />
      <OrderDetails />
      <button className="needHelpBtn">Need Help ?</button>
    </div>
  );
};

export default CategoryGrid;
