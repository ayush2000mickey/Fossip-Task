import React from "react";

import "../styles/OrderDetailsContentItem.css";

const OrderDetailsContentItem = ({ item }) => {
  return (
    <div className="orderItem">
      <div className="orderImage">
        <img src={item.dishImg} alt={item.dishName} />
      </div>
      <div className="orderItemInfo">
        <div className="orderItemDesc">
          <div className="dishName">{item.dishName}</div>
          <div className="dishContents">{item.dishContents}</div>
        </div>
        <div className="orderItemQuantity">Quantity = {item.dishQuantity}</div>
      </div>
      <div className="orderItemPrice">₹{item.dishPrice}</div>
    </div>
  );
};

export default OrderDetailsContentItem;
