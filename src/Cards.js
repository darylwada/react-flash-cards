import React from 'react'

export default function Cards(props) {
  const cardList = props.currentCards.length > 0
    ? props.currentCards.map(card =>
        <li className="list-group-item" key={card.question}>
          <p>{card.question}</p>
          <p>{card.answer}</p>
        </li>
      )
    : <div className="card">
        <h5 className="card-title">You have no flash cards.</h5>
        <a className="mx-auto my-3" href={'#new-card'}>
          <button className="btn btn-primary">Make One</button>
        </a>
      </div>


  return (
    <div className="col-6 mx-auto d-flex align-self-center p-3">
      <ul className="list-group">
        {cardList}
      </ul>
    </div>
  )
}
