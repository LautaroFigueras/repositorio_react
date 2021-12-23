import React from "react";
import ItemCount from './ItemCount';
import { useCartContext } from "./CartContext";

const ItemDetail = (props) => {
    console.log("Porps en ItemDetail", props);
    console.log("props item", props.item[0]);

    const {cartList ,agregarAlCarrito }= useCartContext()

    const onAdd = (cantidad) =>{
        console.log(cantidad)
        agregarAlCarrito({...props, cantidad})
    }

    console.log(cartList);

    return(
        <div>
                <h3>ItemDetail</h3>
                {/* <h3>{title}</h3>
                <h3>{price}</h3>
                <p>{stock}</p>
                <img>Va la imagen</img> */}
            <ItemCount stock={item.stock} onAdd={onAdd} />
        </div>
    );
};
export default ItemDetail;