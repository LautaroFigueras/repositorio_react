import { createContext, useState, useContext } from "react";
import getOneProduct from "../src/components/servicios/promiseForDetail";
import Cart from "./Cart";


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    function agregarAlCarrito (item) {
       
        const index = cartList.findIndex(i=> i.id === item.id)

            if (index > -1) {
                const oldCant = cartList[index].cantidad
                 
                cartList.splice(index, 1)

                setCartList([...cartList, {...item, cantidad: item.cantidad + oldCant}])
               
            } else {
                setCartList([...cartList, item])
            }
    }


    const borrarCarrito = () =>{
        setCartList ([]);
    };

    const borrarItem = () =>{
        setCartList(cartList.filter((oneProduct)=> oneProduct.id !== id));
    };


    return (
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            borrarItem,
            borrarCarrito,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider