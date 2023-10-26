import React from 'react'

export default function ListItem({ title, price, onHandleClick }) {
  return (
    <li className='flex'>
      {`${title} ${price}`}
      <button onClick={onHandleClick}>Add</button>
    </li>

  )
}
