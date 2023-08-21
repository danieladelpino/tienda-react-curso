import './styles.css/Navbar.css'
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1>Euforia</h1>
            <ul>
                <li><a href="">Inicio</a></li>
                <li> <a href="">Categorías</a></li>
                <li><a href="">Quiénes Somos</a></li>
                <li><a href="">Contacto</a></li>
            </ul>

            <a href="/carrito">
            <CartWidget />
            </a>
        </nav>

    )
}

export default NavBar;