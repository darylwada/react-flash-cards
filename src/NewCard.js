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
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h5 className="card-title text-center">Create a Flash Card</h5>
        <Input label="Question" placeholder="Example: What is 2 + 2?" name="question" />
        <Input label="Answer" placeholder ="Example: 4" name="answer" />
        <button type="submit" className="btn btn-primary mx-auto my-3">Save</button>
      </form>
    )
  }
}
