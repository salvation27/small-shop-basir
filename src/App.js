import React,{useState} from 'react'
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Cart from './components/Cart'
import data from './data'

function App() {

const {products} =data
const [cart ,setCart] = useState([])

const Add = (lyboe) => {
  const estTovar = cart.find(x=>x.id === lyboe.id)
  if(estTovar){
    setCart(cart.map(itemon=>itemon.id===lyboe.id ? {...estTovar,qty:estTovar.qty + 1}: itemon))
  } else {
    setCart([...cart,{...lyboe,qty:1}])
  }
}

const Remove = (lyboe) =>{
  const res = cart.find(y=>y.id === lyboe.id)
  if(res.qty=== 1){
    setCart(cart.filter(w=>w.id !==lyboe.id))
  } else {
    setCart(cart.map(itemon=>itemon.id===lyboe.id ? {...res,qty:res.qty - 1}: itemon))
  }
}

  return (
    <div className="App">
     <Header countCartItem={cart.length} />
     <div className="main">
       <Main products= {products} Add={Add} />
       <Cart  Remove={Remove} cart={cart} Add={Add} />
     </div>
    </div>
  );
}

export default App;
