import { useState, useEffect } from "react";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import getOneProduct from "./servicios/promiseForDetail";
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {
    const[item, setItem] = useState({});
    const [prod, setProd] = useState({})
    const {id} = useParams()
    console.log ("item", item);


    useEffect(() =>{
    //     getOneProduct.then((res)=> setItem(res));
    // }, []);
    const db = getFirestore()
    const queryDb = doc(db, 'items', id)
    getDoc(queryDb)
    .then(resp => setProd( { id: resp.id, ...resp.data() } ))
    .catch(err => console.log(err))
    .finally(()=>setLoading(false))
    },[])
    console.log(prod)

    return(
         <ItemDetail prod={prod} />
    )};
export default ItemDetailContainer;