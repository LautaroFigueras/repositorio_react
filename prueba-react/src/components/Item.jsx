import React from 'react'
import getOneProduct from './servicios/promiseForDetail'

    function Item({prod}) {
        return(
            <div>
                <getOneProduct />
            </div>
        )
    }

    export default Item