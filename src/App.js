import React, { Component } from 'react'
import Nav from './Nav'
import CreateCard from './CreateCard'
import CardList from './CardList'
import parseHash from './parseHash'
import * as queryString from './queryString'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      path: 'flashcards',
      params: {page: 'cards'},
      cards: []
    }
    this.navigate = this.navigate.bind(this)
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash
      const split = hash.split('?')
      const path = split[0].slice(1)
      const params = queryString.parse(split[1])
      this.setState({ path, params })
    })
  }

  navigate({ path, params }) {
    window.location.hash = path + queryString.stringify(params)
  }

  renderCreateCard() {
    return <CreateCard />
  }

  renderCardList() {

  }

  renderView() {
    if (this.state.path === 'createcard') return this.renderCreateCard()
  }

  render() {
    console.log(this.state)
    return (
      <div className="container d-flex h-100">
        <Nav page={this.state.params}/>

      </div>
    )
  }
}
