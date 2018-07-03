import React, { Component, Fragment } from 'react'
import Nav from './Nav'
import NewCard from './NewCard'
import CardList from './CardList'
import CardListEmpty from './CardListEmpty'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      path: window.location.hash.slice(1),
      cards: []
    }
    this.updateCardList = this.updateCardList.bind(this)
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const path = window.location.hash.slice(1)
      this.setState({ path })
    })
  }

  updateCardList(cards) {
    this.setState({ cards: cards })
  }

  renderNewCard() {
    return <NewCard currentCards={this.state.cards} updateCardList={this.updateCardList} />
  }

  renderCards() {
    return this.state.cards.length > 0
      ? <CardList currentCards={this.state.cards} />
      : <CardListEmpty />
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
        <div className="jumbotron jumbotron-fluid">
          <div className="card flashcard col-6 mx-auto my-5 p-3">
            {this.renderView()}
          </div>
        </div>
      </Fragment>
    )
  }
}
