import React from "react";
import { BsCheck2 } from "react-icons/bs";
import { IoMdRefresh } from "react-icons/io";

import "../styles/OrderStatus.css";

const OrderStatus = () => {
  return (
    <div className="orderStatus">
      <div className="otpBox">
        OTP: <span>5678</span>
      </div>
      <div className="statusBar">
        <div>
          <div className="round statusIcons received ">
            <BsCheck2 />
          </div>
          <div>Received</div>
        </div>
        <div className="line"></div>
        <div>
          <div className="round statusIcons accepted ">
            <IoMdRefresh />
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
