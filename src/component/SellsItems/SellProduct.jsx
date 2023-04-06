import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SellProduct = ({id,brand,category,price,thumbnail}) => {

    const navigate = useNavigate();
    const handelNavigate=()=>{
        navigate(`/sellProducts/${id}`)
    }
    
    return (
        <div className="card card-compact w-full bg-base-100 ">
        <figure className='h-64'>
            <img src={thumbnail} alt="Shoes" />
            </figure>
        <div className="card-body">
            <div className='flex md:justify-between justify-around'>
                <h2 className="text-2xl font-bold">{brand}</h2>
                <h2 className="text-2xl font-bold">${price}</h2>
            </div>
            <p>category: {category}</p>
            <div className="justify-center">
            {/* <Link to={`/sellProducts/${id}`}> Show Details</Link> */}
            <Link to={`/sellProducts/${id}`}>
                 <button className="btn btn-primary w-48">Show Details</button>
            </Link>
            {/* way three */}
            {/* <button onClick={handelNavigate} className="btn btn-primary w-48">Show Details</button> */}
            </div>
        </div>
     </div>
    );
};

export default SellProduct;