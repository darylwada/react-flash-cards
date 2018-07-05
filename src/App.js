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
      path,
      params,
      cards: JSON.parse(cards) || []
    }
    this.updateCardList = this.updateCardList.bind(this)
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

  addToCardList(newCard) {
    return [...this.state.cards, newCard]
  }

  editCardList(newCard) {
    const editIndex = parseInt(params.cardIdx, 10) - 1
    return this.state.cards.map((card, index) => {
      if (index === editIndex) return newCard
      return card
    })
  }

  updateCardList(newCard) {
    const { params } = this.state
    const cards = params.hasOwnProperty('cardIdx')
      ? this.editCardList(newCard)
      : this.addToCardList(newCard)

    this.setState({ cards })
  }

  renderForm() {
    const { cards, params } = this.state
    const editIndex = parseInt(params.cardIdx, 10) - 1
    const cardToEdit = cards[editIndex] || null
    return <Form
      cardToEdit={cardToEdit}
      updateCardList={this.updateCardList} />
  }

  renderCards() {
    if (this.state.params.cardIdx) return this.renderForm()
    return this.state.cards.length > 0
      ? <CardList currentCards={this.state.cards} />
      : <CardListEmpty />
  }

  renderView() {
    switch (this.state.path) {
      case 'new-card':
        return this.renderForm()
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
          <div className="card fixed-width mx-auto my-5 p-3 shadow-sm">
            {this.renderView()}
        </div>
      </Fragment>
    )
  }
}
