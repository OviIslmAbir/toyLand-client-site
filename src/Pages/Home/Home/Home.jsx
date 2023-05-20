import React from 'react';
import Banner from '../Banner/Banner';
import ToyCategory from '../ToyCategory/ToyCategory';
import Gallery from '../Gallery/Gallery';
import useTitle from '../../../Hooks/useTitle';
import ShopByCategory from '../ShopByCatagory/ShopByCategory';
import Customer from '../Customer/Customer';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <div data-aos="fade-up">
                <ToyCategory></ToyCategory>
            </div>
            <div data-aos="fade-right">
              <Gallery></Gallery>
            </div>
            <div data-aos="fade-down">
              <ShopByCategory></ShopByCategory>
            </div>
            <Customer></Customer>

        </div>
    );
};

export default Home;