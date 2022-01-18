//import { useContext } from "react";
import { useCartContext } from "./CartContext"
import { addDoc, collection, doc, getFirestore, Timestamp, updateDoc, writeBatch } from "firebase/firestore"
import { useState } from "react";



function Cart() {
    const [idOrder, setIdOrder] = useState('')
    const [dataForm, setDataForm] = useState({
        name:"", email:"", phone:""
    })
    const {cartList, borrarCarrito, precioTotal} = useCartContext()


    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
                [e.target.name]: e.target.value
        })
    }    

    console.log(dataForm)
    const generarOrden = (e) =>{
        e.preventDefault()

        let orden = {}
        orden.date = Timestamp.fromDate(new Date())

        orden.buyer = dataForm
        orden.total = precioTotal();

        orden.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.name;
            const precio = cartItem.price * cartItem.cantidad;
            
            return {id, nombre, precio}   
        })

        const db = getFirestore()
        const ordenColeccion = collection(db, 'orders')
        addDoc(ordenColeccion, orden)
        .then(resp => setIdOrder(resp.id))
        .catch(err => console.log(err))
        .finally(()=> {
            borrarCarrito()
            setDataForm({
                name:"", email:"", phone:""
            })
        })



        const cleccionNoti = collection(db, 'items')
        const queryActulizarStock = query(
            cleccionNoti, where( documentId() , 'in', cartList.map(it => it.id))          
        )

        const batch = writeBatch(db)


        getDocs(queryActulizarStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
            stock: resp.data().stock - cartList.find(item => item.id === resp.id).cantidad
        }) ))

        batch.commit()


    }





    return(
        <div>
             {idOrder.length !== 0 && idOrder}
            {cartList.map(prod=> <li>{prod.name}  {prod.cantidad}</li>)}
            <form
                 onSubmit={generarOrden} 
                onChange={handleChange} 
            >
                 <input 
                    type='text' 
                    name='name' 
                    placeholder='name' 
                    value={dataForm.name}
                /><br />
                <input 
                    type='text' 
                    name='phone'
                    placeholder='tel' 
                    value={dataForm.phone}
                /><br/>
                <input 
                    type='email' 
                    name='email'
                    placeholder='email' 
                    value={dataForm.email}
                /><br/>
                <button>Generar Orden</button>
            </form>
            <button onClick={borrarCarrito}>Vaciar Carrito</button>
            <button onClick={() => borrarItem (prod.id)} >Vaciar</button>
        </div>
    )
}

export default Cart