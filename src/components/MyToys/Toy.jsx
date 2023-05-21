import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Toy = ({ toy, handleDelete }) => {
    const { name, pictureURL, price, quantity, rating, sellerName, subcategory, _id, description
    } = toy || {};
    
    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded-xl w-28 h-28">
                            {pictureURL && <img src={pictureURL} />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">Rating: {rating}</div>
                    </div>
                </div>
            </td>
            <td>
                {sellerName}
            </td>
            <td>$ {price}</td>
            <td>{quantity}</td>
            <td><label htmlFor="my-modal-3" className="btn btn-secondary text-white">Update</label></td>
        </tr>
    );
};

export default Toy;