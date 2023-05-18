import React from 'react';
import Banner from '../Banner/Banner';
import ToyCategory from '../ToyCategory/ToyCategory';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ToyCategory></ToyCategory>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;