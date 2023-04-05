import React, { useEffect, useState } from "react";
import "./SpentTime .css";
const SpentTime = ({spendTime}) => {
  // way one -------------------------- 
  // const preSpendReadTimeFromLocalStorage=localStorage.getItem('spendTime')
  // way two --------------------------
  const [time,setTime]=useState(spendTime)
  useEffect(()=>{
    const preSpendReadTimeFromLocalStorage=localStorage.getItem('spendTime')
    // 
    setTime(preSpendReadTimeFromLocalStorage)
  },[spendTime])

  return (
    <div className="SpendTime">
      {/* way one  */}
      {/* <h1>spent time on read :  {preSpendReadTimeFromLocalStorage||0}</h1> */}
      <h1>spent time on read :  {time||0}</h1>
    </div>
  );
};

export default SpentTime;
