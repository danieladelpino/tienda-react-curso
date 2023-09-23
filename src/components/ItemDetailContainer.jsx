import { useEffect, useState } from "react"
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";
import productsJSON from './products.json'
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

// const mockAPI = (id) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (id !== undefined) {
//                 const productFound = productsJSON.find(item => item.id == id);
//                 if (productFound) {
//                     resolve(productFound);
//                 }
//             } else {
//                 resolve(productsJSON);
//             }
//         }, 2000);
//     });
// };

const ItemDetailContainer = () => {

   
    const [product, setProducts] = useState(null)
    const { id } = useParams();
    useEffect(() => {
        const db = getFirestore();
        const q = query(collection(db, "products"), where("category", "==", id));

        getDocs(q).then((snapshot) => {
            setProducts(
                snapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() }
                })
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