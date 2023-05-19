import React, { useEffect } from 'react';
import img from "../../assets/img/about.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
    
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="hero min-h-screen w-full bg-base-100">
            <div className="hero-content justify-between flex-col lg:flex-row px-10 lg:px-0">
                <img src={img} className="w-full lg:max-w-lg rounded-lg shadow-2xl" />
                <div className='lg:w-1/2 space-y-5 ' data-aos="fade-down" data-aos-duration="1000" >
                    <h1 className="text-5xl font-bold">Toy Mania</h1>
                    <p>Welcome to Toy Mania, We are The Largest Online Portal for kids toy. We have more than 3 Hundred+ Kids toys from American brands like Charan Toys, Toy Biz, ToyBiz etc.</p>
                    <p>
                        We’re committed to giving you the plain best with attention to the most astounding quality, unwavering quality, client administration, and uniqueness.
                    </p>
                    <button className="btn btn-secondary text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;