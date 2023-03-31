import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import SpentTime from "../SpentTime/SpentTime";
import "./ShowData.css";
import BookmarkedShow from "../BookmarkedShow/BookmarkedShow";
const ShowData = () => {
  const [products, setProducts] = useState([]);

  const [spendTime, setSpendTime] = useState(0);

  const [addedBookmarkData, setAddedBookmarkData] = useState([]);

  const HandelReadTime = (time) => {
    setSpendTime(spendTime + time);
  };

  const handelReadBook = (singleData) => {
    const exists = addedBookmarkData.find((pd) => pd.id === singleData.id);
    if (exists) {
      console.log("already exit");
    } else {
      setAddedBookmarkData([...addedBookmarkData, singleData]);
    }
  };

 
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
            handelReadBook={handelReadBook}
          ></Product>
        ))}
      </div>
      <div className="">
        <div className="sticky top-0 ">
          <SpentTime spendTime={spendTime}></SpentTime>
          <div className="ms-10 mt-10">
           
            <BookmarkedShow addedBookmarkData={addedBookmarkData}> </BookmarkedShow>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowData;
