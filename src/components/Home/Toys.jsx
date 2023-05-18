import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Toys = ({ toy }) => {

    const { name, pictureURL, price, quantity, rating, sellerName, subcategory, _id, description
    } = toy || {};

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={pictureURL} alt="Shoes" className="rounded-xl h-72 w-9/12" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Price: {price}</p>
                <p className='flex items-center gap-2'>Rating: {rating} <span className='text-yellow-500'><FaStar/></span> </p>
                <div className="card-actions">
                <Link to={`/toy/${_id}`}><button className="btn btn-secondary text-white">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Toys;