import React from 'react';
import img1 from "../../assets/img/img2.jpg";
import img2 from "../../assets/img/img1.webp";
import img3 from "../../assets/img/img3.jpg";

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-lg" />
                <div className=" absolute rounded-lg h-full flex items-center gap-4 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 w-9/12 lg:w-1/2 pl-16'>
                        <h2 className='text-5xl font-bold'>Everything Under The Sun For Kids Fun.</h2>
                        <p>There Are Many Variants Of Toys Available, We Carry The Largest Selection Of Toys In Town!</p>
                        <div className='flex gap-5 '>
                            <button className='btn btn-secondary text-white'>See More</button>
                            <button className='btn btn-outline text-white'>Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle btn-secondary">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-lg" />
                <div className="absolute rounded-lg h-full flex items-center gap-4 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 w-9/12 lg:w-1/2 pl-16'>
                        <h2 className='text-5xl font-bold'>Everything Under The Sun For Kids Fun.</h2>
                        <p>There Are Many Variants Of Toys Available, We Carry The Largest Selection Of Toys In Town!</p>
                        <div className='flex gap-5'>
                            <button className='btn btn-secondary text-white'>See More</button>
                            <button className='btn btn-outline text-white'>Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle btn-secondary">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-lg" />
                <div className="absolute rounded-lg h-full flex items-center gap-4 left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 w-9/12 lg:w-1/2 pl-16'>
                        <h2 className='text-5xl font-bold'>Everything Under The Sun For Kids Fun.</h2>
                        <p>There Are Many Variants Of Toys Available, We Carry The Largest Selection Of Toys In Town!</p>
                        <div className='flex gap-5'>
                            <button className='btn btn-secondary text-white'>See More</button>
                            <button className='btn btn-outline text-white'>Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle btn-secondary">❯</a>
                </div>
            </div>            
        </div>
    );
};

export default Banner;