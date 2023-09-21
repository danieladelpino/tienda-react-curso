import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";

const Cart = () => {
  const { cartItems, removeItem } = useCart();

  if (!cartItems) {
    return (
      <div>
        <h2>Desglose de tu carrito</h2>
        <p>No hay ítems en el carrito.</p>
        <Link to="/">Volver al Landing</Link>
      </div>
    );
  }

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  return (
    <div>
      <h2>Desglose de tu carrito</h2>
      {!cartItems ? (
        <div>
          <p>No hay ítems en el carrito.</p>
          <Link to="/">Volver al Landing</Link>
        </div>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} x{item.quantity}: ${item.price * item.quantity}
                <button onClick={() => removeItem(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <p>Total: ${totalPrice}</p>
          <Link to="/">Seguir comprando</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;