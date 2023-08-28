import React from 'react';
import ItemList from './ItemList'; 

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="item-list-container">
            <h2>{greeting}</h2>
            <ItemList />
        </div>
    )
}

export default ItemListContainer;