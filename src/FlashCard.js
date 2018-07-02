import React, { Component } from 'react'
import QuestionInput from './QuestionInput'
import AnswerInput from './AnswerInput'

export default class FlashCard extends Component {
  constructor(props) {
    super(props)
    this.state = { cards: [] }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.target)
    const newCard = {}
    for (let pair of formData.entries()) {
      newCard[pair[0]] = pair[1]
    }
    const cards = [...this.state.cards, newCard]

    this.setState({ cards: cards })
  }

  render() {
    return (
      <form
        className="form-group card col-6 mx-auto d-flex align-self-center p-3"
        onSubmit={this.handleSubmit}>
        <h5 className="card-title text-center">Create a Flash Card</h5>
        <QuestionInput />
        <AnswerInput />
        <button type="submit" className="btn btn-primary mx-auto my-3">Save</button>
      </form>
    )
  }
}
