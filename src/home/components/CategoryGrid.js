import React from "react";
import OrderDetails from "./OrderDetails";
import OrderStatus from "./OrderStatus";

import "../styles/CategoryGrid.css";

const CategoryGrid = () => {
  return (
    <div className="categoryGrid">
      <OrderStatus />
      <OrderDetails />
    </div>
  );
};

export default CategoryGrid;
