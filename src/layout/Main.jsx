import React from 'react';
import Header from '../components/Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    return (
        <div className='lg:px-14'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer autoClose={2000}></ToastContainer>
        </div>
    );
};

export default Main;