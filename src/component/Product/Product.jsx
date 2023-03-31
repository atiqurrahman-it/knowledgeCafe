import React from "react";
import "./Product.css";

// font awesome 
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Product = (props) => {
  const notify = () => toast("Wow so easy!");

  const {
    title,
    cover_image,
    author_name,
    publish_date,
    author_image,
    read_time,
  } = props;
  
  return (
    <>
      <div className="card card-compact w-full bg-base-100 mb-10">
        <div className="w-full">
          <figure>
            <img src={cover_image} alt="Shoes" />
          </figure>
        </div>
        <div className="card-body">
          <div className="flex justify-between">
            <div className="flex">
              <div className="w-10 h-10 rounded-full author_img me-3">
                <img src={author_image} alt="" />
              </div>
              <div>
                <h1>{author_name}</h1>
                <p> {publish_date}</p>
              </div>
            </div>

            <div>
              <p>
                {read_time} min read <i onClick={()=>props.handelReadBook(props)}> <FontAwesomeIcon icon={faBookmark} fade /> </i>
              </p>
            </div>
          </div>

          <h2 className="card-title">{title}!</h2>
          <div className="card-actions justify-start">
            <button onClick={()=>props.setHandelTime(read_time)}> Mark as read</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
