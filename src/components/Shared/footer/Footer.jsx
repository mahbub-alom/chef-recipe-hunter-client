import React from 'react';

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
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Follow Us</h4>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
            <div style={{ backgroundColor: '#222', textAlign: 'center', padding: '1rem' }}>
                <p>&copy; 2023 Company Name. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
