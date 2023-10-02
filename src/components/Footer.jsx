import React from 'react';
import './styles.css/Footer.css'
import { Link, NavLink } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-logo">
                    <Link to={"/"}>
                        <h2>Euphoria</h2>
                    </Link>
                </div>
                <div className="footer-links">
                    <ul>
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/category/t-shirts'}>T-Shirts</NavLink></li>
                        <li><NavLink to={'/category/pants'}>Pants</NavLink></li>
                        <li><NavLink to={'/category/shoes'}>Shoes</NavLink></li>
                        <li><NavLink to={'/category/accessories'}>Accessories</NavLink></li>
                    </ul>
                </div>

                <div className="footer-social">
                    <ul>
                        <li><img src="./images/facebook.svg" alt="" /></li>
                        <li><img src="./images/instagram.svg" alt="" /></li>
                        <li><img src="./images/twitter.svg" alt="" /></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Euphoria Ropa</p>
            </div>
        </footer>
    );
}

export default Footer;
