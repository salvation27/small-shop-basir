import React from 'react'

export default function Cart({cart,Add,Remove}) {

  const itemsPrice = cart.reduce((a,s)=>a + s.price * s.qty,0)
  const taxPrice = itemsPrice  * 0.14

  const shippingPrice = itemsPrice > 2000 ? 0 : 50
  const totalPrice = itemsPrice + taxPrice + shippingPrice

  return (
    <div className='col_1'>
      <div className="cart_wrap">
        <div className="cart_title">
       <h2>Корзина2</h2>
        </div>
        <div className="cart_item">
         {cart.length === 0 && <div>Корзина пуста</div>}
         {cart.map(item=>{
           return(
             <div key={item.id}>
               <span>{item.name}</span>
               <div className='btns'>
                      <button className="btn"
                      onClick={()=>Add(item)}
                      >
                        +
                      </button>
                        <button className="btn"
                        onClick={()=>Remove(item)}
                        >
                          -
                        </button>
               </div>
               
               <div className="num">
               {item.qty} x ${item.price.toFixed(2)}
               </div>
             </div>
             
           )
         })}
         {cart.length !==0 && (
           <>
        <hr></hr>
         <div>Item Price:{itemsPrice.toFixed(2)}</div>

         <hr></hr>
         <div>Tax Price:{taxPrice.toFixed(2)}</div>

         <hr></hr>
         <div>Shipping Price:{shippingPrice.toFixed(2)}</div>
         <hr></hr>
         <div>Total Price:{totalPrice.toFixed(2)}</div>
           </>
         )}
        </div>
      </div>
    </div>
  )
}
