import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import AboutUs from './AboutUs';

const Home = () => {
    return (
        <div className='py-10'>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;