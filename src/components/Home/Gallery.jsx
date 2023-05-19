import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Gallery = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content grid lg:grid-cols-3">
                <div className=' px-6 lg:px-0' data-aos="fade-down" data-aos-duration="1000">
                    <h1 className="text-5xl font-bold">Our Photo Gallery</h1>
                    <p className="py-6">Welcome to our Shop, Here you will get all the kids toy that you are looking for. We are the best toy seller in this time, we have all kinds of superhero toys related to action toy. <br /> Here are some sample of our toys, you can also get variety of them. Happy Toys!!</p>
                    <button className="btn btn-secondary text-white">Get Your Toys</button>
                </div>
                <div className='grid col-span-2 grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 ' >
                    <div className="card text-center card-compact w-full bg-base-100 shadow-xl">
                        <figure className="h-60"><img src="https://media.entertainmentearth.com/assets/images/eabf365b88414e8bbbbd3f8ada83d4eflg.jpg" className="h-full lg:h-fit " /></figure>
                        <div className="card-body text-center">
                            <h2 className="text-xl font-bold">Thor Thunder God</h2>
                        </div>
                    </div>
                    <div className="card text-center card-compact w-full bg-base-100 shadow-xl">
                        <figure className="h-60"><img src="https://productimages.coles.com.au/productimages/3/3774253.jpg" className="h-full lg:h-fit" /></figure>
                        <div className="card-body text-center">
                            <h2 className="text-xl font-bold">Wolverine</h2>
                        </div>
                    </div>
                    <div className="card text-center card-compact w-full bg-base-100 shadow-xl">
                        <figure className="h-60"><img src="https://www.upoharbd.com/images/uploads/Toys/Spiderman.jpg" className="h-full lg:h-fit" /></figure>
                        <div className="card-body text-center">
                            <h2 className="text-xl font-bold">Spider Man</h2>
                        </div>
                    </div>
                    <div className="card text-center card-compact w-full bg-base-100 shadow-xl">
                        <figure className="h-60"><img src="https://i5.walmartimages.com/asr/eeca8024-66ad-48cd-86ae-3f1243458543.1b5d582f47657bbb51f1ad890a1045f9.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF" className="h-full lg:h-fit" /></figure>
                        <div className="card-body text-center">
                            <h2 className="text-xl font-bold">Captain America</h2>
                        </div>
                    </div>
                    <div className="card text-center card-compact w-full bg-base-100 shadow-xl">
                        <figure className="h-60"><img src="https://static-01.daraz.com.bd/p/fa397a4e221439143b9d0c91de6ff1ef.jpg" className="h-full lg:h-fit" /></figure>
                        <div className="card-body text-center">
                            <h2 className="text-xl font-bold">Iron Man</h2>
                        </div>
                    </div>
                    <div className="card text-center card-compact w-full bg-base-100 shadow-xl">
                        <figure className="h-60"><img src="https://static-01.daraz.com.bd/p/fd27125c80847f67451e171c335eeff4.jpg" className="h-full lg:h-fit" /></figure>
                        <div className="card-body text-center">
                            <h2 className="text-xl font-bold">Hulk The Destroyer</h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Gallery;