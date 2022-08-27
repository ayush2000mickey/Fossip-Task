import React from "react";
import OrderDetailsContentItem from "./OrderDetailsContentItem";
import UserOrderDetails from "../repository/UserOrderDetails";

import "../styles/OrderDetailsContent.css";

const OrderDetailsContent = () => {
  let subTotal = 0;

  UserOrderDetails.orderedItems.forEach(
    (item) => (subTotal += item.dishPrice * item.dishQuantity)
  );

  subTotal = subTotal.toFixed(1);

  let total = subTotal;

  return (
    <div className="orderDetailsContent">
      <div>
        {UserOrderDetails.orderedItems.map((item) => {
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
