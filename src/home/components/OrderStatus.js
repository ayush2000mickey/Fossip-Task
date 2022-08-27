import React from "react";
import { BsCheck2 } from "react-icons/bs";
import { IoMdRefresh } from "react-icons/io";

import UserOrderDetails from "../repository/UserOrderDetails";

import "../styles/OrderStatus.css";

const OrderStatus = () => {
  return (
    <div className="orderStatus">
      <div className="orderInfoBox">
        <button className="orderIdBox">
          OrderID: {UserOrderDetails.userDetails.userOrderId}
        </button>
        <button className="otpBox">
          OTP: <span>5678</span>
        </button>
      </div>

      <div className="statusBar">
        <div>
          <div className="round  received ">
            <BsCheck2 className="statusIcons" />
          </div>
          <div>Received</div>
        </div>
        <div className="line"></div>
        <div>
          <div className="round accepted ">
            <IoMdRefresh className="statusIcons" />
          </div>
          <div>Accepted</div>
        </div>
        <div className="line"></div>
        <div>
          <div className="round"></div>
          <div>Preparing</div>
        </div>
        <div className="line"></div>
        <div>
          <div className="round"></div>
          <div>Ready</div>
        </div>
        <div className="line"></div>
        <div>
          <div className="round"></div>
          <div>Served</div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
