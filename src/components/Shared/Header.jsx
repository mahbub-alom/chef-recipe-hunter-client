import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/logo/OIP.jpg'
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";

const Header = () => {
    return (
        <div>
            {/* <Container> */}
            <Navbar collapseOnSelect expand="lg" bg="" variant="light">
                <Navbar.Brand className='ps-4' href="#home"><img style={{ height: '80px', width: '80px' }} className='img-fluid' src={logo} alt="" /> <span className='fw-bold fs-2 text-success'>Gourmet Place</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link className='text-decoration-none me-4 fw-medium fs-5 text-white text-bg-info p-2 rounded-3 mt-3' to='/'>Home</Link>
                        <Link className='text-decoration-none me-4 fw-medium fs-5 text-white text-bg-info p-2 rounded-3 mt-3' to='/'>Blog</Link>

                    </Nav>
                    <Nav className='d-flex align-items-center gap-3 pe-4'>
                        <FaUser className='fs-2 text-bg-info p-2 rounded-3 mt-3'></FaUser>
                        <button type="button" className="btn btn-success mt-3"><Link className='text-white text-decoration-none' to='/login'>Login</Link></button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {/* </Container> */}
        </div >
    );
};

export default Header;