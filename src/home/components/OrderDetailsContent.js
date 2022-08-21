import React from "react";
import OrderDetailsContentItem from "./OrderDetailsContentItem";
import OrderItems from "../repository/OrderItems";

import "../styles/OrderDetailsContent.css";

const OrderDetailsContent = () => {
  let subTotal = 0;

  OrderItems.forEach((item) => (subTotal += item.dishPrice));

  subTotal = subTotal.toFixed(1);

  let total = subTotal;

  return (
    <div className="orderDetailsContent">
      <div>
        {OrderItems.map((item) => {
          return <OrderDetailsContentItem key={item.id} item={item} />;
        })}
      </div>
      <div className="totalSection">
        <div className="subtotal">
          <div>SubTotal</div>
          <div>{subTotal}</div>
        </div>
        <div className="total">
          <div>Total</div>
          <div>{total}</div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsContent;
