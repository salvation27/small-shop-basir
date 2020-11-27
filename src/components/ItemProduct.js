import React from 'react'

export default function ItemProduct({item,Add}) {
  const {name,price,img} = item
  return (
    <div className='card'>
       <div className="card_foto">
         <img src={img} alt=""/>
       </div>
       <div className="card_title">
         {name}
         </div>
         <div className="card_price">
         ${price}
         </div>
         <div onClick={()=>Add(item)} className="card_btn">
             Добавить в корзину
         </div>
    </div>
  )
}
