import React from 'react';

const Item = ({product}) => {
    return (
        <div className="item">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <span>{product.price}</span>
        </div>
    )
}

export default Item;