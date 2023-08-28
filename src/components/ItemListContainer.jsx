import React from 'react';
import ItemList from './ItemList'; 
import './styles.css/ItemList.css'; 

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="item-list-container">
            <h2>{greeting}</h2>
            <ItemList />
        </div>
    )
}

export default ItemListContainer;