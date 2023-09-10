import React from 'react';
import './styles.css/ItemList.css'
import './styles.css/item.css'

const ItemDetail = ({ product }) => {
    return (
        <div className='item-detail'>
            <img src={product.image} alt={product.title} />
            <div className='item-detail-txt'>
                <h2>{product.title}</h2>
                <p> {product.description} </p>
                <span> ${product.price} </span>
            </div>
        </div>
    );
};

export default ItemDetail;