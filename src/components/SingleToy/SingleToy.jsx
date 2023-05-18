import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToy = () => {
    const toy = useLoaderData();
    const { name, pictureURL, price, quantity, rating, sellerName, subcategory, _id, description
    } = toy || {};
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-lg image-full">
                <figure><img src={pictureURL} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;