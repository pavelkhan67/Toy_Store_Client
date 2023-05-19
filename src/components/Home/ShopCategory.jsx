import React, { useEffect, useState } from 'react';
import Toys from './Toys';

const ShopCategory = () => {
    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState("All");

    useEffect(() => {
        fetch(`http://localhost:5000/toys/${activeTab}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [activeTab])

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
      };

    // console.log(toys);
    return (
        <div className='text-center'>
            <h1 className="text-5xl font-bold my-10">Shop By Category</h1>
                <div className=" w-fit mx-auto">
                    <div className="tabs d-flex justify-between gap-1 mb-5">
                        <div
                            onClick={() => handleTabClick("Avengers")}
                            className={`px-4 py-2 Avengers ${activeTab == "Avengers" ? " bg-purple-500 text-white" : "bg-base-200"
                                }`}
                        >
                            Avengers
                        </div>
                        <div
                            onClick={() => handleTabClick("X-Men")}
                            className={`px-4 py-2 X-Men ${activeTab == "X-Men" ? " bg-purple-500 text-white" : "bg-base-200"
                                }`}
                        >
                            X-Men
                        </div>
                        <div
                            onClick={() => handleTabClick("GhostRider")}
                            className={`px-4 py-2 GhostRider ${activeTab == "GhostRider" ? " bg-purple-500 text-white" : "bg-base-200"
                                }`}
                        >
                            Ghost Rider
                        </div>
                    </div>
                </div>
            <div className='grid grid-cols-2 w-full justify-between gap-10'>
                {
                    toys.map(toy => <Toys key={toy._id} toy={toy}></Toys>)
                }
            </div>
        </div>
    );
};

export default ShopCategory;