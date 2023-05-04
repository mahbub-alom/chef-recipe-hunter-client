import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/logo/OIP.jpg'
import { Link } from 'react-router-dom';
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
                        <Link className='text-decoration-none me-4 fw-medium fs-5 text-white text-bg-info p-2 rounded-3 mt-3' to='/'>Home</Link>
                        <Link className='text-decoration-none me-4 fw-medium fs-5 text-white text-bg-info p-2 rounded-3 mt-3' to='/'>Blog</Link>

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