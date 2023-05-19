import React, { useEffect, useState } from 'react';
import Toys from './Toys';

const ShopCategory = () => {
    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState("All");

    useEffect(() => {
        fetch(`https://toy-store-server-rho.vercel.app/toys/${activeTab}`)
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
            <p className='text-2xl font-bold pb-5'>Toys in : <span className='text-secondary'>{activeTab}</span> sub-categories </p>
                <div className=" w-fit mx-auto">
                    <div className="tabs d-flex justify-between gap-1 mb-5">
                        <div
                            onClick={() => handleTabClick("Avengers")}
                            className={`px-4 py-2 Avengers ${activeTab == "Avengers" ? " bg-secondary rounded-md text-white" : "bg-base-200 rounded-md"
                                }`}
                        >
                            Avengers
                        </div>
                        <div
                            onClick={() => handleTabClick("X-Men")}
                            className={`px-4 py-2 X-Men ${activeTab == "X-Men" ? " bg-secondary rounded-md text-white" : "bg-base-200 rounded-md"
                                }`}
                        >
                            X-Men
                        </div>
                        <div
                            onClick={() => handleTabClick("GhostRider")}
                            className={`px-4 py-2 GhostRider ${activeTab == "GhostRider" ? " bg-secondary rounded-md text-white" : "bg-base-200 rounded-md"
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