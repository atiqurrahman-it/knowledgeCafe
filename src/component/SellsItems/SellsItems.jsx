import React from "react";
import { useLoaderData } from "react-router-dom";
import SellProduct from "./SellProduct";


const SellsItems = () => {
  const {products} = useLoaderData();
  console.log(products);
  return (
    <div className="text-center my-5">
        <h1 className="text-3xl font-bold">Available products : {products.length}  </h1>
      <div className=" my-7 mx-5 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4  gap-7">
        {
            products.map(product=> <SellProduct {...product} key={product.id}> </SellProduct>)
        }
       
      </div>
    </div>
  );
};

export default SellsItems;
