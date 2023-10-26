import React from 'react'

export default function LiCart({ title, price }) {
  return (
    <li>
      {`${title}: ${price}`}
    </li>
  )
}
