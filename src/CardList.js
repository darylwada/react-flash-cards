import React from 'react'
import * as queryString from './query-string'

export default function Cards({ currentCards, params }) {
  return (
    <ul className="list-group card border-0 w-100">
      {
        currentCards.map((card, index) => {
          const query = queryString.stringify({ 'cardId': index + 1 })
          return (
            <li className="list-group-item" key={index}>
              <h5 className="card-title">{card.question}</h5>
              <p className="card-body mb-0">{card.answer}</p>
              <div className="row no-gutters justify-content-end">
                <a href={'#cards' + query}>
                  <i className="fas fa-edit"></i>
                </a>
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}
