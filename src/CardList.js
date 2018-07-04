import React from 'react'
import * as queryString from './query-string'

export default function Cards({ currentCards, params }) {
  return (
    <ul className="list-group card border-0 w-100">
      {
        currentCards.map((card, index) =>
          <li className="list-group-item" key={index}>
            <h5 className="card-title">{card.question}</h5>
            <p className="card-body">{card.answer}</p>
            <a href={'#cards' + queryString.stringify({ 'cardId': index + 1 })}><i className="fas fa-edit"></i></a>
          </li>
        )
      }
    </ul>
  )
}
