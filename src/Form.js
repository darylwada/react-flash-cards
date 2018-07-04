import React, { Component } from 'react'
import Input from './Input'
import getFormData from './getFormData'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const newCard = getFormData(event.target)
    const { type, addToCardList, editCardList, editIndex } = this.props

    switch (type) {
      case 'new':
        addToCardList(newCard)
        break
      case 'edit':
        editCardList(newCard, editIndex)
        break
    }

    window.location.hash = 'cards'
  }

  render() {
    const { type } = this.props
    const { question, answer } = this.props.cardDetails
    const header = type === 'new'
      ? 'Create a Flash Card'
      : 'Edit a Flash Card'

    return (
      <form className="card border-0" onSubmit={this.handleSubmit}>
        <h5 className="card-title text-center">{header}</h5>
        <Input label="Question" value={question} name="question" />
        <Input label="Answer" value={answer} name="answer" />
        <button type="submit" className="btn btn-primary mx-auto my-3">Save</button>
      </form>
    )
  }
}
