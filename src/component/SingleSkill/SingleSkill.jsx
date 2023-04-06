import React from "react";

const SingleSkill = ({title,image}) => {
  return (
    <div className="card w-full bg-base-100 border border-sky-500 my-4 text-center">
      <figure className="h-64">
        <img src={image} alt="Shoes"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default SingleSkill;
