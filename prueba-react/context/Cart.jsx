//import { useContext } from "react";
import { useCartContext } from "./CartContext"


function Cart() {

    const {cartList, borrarCarrito} = useCartContext()


    return(
        <div>
            {cartList.map(prod=> <li>{prod.name}  {prod.cantidad}</li>)}
            <button onClick={borrarCarrito}>Vaciar Carrito</button>
            <button onClick={() => borrarItem (prod.id)} >Vaciar</button>

        </div>
    )
}

export default Cart