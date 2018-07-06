import React, { Component } from 'react'
import CarouselCards from './CarouselCards'

export default class Carousel extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    const { cardListLength, practiceCardIndex, handlePracticeClicks } = this.props
    let currentIndex = practiceCardIndex
    let { answerVisible } = this.props
    const $target = event.target.closest('.btn')
    if ($target.id === 'next' && currentIndex < cardListLength - 1) {
      currentIndex++
      answerVisible = false
    }
    if ($target.id === 'prev' && currentIndex > 0) {
      currentIndex--
      answerVisible = false
    }
    if ($target.id === 'show-answer') answerVisible = !answerVisible
    handlePracticeClicks(currentIndex, answerVisible)
  }

  render() {
    const { practiceCard, answerVisible } = this.props
    return (
      <div className="carousel fixed-width-900 mx-auto" onClick={this.handleClick}>
        <CarouselCards
          practiceCard={practiceCard}
          answerVisible={answerVisible} />
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
