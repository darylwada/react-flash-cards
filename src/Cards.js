import React from 'react'
import CardList from './CardList'
import CardListEmpty from './CardListEmpty'

export default function Cards({ currentCards }) {
  const cardList = currentCards.length > 0
    ? <CardList currentCards={currentCards} />
    : <CardListEmpty />

  return cardList

}
