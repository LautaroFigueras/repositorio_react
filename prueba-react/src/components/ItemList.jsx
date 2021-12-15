import React from 'react';
import React from './Item'

function ItemList( {products} ) {
    return(
        <>
            {products.map((prod) => <Item prod= {prod} /> )}
        </>
    )
}

export default ItemList