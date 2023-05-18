import React from 'react';
import Banner from '../Banner/Banner';
import ToyCategory from '../ToyCategory/ToyCategory';
import Gallery from '../Gallery/Gallery';
import useTitle from '../../../Hooks/useTitle';
import ShopByCategory from '../ShopByCatagory/ShopByCategory';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <ToyCategory></ToyCategory>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;