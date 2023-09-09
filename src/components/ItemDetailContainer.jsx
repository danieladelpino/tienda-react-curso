import { useEffect, useState } from "react"
import ItemDetail from './ItemDetail';


const mockAPI = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id !== undefined) {
                const productFound = productsJSON.find(item => item.id === id);
                if (productFound) {
                    resolve(productFound);
                }
            } else {
                resolve(productsJSON);
            }
        }, 2000);
    });
};

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [product, setProducts] = useState(null)

    useEffect(() => {
        mockAPI(id)
            .then((data) => setProducts(data))
            .catch((error) => console.error(error));
    }, [id])

    if (!product) return null

    return (
        <div>
            <ItemDetail product={product} />
        </div>
    )

}

export default ItemDetailContainer;