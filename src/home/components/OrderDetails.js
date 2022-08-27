import React from "react";
import "../styles/OrderDetails.css";
import OrderDetailsContent from "./OrderDetailsContent";

const OrderDetails = () => {
  return (
    <div className="orderDetails">
      <div className="orderDetailsHeader">
        <div className="orderDetailsHeaderLeft">Your Order Details:</div>
      </div>
      <OrderDetailsContent />
    </div>
  );
};

export default OrderDetails;
