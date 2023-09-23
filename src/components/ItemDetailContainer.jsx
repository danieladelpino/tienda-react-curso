import { useEffect, useState } from "react"
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {

    const [product, setProducts] = useState(null)

    const { id } = useParams();

    useEffect(() => {
        
        const db = getFirestore();
        const docRef = doc(db, "products", id)

        getDoc(docRef).then((snapshot) => {
            setProducts(
                { id: snapshot.id, ...snapshot.data() }
              );
        });
    }, [id]);

    if (!product) return null

    return (
        <div>
            <ItemDetail product={product} />
        </div>
    )

}

export default ItemDetailContainer;