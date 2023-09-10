import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    return (
        <div className="item">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <span>${product.price}</span>
            <Link to={`/item/${product.id}`}>
                <button>See Detail</button>
            </Link>
        </div>
    )
}

export default Item;