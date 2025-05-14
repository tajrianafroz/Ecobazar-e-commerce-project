import React from 'react';
import Banner from './../components/banner/Banner';
import FeaturedProduct from './../components/features/FeaturedProduct';
import CustomerServiceBox from './../components/utils/CustomerServiceBox';

const Homepage = () => {
    return (
        <>
            <Banner />
            <CustomerServiceBox />
            <FeaturedProduct />
        </>
    );
};

export default Homepage;