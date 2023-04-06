import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleProduct = () => {
    const product=useLoaderData()
    const {title,description,thumbnail,price}=useLoaderData()
    console.log(product)
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={thumbnail} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold">{title}</h1>
                <p className="py-6">{description}</p>
                 <h5 className='text-2xl font-bold mb-1'>Price : ${price}</h5>
                <button className="btn btn-primary">Get Started</button>
                <button className="btn btn-primary ms-2">Back</button>
                </div>
            </div>
      </div>  
    );
};

export default SingleProduct;