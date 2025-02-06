import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className="poppins">
            
            <Navbar></Navbar>
           
            
            <Outlet></Outlet>
            
            
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;