import React from 'react';

import Books from './Books/Books';
import Review from '../Review/Review';
import Footer from './../Footer/Footer'
import Blog from './Blog/Blog';
import Explore from './Explore/Explore';
import SpecialOffer from './SpecialOffer/SpecialOffer';
import Statistics from './Statistics/Statistics';
import FreeRead from './FreeRead/FreeRead'
import Slide from './Slide/Slide';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import Banner from './Banner/Banner';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhyChooseUs></WhyChooseUs>
            <Books></Books>
            <Slide></Slide>
            <Review></Review>
            <Blog></Blog>
            <Explore></Explore>
            <FreeRead></FreeRead>
            <Statistics></Statistics>
            <SpecialOffer></SpecialOffer>

        </div>
    );
};

export default Home;