import React, { useEffect, useState } from "react";
import Bookmarked from "../Bookmarked/Bookmarked";
import "./BookmarkedShow.css";
const BookmarkedShow = ({addedBookmarkData}) => {
  // way one 
  // const bookMarkFromLocalStorage = JSON.parse(localStorage.getItem("bookMark"));

  // way two
  const [BookMarksLocal,setBookMarkLocal]=useState(addedBookmarkData)
  useEffect(()=>{
    const bookMarkFromLocalStorage = JSON.parse(localStorage.getItem("bookMark"));
    setBookMarkLocal(bookMarkFromLocalStorage||[])

  },[addedBookmarkData])


  return (
    <div className="mb-5">
      <h1 className="text-3xl font-bold">
        Bookmarked Blogs: {BookMarksLocal?.length||0}
      </h1>
      {BookMarksLocal?.map((bookmark) => (
        <Bookmarked name={bookmark.title} key={bookmark.id}></Bookmarked>
      ))}
    </div>
  );
};

export default BookmarkedShow;
