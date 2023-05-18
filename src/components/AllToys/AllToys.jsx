import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Toy from './Toy';

const AllToys = () => {
    const alltoys = useLoaderData();
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Picture & Name</th>
                            <th>Seller Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            alltoys.map(toy => <Toy key={toy._id} toy ={toy}></Toy>)
                        }
                            
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllToys;