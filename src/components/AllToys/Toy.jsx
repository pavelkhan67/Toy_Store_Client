import React from 'react';
import { Link } from 'react-router-dom';

const Toy = ({ toy }) => {
    
    const { name, pictureURL, price, quantity, rating, sellerName, subcategory, _id, description
    } = toy || {};
    return (
        <tr>
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
            <td>{subcategory}</td>
            <td>$ {price}</td>
            <td>{quantity}</td>
            <td><Link to={`/toy/${_id}`}><button className="btn btn-secondary text-white">View Details</button></Link></td>
        </tr>
    );
};

export default Toy;