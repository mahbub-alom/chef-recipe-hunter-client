import React from 'react';
import Header from '../Header';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import Categories from '../categories/Categories';
// import main from './main.css';



const Main = () => {
    return (
        <div>
            <Header></Header>
            <Categories></Categories>
            <Outlet ></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;