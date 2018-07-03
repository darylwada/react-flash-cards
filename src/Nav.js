import React from 'react'

export default function Nav(props) {
  return (
    <div className="row">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a
            className='nav-link'
            href={'#flashcards?page=cards'}>
            Cards
          </a>
        </li>
        <li className="nav-item">
          <a
            className='nav-link'
            href={'#flashcards?page=new'}>
            New
          </a>
        </li>
      </ul>
    </div>
  )
}
