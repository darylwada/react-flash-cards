import React from 'react'
import Link from './Link'

export default function Nav({ path }) {
  return (
    <nav className="navbar bg-white border-bottom shadow-sm">
      <ul className="nav nav-pills mx-auto fixed-width">
        <li className="nav-item">
          <Link text="Cards" path="cards" isActive={path === 'cards'} />
        </li>
        <li className="nav-item">
          <Link text="New Card" path="new-card" isActive={path === 'new-card'} />
        </li>
        <li className="nav-item">
          <Link text="Practice" path="practice" isActive={path === 'practice'} />
        </li>
      </ul>
    </nav>
  )
}
