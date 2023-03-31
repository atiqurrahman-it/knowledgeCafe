import React from "react";
import "./BookmarkedShow.css";
const BookmarkedShow = (props) => {
  const bookmarks = props.addedBookmarkData;
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Bookmarked Blogs: {bookmarks.length}{" "}
      </h1>
      {
        bookmarks.map((bookmark)=>console.log(bookmark))
      }
      <h3> Book Mark</h3>
    </div>
  );
};

export default BookmarkedShow;
