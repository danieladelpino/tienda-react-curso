import React, { useState } from 'react';
import './styles.css/ItemCount.css'

const ItemCount = ({ stock, onAdd }) => {

    const [count, setCount] = useState(0)

    const incrementCount = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const decrementCount = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const addToCart = () => {
        if (count > 0) {
            onAdd(count);
        }
    }

    return (
        <div className='item-count'>
            <button onClick={incrementCount}>+</button>
            <p>{count} </p>
            <button onClick={decrementCount}>-</button>
            <button onClick={() => {addToCart();}} disabled={stock === 0 || count === 0}>Add to cart</button>
        </div>
    )

}


export default ItemCount;