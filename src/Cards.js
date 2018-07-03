import React from 'react'
import CardList from './CardList'
import CardListEmpty from './CardListEmpty'

export default function Cards({ currentCards }) {
  const cardList = currentCards.length > 0
    ? <CardList currentCards={currentCards} />
    : <CardListEmpty />

  return (
    <div className="col-6 mx-auto d-flex align-self-center p-3">
      {cardList}
    </div>
  )
}
