import { useState, useEffect } from "react";
import getOneProduct from "./servicios/promiseForDetail";
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {
    const[item, setItem] = useState({});
    console.log ("item", item);


    useEffect(() =>{
        getOneProduct.then((res)=> setItem(res));
    }, []);
    return(
         <ItemDetail item={item} />
    )};
export default ItemDetailContainer;