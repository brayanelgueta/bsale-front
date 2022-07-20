const Product = () => {
    const view = `
        <div class="Single-product">
            <div class="product-image">
                <img src="imagen" alt="imagen-producto">
            </div>
            <div class="product-detail">
                <h3>Nombre</h3>
                <h3>Precio</h3>
                <h3>Categoria</h3>
            </div>
        </div>
    `;
    return view;
}

export default Product;