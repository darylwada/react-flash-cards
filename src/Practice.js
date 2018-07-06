import React, { Component } from 'react'
import CarouselCards from './CarouselCards'

export default class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      practiceIndex: 0,
      showAnswer: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  toggleShowAnswer() {
    const showAnswer = !this.state.showAnswer
    this.setState({ showAnswer })
  }

  handleCarouselControls(control) {
    const { cardList } = this.props
    let { practiceIndex, showAnswer } = this.state
    if (control === 'next' && practiceIndex < cardList.length - 1) {
      practiceIndex++
      showAnswer = false
    }
    if (control === 'prev' && practiceIndex > 0) {
      practiceIndex--
      showAnswer = false
    }
    this.setState({ practiceIndex, showAnswer })
  }

  handleClick(event) {
    const $target = event.target.closest('.btn')
    if ($target.id === 'next' || $target.id === 'prev') this.handleCarouselControls($target.id)
    if ($target.id === 'show-answer') this.toggleShowAnswer()
  }

  render() {
    const { cardList } = this.props
    const { practiceIndex, showAnswer } = this.state
    const practiceCard = cardList[practiceIndex]
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
