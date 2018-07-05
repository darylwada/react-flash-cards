import React, { Component } from 'react'
import CarouselItems from './CarouselItems'
import CarouselControls from './CarouselControls'

export default class Carousel extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    const { cardListLength, practiceCardIndex, handleCarouselControl } = this.props
    let currentIndex = practiceCardIndex
    const $target = event.target.closest('.btn')
    if ($target.id === 'next' && currentIndex < cardListLength - 1) currentIndex++
    else if ($target.id === 'prev' && currentIndex > 0) currentIndex--

    handleCarouselControl(currentIndex)
  }

  render() {
    const { practiceCardIndex, practiceCard } = this.props
    return (
      <div className="carousel" onClick={this.handleClick}>
        <CarouselItems
          practiceCard={practiceCard}
          currentIndex={practiceCardIndex} />
        <CarouselControls />
      </div>
    )
  }
}
