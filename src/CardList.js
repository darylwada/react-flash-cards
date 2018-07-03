import React from 'react'

export default function Cards({ currentCards }) {
  return (
    <ul className="list-group mx-auto w-100">
      {
        currentCards.map(card =>
          <li className="list-group-item" key={card.question}>
            <h5>{card.question}</h5>
            <p>{card.answer}</p>
          </li>
        )
      }
    </ul>
  )
}
