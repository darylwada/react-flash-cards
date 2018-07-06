import React, { Component } from 'react'
import CarouselCards from './CarouselCards'

export default class Carousel extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    const { handleCarouselControls, toggleShowAnswer } = this.props
    const $target = event.target.closest('.btn')
    if ($target.id === 'next' || $target.id === 'prev') handleCarouselControls($target.id)
    if ($target.id === 'show-answer') toggleShowAnswer()
  }

  render() {
    const { practiceCard, showAnswer } = this.props
    return (
      <div className="carousel fixed-width-900 mx-auto" onClick={this.handleClick}>
        <CarouselCards
          practiceCard={practiceCard}
          showAnswer={showAnswer} />
        <a id="prev" className="carousel-control-prev fixed-width-100 btn">
          <i className="fas fa-chevron-left"></i>
        </a>
        <a id="next" className="carousel-control-next fixed-width-100 btn">
          <i className="fas fa-chevron-right"></i>
        </a>
      </div>
    )
  }
}
