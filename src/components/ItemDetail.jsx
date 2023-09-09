import React from 'react';


const ItemDetail = ({product}) => {
    return (
        <div>
            <h2>Producto:</h2>
            <h3> {product.title} </h3>
            <p> {product.description} </p>
            <img src={product.image} alt={product.title} />
            <span> {product.price} </span>
        </div>
    );
};

export default ItemDetail;