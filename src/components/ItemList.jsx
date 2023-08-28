import React from 'react';
import { useEffect, useState } from "react"
import "./Item";

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const APIProductos = () => {
            return new Promise((res) => {
                setTimeout(() => {
                    const Productos = [
                        {
                            id: 1,
                            title: 'Producto 1',
                            description: 'Descripción del producto 1',
                            price: 19.99,
                            img: 'imagen1.jpg',
                        },

                        {
                            id: 2,
                            title: 'Producto 2',
                            description: 'Descripción del producto 3',
                            price: 19.99,
                            img: 'imagen2.jpg',
                        },

                        {
                            id: 3,
                            title: 'Producto 3',
                            description: 'Descripción del producto 3',
                            price: 19.99,
                            img: 'imagen3.jpg',
                        },
                    ]
                    res(Productos);
                }, 2000);
            })
        }

        APIProductos().then((producto) =>{
            setItems(producto);
        });
    }, []);

    return (
        <div className="item-list">
            {items.map((Item) => ( 
            <Item key={item.id} item={item} />
            ))}
        </div>
    );
};

export default ItemList;