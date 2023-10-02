import React, { useEffect, useState } from 'react';
import './styles.css/ItemList.css';
import './styles.css/ItemListContainer.css';
import '../App.css'
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';
import HomePage from './HomePage';
import Footer from './Footer'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        const db = getFirestore();
        const productsRef = collection(db, "products")
        const q = id ? query(productsRef, where("category", "==", id)) : productsRef;

        getDocs(q).then((snapshot) => {
            setProducts(
                snapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() }
                })
            );
        });
    }, [id]);

    return (
        <div className="item-list-container">
            <HomePage />
            <ItemList products={products} />
            <Footer />
        </div>

    )
}

export default ItemListContainer;