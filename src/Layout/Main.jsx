import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Navbar from '../Components/Navbar/Navbar';
import Banner from '../Components/Home/Banner/Banner';
import Footer from '../Components/Home/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;