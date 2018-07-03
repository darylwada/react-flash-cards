import React from 'react'

export default function Cards({ currentCards }) {
  return (
    <ul className="list-group border-0 w-100">
      {
        currentCards.map(card =>
          <li className="list-group-item" key={card.question}>
            <h5 className="card-title">{card.question}</h5>
            <p className="card-body">{card.answer}</p>
          </li>
        )
      }
    </ul>
  )
}
