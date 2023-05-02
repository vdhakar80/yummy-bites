import React from "react";
import style from "./../../assets/cssModules/orderType.module.css";
import orderBg from "./../../assets/images/orderBg.jpg";

function OrderType() {
  return (
    <>
      <div
        className={style.orderTypeContainer}
        style={{
          background: `url(${orderBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          //   width: "100%",
          //   height: "100%",
        }}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default OrderType;
