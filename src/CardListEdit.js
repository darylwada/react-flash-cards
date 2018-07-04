import React, { Component } from 'react'
import Input from './Input'

export default class NewCard extends Component {
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

    this.props.updateCardList(newCard)
    window.location.hash = 'cards'
  }

  render() {
    return (
      <form className="card border-0" onSubmit={this.handleSubmit}>
        <h5 className="card-title text-center">Edit a Flash Card</h5>
        <Input label="Question" value={this.props.details.question} name="question" />
        <Input label="Answer" value={this.props.details.answer} name="answer" />
        <button type="submit" className="btn btn-primary mx-auto my-3">Save</button>
      </form>
    )
  }
}
