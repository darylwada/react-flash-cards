import React, { Component, Fragment } from 'react'
import CarouselCards from './CarouselCards'

export default class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      practiceIndex: 0,
      showAnswer: false,
      transition: null
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
      this.setState({ transition: 'forward' })
      setTimeout(() => this.setState({ practiceIndex, showAnswer, transition: 'afterForward' }), 100)
    }
    if (control === 'prev' && practiceIndex > 0) {
      practiceIndex--
      showAnswer = false
      this.setState({ transition: 'backward' })
      setTimeout(() => this.setState({ practiceIndex, showAnswer, transition: 'afterBackward' }), 100)
    }
  }

  handleClick(event) {
    const $target = event.target.closest('.btn')
    if ($target.id === 'next' || $target.id === 'prev') this.handleCarouselControls($target.id)
    if ($target.id === 'show-answer') this.toggleShowAnswer()
  }

  render() {
    console.log(this.state)
    const { cardList } = this.props
    const { practiceIndex, showAnswer, transition } = this.state
    const practiceCard = cardList[practiceIndex]
    const progress = `${(practiceIndex + 1) / cardList.length * 100}%`

    return (
      <Fragment>
        <div className="progress fixed-width-700 bg-white border shadow-sm mx-auto mb-4">
          <div className="progress-bar" style={{ width: progress }}></div>
        </div>
        <div className="carousel fixed-width-900 mx-auto" key={progress} onClick={this.handleClick}>
          <CarouselCards
            practiceCard={practiceCard}
            showAnswer={showAnswer}
            transition={transition} />
          <a id="prev" className="carousel-control-prev fixed-width-100 btn">
            <i className="fas fa-chevron-left"></i>
          </a>
          <a id="next" className="carousel-control-next fixed-width-100 btn">
            <i className="fas fa-chevron-right"></i>
          </a>
        </div>
      </Fragment>
    )
  }
}
