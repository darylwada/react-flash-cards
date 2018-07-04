import React, { Component, Fragment } from 'react'
import Nav from './Nav'
import NewCard from './NewCard'
import CardList from './CardList'
import CardListEdit from './CardListEdit'
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

  updateCardList(newCard, editIndex) {
    let cards = []
    if (editIndex) {
      cards = this.state.cards.map((card, index) => {
        if (index === editIndex) return newCard
        return card
      })
    }
    else {
      cards = [...this.state.cards, newCard]
    }
    this.setState({ cards: cards })
  }

  renderNewCard() {
    return <NewCard currentCards={this.state.cards} updateCardList={this.updateCardList} />
  }

  renderCards() {
    if (Object.keys(this.state.params).length > 0) {
      const editIndex = parseInt(this.state.params.cardId, 10) - 1
      return <CardListEdit
        index={editIndex}
        details={this.state.cards[editIndex]}
        updateCardList={this.updateCardList} />
    }
    else {
      return this.state.cards.length > 0
        ? <CardList currentCards={this.state.cards} />
        : <CardListEmpty />
    }
  }

  renderView() {
    console.log(this.state)
    switch (this.state.path) {
      case 'new-card':
        return this.renderNewCard()
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
