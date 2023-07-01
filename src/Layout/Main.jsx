import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Navbar from '../Components/Navbar/Navbar';
import Banner from '../Components/Home/Banner/Banner';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;