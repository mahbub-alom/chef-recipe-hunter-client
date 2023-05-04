import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/logo/OIP.jpg'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import background from './Header.css'

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
const handleLogOut=()=>{
    logOut()
    .then(result=>{
        const loggedUser=result.user;
        console.log(loggedUser);
    })
    .catch(error=>{
        console.log(error.message);
    })
}



    return (
        <div className='background'>
            {/* <Container> */}
            <Navbar collapseOnSelect expand="lg" bg="" variant="light">
                <Navbar.Brand className='ps-4' href="#home"><img style={{ height: '80px', width: '80px' }} className='img-fluid' src={logo} alt="" /> <span className='fw-bold fs-2 text-success'>Gourmet Place</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <ul>
                            <NavLink className='text-decoration-none fs-3 font-light me-4 p-2 rounded' exact to="/" activeClassName="active">Home</NavLink>
                            <NavLink className='text-decoration-none fs-3 font-light me-4 p-2 rounded' to="/blog" activeClassName="active">Blog</NavLink>
                            <NavLink className='text-decoration-none fs-3 font-light me-4 p-2 rounded' to="/about" activeClassName="active">About</NavLink>
                        </ul>
                    </Nav>
                    <Nav className='d-flex align-items-center gap-3 pe-4'>
                        {
                            user ?
                                <>
                                <div>
                                <img title={user?.displayName} style={{height:"40px",width:'40px',borderRadius:'50%'}} className='' src={user?.photoURL} alt="" />
                                </div>
                                <button onClick={handleLogOut} type="button" className="btn btn-success mt-3">LogOut</button>
                                </>
                                :
                                <button type="button" className="btn btn-success mt-3"><Link className='text-white text-decoration-none' to='/login'>Login</Link></button>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {/* </Container> */}
        </div >
    );
};

export default Header;