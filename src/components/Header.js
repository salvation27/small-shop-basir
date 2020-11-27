import React from 'react'

export default function Header({countCartItem}) {
  return (
    <header className='header'>
      <div className="header_logo">
          logo
      </div>
      <div className="header_menu">
          <ul className='flex'>
            <li>
              Menu1
            </li>
            <li>
              Menu2
            </li>
          </ul>
      </div>
  <div className="cart_num">
    Cart {' '}
    {countCartItem ? (
      <div>{countCartItem}</div>
    )
    :('')
    
  }
    </div>
    </header>
  )
}
