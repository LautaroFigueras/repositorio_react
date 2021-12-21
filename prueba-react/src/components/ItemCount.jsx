import React, {useState} from 'React'

const ItemCount = ({stock, onAdd}) => {
    conts [Number, setNumber] = useState(1);

    const add = () => {
        number !== stock && setNumber (number + 1);
    };
    const substract = () => {
        number !== 0 && setNumber(number -1);
    };

    return (
        <div>
            <p>{number}</p>
            <div>
                <button onClick={add}>+</button>
                <button onClick={substract}>-</button>
                <button disabled={number === 0} onClick={()=> onAdd(number)}>Agregar al carrito</button>
            </div>
        </div>

    );
};

export default ItemCount; 