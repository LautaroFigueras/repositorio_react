const oneProduct = [
    {
        id: 1,
        imagen: "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_2751000/altimages/ff_2751360alt1_full.jpg&w=900",
        titulo: "Magic Camiseta",
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