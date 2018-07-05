import React, { Component } from 'react'

export default class CarouselItems extends Component {
  render() {
    const { practiceCard } = this.props

    return (
      <li className="list-group-item w-75 mx-auto">
        <h5 className="card-title">{practiceCard.question}</h5>
        <p className="card-body mb-0">{practiceCard.answer}</p>
      </li>
    )
  }
}
