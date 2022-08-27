import React from "react";

import "../styles/OrderDetailsContentItem.css";

const OrderDetailsContentItem = ({ item }) => {
  const dishAmount = item.dishPrice * item.dishQuantity;

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
        <div className="orderItemQuantity">
          {item.dishQuantity} x ₹{item.dishPrice}
        </div>
      </div>
      <div className="orderItemPrice">₹{dishAmount}</div>
    </div>
  );
};

export default OrderDetailsContentItem;
