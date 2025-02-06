import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className="poppins flex flex-col min-h-screen">
            <div className=''>
            <Navbar></Navbar>
            </div>
            <div className="flex-grow mt-10">
            <Outlet></Outlet>
            </div>
            <div className=''>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;