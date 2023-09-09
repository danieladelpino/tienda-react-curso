import './styles.css/Navbar.css'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to={"/"}>
                <h1>Euforia</h1>
            </Link>

            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/category/t-shirts'}>T-Shirts</Link></li>
                <li><Link to={'/category/pants'}>Pants</Link></li>
                <li><Link to={'/category/shoes'}>Shoes</Link></li>
                <li><Link to={'/category/accessories'}>Accessories</Link></li>
            </ul>

            <a href="/carrito">
                <CartWidget />
            </a>
        </nav>

    )
}

export default NavBar;