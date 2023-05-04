import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <Container>
            <h1 className='fw-bold text-center link-primary'>About us</h1>
            <p className='fs-5 fw-semibold text-center'>Let us cater your next event with our customizable menus and professional service. Perfect for corporate events or family gatherings.</p>
            <div className='mb-2 d-flex align-items-center justify-content-center mx-auto me-5'>
                <img className='me-5' style={{height:"200px",width:'200px',borderRadius:"50%"}} src="https://th.bing.com/th/id/R.11e615426ae5e806ffb8ac962c51e062?rik=PAHGspPYa507fg&pid=ImgRaw&r=0" alt="" />
                <h4 className='ms-5'>Foodheven serves delectable dishes with a wide variety of flavors and textures. Their cozy ambiance and friendly staff create a wonderful dining experience. Highly recommended! <br />
                --Mahbub
                </h4>
            </div>
        </Container>
    );
};

export default About;