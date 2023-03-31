import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import SpentTime from "../SpentTime/SpentTime";
import "./ShowData.css";
const ShowData = () => {
  const [products, setProducts] = useState([]);
  // const [readTime, setReadTime] = useState(0);
  const [spendTime, setSpendTime] = useState(0);

  const HandelReadTime = (time) => {
    setSpendTime(spendTime + time);
  };

  // useEffect(() => {
  //   console.log("click use Effect");
  // }, [readTime]);

  useEffect(() => {
    fetch("blogdata.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="main container mx-auto mt-10">
      <div>
        {products.map((product) => (
          <Product
            {...product}
            key={product.id}
            setHandelTime={HandelReadTime}
          ></Product>
        ))}
      </div>
      <div className="">
        <div className="sticky top-0 ">
          <SpentTime spendTime={spendTime}></SpentTime>
          <h1> List data </h1>
        </div>
      </div>
    </div>
  );
};

export default ShowData;
