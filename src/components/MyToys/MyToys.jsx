import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Toy from './Toy';
import { toast } from 'react-toastify';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/mytoys/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setToys(data);
            });
    }, [user]);

    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete?');
        if (proceed) {
            fetch(`http://localhost:5000/mytoys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount === 1) {
                        toast.warning("Successfully deleted one Toys!");
                        const remaining = toys.filter(toy => toy._id !== id);
                        setToys(remaining);
                    }
                })
        }
    }

    return (
        <div>
            <h2 className="text-4xl font-bold text-center pt-5 pb-8">My Toy: {toys.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Picture & Name</th>
                            <th>Seller Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <Toy key={toy._id} toy={toy} handleDelete={handleDelete}></Toy>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyToys;