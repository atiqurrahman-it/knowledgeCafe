import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./ShowData.css";
const ShowData = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("blogdata.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="main container mx-auto mt-10">
      <div>
        {products.map((product) => (
          <Product {...product} key={product.id}></Product>
        ))}
      </div>
      <div>
        <h1> product lis </h1>
      </div>
    </div>
  );
};

export default ShowData;
