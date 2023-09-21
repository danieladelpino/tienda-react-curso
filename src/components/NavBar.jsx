import './styles.css/Navbar.css'
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';
import Cart from './Cart'

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to={"/"}>
                <h1>Euphoria</h1>
            </Link>

            <ul>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/category/t-shirts'}>T-Shirts</NavLink></li>
                <li><NavLink to={'/category/pants'}>Pants</NavLink></li>
                <li><NavLink to={'/category/shoes'}>Shoes</NavLink></li>
                <li><NavLink to={'/category/accessories'}>Accessories</NavLink></li>
            </ul>

            <a href="/carrito">
                <CartWidget />
            </a>
        </nav>

    )
}

export default NavBar;