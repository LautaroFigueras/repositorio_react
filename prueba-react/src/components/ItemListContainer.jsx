import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import ItemCount from "./ItemCount"
// import getProducts from "../services/handMadePromiise";


const ItemListContainer = ({greeting}) =>{
    conts [getProducts, setProducts] = useState([]);
    console.log(products)
}

const getProductsFetch = () => {
    fetch("../public/DataList.json")
        .then((response)=> response.json())
        .then((data) => setProducts(data));    
};


useEffect(() =>{
    setTimeout(() => getProductsFetch(), 2000);
}, []); 





return(
    <div>
        <h3>{greeting}</h3>
        <ItemCount stock={5} initial={1}/>
        <ItemList products={products}/>
    </div>
);
export default ItemListContainer;