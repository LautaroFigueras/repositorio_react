const ItemDetail = (props) => {
    console.log("Porps en ItemDetail", props);
    console.log("props item", props.item[0]);

    return(
        <div>
            <h3>ItemDetail</h3>
            {/* <h3>{title}</h3>
            <h3>{price}</h3>
            <p>{stock}</p>
            <img>Va la imagen</img> */}
        </div>
    );
};
export default ItemDetail;