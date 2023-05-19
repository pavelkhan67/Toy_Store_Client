import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import AboutUs from './AboutUs';
import ShopCategory from './ShopCategory';
import RequestAToy from './RequestAToy';

const Home = () => {
    return (
        <div className='py-10'>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Gallery></Gallery>
            <ShopCategory></ShopCategory>
            <RequestAToy></RequestAToy>
        </div>
    );
};

export default Home;