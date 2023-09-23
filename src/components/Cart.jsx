import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";

const Cart = () => {
  const { cartItems, removeItem } = useCart();

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Desglose de tu carrito</h2>
      {(cartItems.length === 0) ? (
        <div>
          <p>No hay ítems en el carrito.</p>
          <Link to="/">Back to top</Link>
        </div>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} x{item.quantity}: ${item.price * item.quantity}
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total: ${totalPrice}</p>
          <Link to="/">Keep buying</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;