import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const SingleToy = () => {
    const toy = useLoaderData();
    useTitle('Details')
    const { name, pictureURL, price, quantity, rating, sellerName, email, subcategory, _id, description
    } = toy || {};
    return (
        <div className='my-10'>
            <div className="card w-9/12 mx-auto h-[500px] shadow-lg image-full">
                <figure><img className='h-full' src={pictureURL} alt="Picture" /></figure>
                <div className="card-body">
                    <h2 className="text-4xl font-bold py-5 text-white">{name}</h2>
                    <div className='space-y-3 text-white'>
                        <p>Seller Name: {sellerName}</p>
                        {
                            email ? <p>Seller Email: {email}</p> : ''
                        }
                        <p>Price: {price}</p>
                        <p>Available Quantity: {quantity}</p>
                        <p className='flex items-center gap-2'>Rating: {rating} <span className='text-yellow-500'><FaStar/></span> </p>
                        <p>Details: {description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;