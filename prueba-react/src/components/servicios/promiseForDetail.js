const oneProduct = [
    {
        id: 1,
        image: "aca va una imagen",
        title: "Magic Camiseta",
        categoria: "Camisetas",
        precio: "110$",
        stock: "3",
    }
]


const getOneProduct = new Promise((resolve) =>{
    setTimeout(() => {
        resolve(oneProduct);
    }, 2000);
});

export default getOneProduct;