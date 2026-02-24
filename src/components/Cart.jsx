
const Cart = ({items, onRemove}) => {

    return(
        <div>
            <h2>Your Cart</h2>
            {items.map(({id, name, price}, index) => (
                <div key={index}>
                    {name} - ${price}
                    <button onClick={() => onRemove(index)}>Remove</button>
                </div>
            ))}
        </div>
    )

}

export default Cart