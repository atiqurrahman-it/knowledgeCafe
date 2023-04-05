import React, { useEffect, useState } from "react";
import "./SpentTime .css";
const SpentTime = ({spendTime}) => {
  const [time,setTime]=useState(spendTime)
  useEffect(()=>{
    const preSpendReadTimeFromLocalStorage=localStorage.getItem('spendTime')
    // 
    setTime(preSpendReadTimeFromLocalStorage)
  },[spendTime])
  return (
    <div className="SpendTime">
      <h1>spent time on read :  {time||0}</h1>
    </div>
  );
};

export default SpentTime;
