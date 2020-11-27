import React from 'react'
import ItemProduct from  './ItemProduct'

export default function Main({products,Add}) {
 
  return (
    <div className='col_2'>
      <h2>Продукты</h2>
      <div className="product_wrap">
      {
        products.map(item=><ItemProduct Add={Add} key={item.id} item={item} />)
      }
      </div>
    </div>
  )
}
