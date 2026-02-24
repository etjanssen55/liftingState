
import {useState} from 'react'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import CartSummary from './components/CartSummary.jsx'

const App = () => {
  const [cart, setCart] = useState([])

  const onAddToCart = product => {
    setCart([...cart, product])
  }

  const onRemoveFromCart = index => {
    setCart(cart.filter((item, i) => i !== index))
  }

  console.log(cart)

  return (
    <div>
      <CartSummary itemCount={cart.length}/>
      <ProductList onAddToCart={onAddToCart}/>
      <Cart items={cart} onRemove={onRemoveFromCart}/>
    </div>
  )
}

export default App





// import {useState} from 'react'

// import NameInput from './components/NameInput'
// import NameTag from './components/NameTag'

// const App = () => {
//     const [firstName, setFirstName] = useState("John")
//     const [lastName, setLastName] = useState("Snow")


//   return (
//     <div>
//       <NameInput name={firstName} setFirstName={setFirstName} placeholder='First Name'/>
//       <NameInput name={lastName} setLastName={setLastName} placeholder='Last Name'/>
//       <NameTag name={(firstName) + ' ' + (lastName)}/>
//     </div>
//   )
// }

// export default App