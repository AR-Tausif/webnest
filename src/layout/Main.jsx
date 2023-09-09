
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const Main = () => {
    return (
        <>
            <NavigationBar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Main;