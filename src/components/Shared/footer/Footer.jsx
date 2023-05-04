import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer style={{ backgroundColor: '#333', color: '#fff' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
                <div>
                    <h3>Gourmet Place</h3>
                    <p></p>
                </div>
                <div>
                    <h4>Links</h4>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                       <p><Link className='text-decoration-none fs-5 text-success' to='/'>Home</Link></p>
                       <p><Link className='text-decoration-none fs-5 text-success' to='/'>Chefs</Link></p>
                       <p><Link className='text-decoration-none fs-5 text-success' to='/'>About Us</Link></p>
                       <p><Link className='text-decoration-none fs-5 text-success' to='/'>Contact Us</Link></p>
                    </ul>
                </div>
                <div>
                    <h4>Follow Us</h4>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>

                        <p><Link className='text-decoration-none fs-5 text-info' to='/'>Facebook</Link></p>
                       <p><Link className='text-decoration-none fs-5 text-info' to='/'>Twitter</Link></p>
                       <p><Link className='text-decoration-none fs-5 text-info' to='/'>Instagram</Link></p>
                       <p><Link className='text-decoration-none fs-5 text-info' to='/'>LinkedIn</Link></p>
                    </ul>
                </div>
            </div>
            <div style={{ backgroundColor: '#222', textAlign: 'center', padding: '1rem' }}>
                <p>&copy; 2023 Gourmet place. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
