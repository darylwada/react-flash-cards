import React, { Component, Fragment } from 'react'
import Nav from './Nav'
import NewCard from './NewCard'
import CardList from './CardList'
import CardListEmpty from './CardListEmpty'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      path: 'cards',
      cards: []
    }
    this.updateCardList = this.updateCardList.bind(this)
  }

  componentDidMount() {
    location.hash = this.state.path
    window.addEventListener('hashchange', () => {
      const path = location.hash.slice(1)
      this.setState({ path })
    })
    window.dispatchEvent(new Event('hashchange'))
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
    if (this.state.path === 'new-card') return this.renderNewCard()
    if (this.state.path === 'cards') return this.renderCards()
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
