import React, { Component } from 'react'
import Nav from './Nav'
import NewCard from './NewCard'
// import Cards from './Cards'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      path: 'cards',
      cards: []
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash
      const path = hash.slice(1)
      this.setState({ path })
    })
  }

  renderNewCard() {

  }

  renderCards() {

  }

  renderView() {
    if (this.state.path === 'new-card') return this.renderNewCard()
    if (this.state.path === 'cards') return this.renderCards()
  }

  render() {
    console.log(this.state)
    return (
      <div className="container d-flex h-100">
        <Nav />

      </div>
    )
  }
}
