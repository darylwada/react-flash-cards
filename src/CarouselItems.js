import React, { Component } from 'react'

export default class CarouselItems extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.props.handleAnswerVisible()
  }

  render() {
    const { practiceCard } = this.props
    const visibility = this.props.answerVisible
      ? 'd-block'
      : 'd-none'

    return (
      <li className="list-group-item w-75 mx-auto">
        <h5 className="card-title">{practiceCard.question}</h5>
        <div className="card" onClick={this.handleClick}>
          <div className="card-header btn text-left">
            Show Answer
          </div>
          <div className={'card-body ' + visibility}>
            <p className="card-body mb-0">{this.props.practiceCard.answer}</p>
          </div>
        </div>
      </li>
    )
  }
}
