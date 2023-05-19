import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Toy from './Toy';
import useTitle from '../../hooks/useTitle';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState("");
    useTitle('All Toys')
    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then((res) => res.json())
            .then((data) => {
                setToys(data);
            });
    }, []);

    const handleSearch = () => {
        fetch(`http://localhost:5000/searchtoy/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setToys(data)
            });
    };

    return (
        <div>
            <h2 className="text-4xl font-bold text-center py-5">Total Toy: {toys.length}</h2>
            <div className=" py-5 text-center">
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                    placeholder='Enter Name'
                    className="p-2 rounded-md shadow-xl"
                />
                <button className='btn btn-secondary text-white btn-sm ms-2' onClick={handleSearch}>Search</button>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
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
                            toys.map(toy => <Toy key={toy._id} toy={toy}></Toy>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllToys;