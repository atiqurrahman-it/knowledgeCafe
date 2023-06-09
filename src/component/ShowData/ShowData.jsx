import React, { useEffect, useState } from "react";
import BookmarkedShow from "../BookmarkedShow/BookmarkedShow";
import Product from "../Product/Product";
import SpentTime from "../SpentTime/SpentTime";
import "./ShowData.css";

// react toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShowData = () => {
  const [products, setProducts] = useState([]);

  const [spendTime, setSpendTime] = useState(0);

  const [addedBookmarkData, setAddedBookmarkData] = useState([]);

  const HandelReadTime = (time) => {
    const prevSpendReadTime = JSON.parse(localStorage.getItem("spendTime"));
    if (prevSpendReadTime) {
      const totalSpendTime = prevSpendReadTime + time;
      localStorage.setItem("spendTime", totalSpendTime);

      setSpendTime(totalSpendTime);
    } else {
      localStorage.setItem("spendTime", time);
      setSpendTime(time);
    }
    // setSpendTime(spendTime + time);
  };

  const notify = () => toast("this item already added!");

  // const handelReadBook = (singleData) => {

  //   const exists = addedBookmarkData.find((pd) => pd.id === singleData.id);
  //   if (exists) {
  //     // this item already added
  //     notify();
  //   } else {
  //     setAddedBookmarkData([...addedBookmarkData, singleData]);
  //   }
  // };

  const handelReadBook = (singleData) => {
    const prevBookMark = JSON.parse(localStorage.getItem("bookMark"));

    const exists = prevBookMark?.find((pd) => pd.id === singleData.id);
    if (exists) {
      // this item already added
      notify();
    } else {
      if (prevBookMark) {
        const updateBookMark = JSON.stringify([...prevBookMark, singleData]);
        localStorage.setItem("bookMark", updateBookMark);
        //
        setAddedBookmarkData([...addedBookmarkData, singleData]);
      } else {
        const newBookMark = JSON.stringify([singleData]);
        localStorage.setItem("bookMark", newBookMark);
        //
        setAddedBookmarkData([singleData]);
      }
      // setAddedBookmarkData([...addedBookmarkData, singleData]);
    }
  };

  //--------------------problem -------
  const ClearData = () => {
    setSpendTime(0)
    setAddedBookmarkData([])
  
    localStorage.clear("spendTime");
    localStorage.clear("bookMark");
  };
//----------------------------
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
        <div className="sticky top-5 ">
          <button onClick={ClearData} className="ClearData">
            Clear All Data
          </button>
          <SpentTime spendTime={spendTime}></SpentTime>
          <div className="ms-10 mt-10">
            <ToastContainer />
            <BookmarkedShow
              addedBookmarkData={addedBookmarkData}
            ></BookmarkedShow>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowData;
