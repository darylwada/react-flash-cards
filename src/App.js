import React, { Component } from 'react'
import Nav from './Nav'
import CreateCard from './CreateCard'
import CardList from './CardList'
import * as queryString from './queryString'


export default class App extends Component {
  constructor(props) {
    super(props)
    const { path, params } = parseHash(location.hash)
    this.state = {
      path,
      params,
      cards = []
    }
    this.navigate = this.navigate.bind(this)
  }

  navigate({ path, params }) {
    window.location.hash = path + queryString.stringify(params)
  }

  renderCreateCard() {

  }

  renderCardList() {

  }

  renderView() {

  }

  render() {
    return (
      <div className="container d-flex h-100">

      </div>
    )
  }
}
