import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Lottie from "lottie-react";
import animation from '../../../assets/animation.json'

const Error = () => {
    const {error,status}=useRouteError()
    console.log(error.message);
    return (
        <div>       
            <div>
                <Lottie style={{height:'70vh',width:'200px'}} className='mx-auto w-50 d-flex justify-content-center text-bg-danger ' animationData={animation} loop={true}></Lottie>
            </div>
            <h2 className='text-danger text-center'>{error.message}</h2>
                <button className='border-0 mx-5 '><Link className='rounded text-center p-2 text-decoration-none bg-success text-light ' to='/'>Back to home</Link></button>
        </div>
    );
};

export default Error;