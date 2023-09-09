import React, { useEffect, useState } from 'react';
import './styles.css/ItemList.css';
import productsJSON from "./products.json";
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';

const mockAPI = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (id !== undefined) {
               const productsFilter = productsJSON.filter(item => item.category === id);
               resolve(productsFilter)
            } else {
                resolve(productsJSON)
            }
            
        }, 2000);
    })
}

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        mockAPI(id).then((data) => setProducts(data))
    }, [id]);

    return (
        <div className="item-list-container">
            <ItemList products={products} />
        </div>

    )
}

export default ItemListContainer;