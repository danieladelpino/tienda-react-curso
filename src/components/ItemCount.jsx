import React, { useState } from 'react';


const ItemCount = ({ stock, onAdd }) => {

    const [count, setCount] = useState(0)

    const incrementCount = () => {
        if (count > stock) {
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
        <div>
            <h2>Contador: {count} </h2>
            <button onClick={incrementCount}>+</button>
            <button onClick={decrementCount}>-</button>
            <button onClick={addToCart} disabled={stock === 0 || count === 0}>Agregar al carrito</button>
        </div>
    )

}


export default ItemCount;