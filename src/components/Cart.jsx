import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";
import './styles.css/Cart.css'

const Cart = () => {
  const { cartItems, removeItem, clear } = useCart();

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleClearCart = () => {
    clear();
  };

  return (
    <div className="cart-container">
      <h2>Desglose de tu carrito</h2>
      {(cartItems.length === 0) ? (
        <div>
          <p>No hay ítems en el carrito.</p>
          <Link to="/">Back to top</Link>
        </div>
      ) : (
        <div className="cart-items">
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.title} x{item.quantity}: ${item.price * item.quantity}
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <div cart-summary>
            <p>Total: ${totalPrice}</p>
          </div>

          <div className="cart-links">
            <Link to="/">Keep buying</Link>
            <Link to="/checkout"> Finalize purchase </Link>
            <button onClick={handleClearCart}>Clear Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;