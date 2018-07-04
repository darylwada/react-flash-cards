import React, { Component, Fragment } from 'react'
import Nav from './Nav'
import Form from './Form'
import CardList from './CardList'
import CardListEmpty from './CardListEmpty'
import parseHash from './parse-hash'

export default class App extends Component {
  constructor(props) {
    super(props)
    const { path, params } = parseHash(window.location.hash)
    const cards = localStorage.getItem('cards')
    this.state = {
      path: path,
      params: params,
      cards: JSON.parse(cards) || []
    }
    this.addNewCard = this.addNewCard.bind(this)
    this.editCard = this.editCard.bind(this)
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const { path, params } = parseHash(window.location.hash)
      this.setState({ path, params })
    })

    window.addEventListener('beforeunload', () => {
      localStorage.setItem('cards', JSON.stringify(this.state.cards))
    })
  }

  addNewCard(newCard) {
    const cards = [...this.state.cards, newCard]
    this.setState({ cards: cards })
  }

  editCard(newCard, editIndex) {
    const cards = this.state.cards.map((card, index) => {
      if (index === editIndex) return newCard
      return card
    })
    this.setState({ cards: cards })
  }

  renderForm(type) {
    const editIndex = parseInt(this.state.params.cardId, 10) - 1
    const cardDetails = this.state.cards[editIndex] || {}
    return <Form
      type={type}
      editIndex={editIndex}
      cardDetails={cardDetails}
      currentCards={this.state.cards}
      addNewCard={this.addNewCard}
      editCard={this.editCard} />
  }

  renderCards() {
    if (Object.keys(this.state.params).length) return this.renderForm('edit')

    return this.state.cards.length > 0
      ? <CardList currentCards={this.state.cards} />
      : <CardListEmpty />
  }

  renderView() {
    console.log(this.state)
    switch (this.state.path) {
      case 'new-card':
        return this.renderForm('new')
      case 'cards':
        return this.renderCards()
      default:
        return this.renderCards()
    }
  }

  render() {
    return (
      <Fragment>
        <Nav path={this.state.path}/>
          <div className="card fixed-width mx-auto my-5 p-3">
            {this.renderView()}
        </div>
      </Fragment>
    )
  }
}
