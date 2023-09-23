import './styles.css/Navbar.css'
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';


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

            <Link to={"/cart"}>
                <CartWidget />
            </Link>
        </nav>

    )
}

export default NavBar;