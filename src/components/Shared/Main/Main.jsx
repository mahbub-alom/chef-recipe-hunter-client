import React from 'react';
import Header from '../Header';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import main from './main.css';



const Main = () => {
    return (
        <div className='main'>
            <Header></Header>
            <Outlet ></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;