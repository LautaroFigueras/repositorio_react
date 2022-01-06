import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import ItemCount from "./ItemCount";
import getOneProduct from "./servicios/promiseForDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore"


function ItemListContainer  ({greeting}) {
    const [oneProduct, setOneProduct] = useState([]);
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
}
// const getProductsFetch = () => {
//     fetch("../public/DataList.json")
//         .then((response)=> response.json())
//         .then((data) => setProducts(data));    
// };


const {idCate} = useParams()

// useEffect(() =>{
//     setTimeout(() => getProductsFetch(), 2000);
// }, []); 

useEffect(() =>{
    const db = getFirestore()
    const queryDb = doc(db, 'items','ZHMpdHYznInmoowCR61i')
    getDoc (queryDb)
    .then(resp => setProduct ({id: resp.id, ...resp.data() }))
},[idCate])



return(
    <div>
        <h3>{greeting}</h3>
        <ItemCount stock={5} initial={1}/>
        <ItemList products={getProducts}/>

    </div>
);
export default ItemListContainer;