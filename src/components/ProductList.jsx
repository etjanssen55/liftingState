const ProductList = ({onAddToCart}) => {
    const products = [
        {id: 1, name: 'Laptop', price: 999.99},
        {id: 2, name: 'Smartphone', price: 499.99},
        {id: 3, name: 'Tablet', price: 299.99},
    ]

    return(
        <div>
            <h2>
                Product List
            </h2>
            {products.map(({id, name, price}) => (
                <>
                    <div key={id}>{name} - ${price}</div>
                    <button 
                        onClick={() => onAddToCart({id, name, price})}
                    >Add to Cart</button>
                </>
            ))}
        </div>
    )
}

export default ProductList