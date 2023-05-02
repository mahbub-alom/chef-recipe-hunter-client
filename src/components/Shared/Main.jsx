import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import main from './main.css';

const Main = () => {
    return (
        <div >
            <Header></Header>
            <Outlet className='main'></Outlet>
        </div>
    );
};

export default Main;