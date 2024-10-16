import React from 'react';
import Home from './component/Home';
import About from './component/About';
import Destination from './component/Destination';
import Tour from './component/Tour';
import Blog from './component/Blog';
import Footer from './component/Footer';

const Display = () => {
    return (
        <>
        <Home/>
        <About/>
        <Destination/>
        <Tour/>
        <Blog/>
        <Footer/>
        </>
    );
};

export default Display;