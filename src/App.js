import React, { Component } from 'react'
import Nav from './Nav'
import NewCard from './NewCard'
import Cards from './Cards'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      path: localStorage.path,
      cards: JSON.parse(localStorage.cards)
    }
    this.updateCardList = this.updateCardList.bind(this)
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash
      const path = hash.slice(1)
      this.setState({ path })
    })

    window.dispatchEvent(new Event('hashchange'))

    window.addEventListener('beforeunload', () => {
      for (let key in this.state) {
        localStorage.setItem(key, JSON.stringify(this.state[key]))
      }
    })
  }

  updateCardList(cards) {
    this.setState({ cards: cards })
  }

  renderNewCard() {
    return <NewCard currentCards={this.state.cards} updateCardList={this.updateCardList} />
  }

  renderCards() {
    return <Cards currentCards={this.state.cards} />
  }

  renderView() {
    console.log(this.state)
    console.log(localStorage)
    if (this.state.path === 'new-card') return this.renderNewCard()
    if (this.state.path === 'cards') return this.renderCards()
  }

  render() {

    return (
      <div className="container d-flex h-100">
        <Nav path={this.state.path}/>
        {this.renderView()}
      </div>
    )
  }
}
