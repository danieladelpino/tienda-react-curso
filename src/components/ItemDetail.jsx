import React, { useState } from 'react';
import './styles.css/ItemList.css'
import './styles.css/item.css'
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useCart } from "../context/cartContext";

const ItemDetail = ({ product }) => {

    const [quantity, setQuantity] = useState('')
    const { addItem } = useCart();

    const onAdd = (value) => {
        setQuantity(value);
        if (value > 0) {
            addItem({ id: product.id, title: product.title, price: product.price }, value);
        }
    };

    return (
        <div className='item-detail'>
            <img src={product.image} alt={product.title} />
            <div className='item-detail-txt'>
                <h2>{product.title}</h2>
                <p> {product.description} </p>
                <span> ${product.price} </span>
                {quantity ? <Link to="/cart">Finalize purchase</Link> : <ItemCount stock={product.stock} onAdd={onAdd} />}
            </div>

        </div>

    );
};

export default ItemDetail;