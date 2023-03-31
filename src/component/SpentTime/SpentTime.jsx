import React from "react";
import "./SpentTime .css";
const SpentTime = (props) => {
  return (
    <div className="SpendTime">
      <h1>spent time on read :  {props.spendTime}</h1>
    </div>
  );
};

export default SpentTime;
