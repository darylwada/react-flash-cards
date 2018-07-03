import React from 'react'
import Link from './Link'

export default function Nav({ path }) {
  return (
    <div className="row">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link text="Cards" path="cards" isActive={path === 'cards'} />
        </li>
        <li className="nav-item">
          <Link text="New Card" path="new-card" isActive={path === 'new-card'} />
        </li>
      </ul>
    </div>
  )
}
