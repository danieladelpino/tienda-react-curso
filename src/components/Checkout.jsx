import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useState } from 'react';
import { useCart } from '../context/cartContext';
import './styles.css/Checkout.css';

const Checkout = () => {

    const { cartItems, clear } = useCart();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const [orderId, setOrderId] = useState()

    const newOrder = () => {

        const db = getFirestore();
        const order = {
            buyer: {
                name,
                email,
                phone
            },
            items: cartItems.map(item => ({
                id: item.id,
                title: item.title,
                price: item.price,
                quantity: item.quantity
            })),
            total: totalPrice(cartItems)
        };

        const ordersRef = collection(db, "orders");
        addDoc(ordersRef, order).then(res => {
            setOrderId(res.id);
            clear();
        });
    }

    const totalPrice = (cartItems) => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    }


    if (orderId) {
        return (
            <div className="confirmation-message">
                <h2>Done! Your order has been successfully processed. ✅</h2>
                <h3>Your order number is: ${orderId} </h3>
                <h4>Thank you for choosing us to meet your needs. We hope you enjoy your purchase. 😊🎁</h4>
            </div>
        )
    }

    return (
        <div className="checkout-container">
            <h2>Order Confirmation</h2>
            <p>Please fill out the following fields to complete your purchase:</p>

            <div className="form-container">
                <form onSubmit={(e) => e.preventDefault()}>
                    <label>Name</label>
                    <input type="text" value={name} onChange={(event) => setName(event.target.value)} />

                    <label>Email</label>
                    <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />

                    <label>Phone</label>
                    <input type="text" value={phone} onChange={(event) => setPhone(event.target.value)} />

                    <button onClick={newOrder}>Buy</button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;