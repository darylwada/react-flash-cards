import React, { Component } from 'react'
import Input from './Input'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.target)
    const newCard = {}
    for (let pair of formData.entries()) {
      newCard[pair[0]] = pair[1]
    }

    if (this.props.type === 'new') this.props.addNewCard(newCard)
    else this.props.editCard(newCard, this.props.editIndex)
    window.location.hash = 'cards'
  }

  render() {
    const header = this.props.type === 'new'
      ? 'Create a Flash Card'
      : 'Edit a Flash Card'

    const questionValue = this.props.cardDetails.question
    const answerValue = this.props.cardDetails.answer

    return (
      <form className="card border-0" onSubmit={this.handleSubmit}>
        <h5 className="card-title text-center">{header}</h5>
        <Input label="Question" value={questionValue} name="question" />
        <Input label="Answer" value={answerValue} name="answer" />
        <button type="submit" className="btn btn-primary mx-auto my-3">Save</button>
      </form>
    )
  }
}
