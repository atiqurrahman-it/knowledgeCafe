import React from "react";
import "./BookmarkedShow.css";
import Bookmarked from "../Bookmarked/Bookmarked";
const BookmarkedShow = (props) => {
  const bookmarks = props.addedBookmarkData;
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Bookmarked Blogs: {bookmarks.length}{" "}
      </h1>
      {
        bookmarks.map((bookmark)=><Bookmarked name={bookmark.title}></Bookmarked>)
      }
      
    </div>
  );
};

export default BookmarkedShow;