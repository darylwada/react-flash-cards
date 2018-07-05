import React, { Component } from 'react'
import getFormData from './getFormData'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const newCard = getFormData(event.target)
    const { type, addToCardList, editCardList, params } = this.props
    const editIndex = parseInt(params.cardIdx, 10) - 1

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
    const { type, params, cardList } = this.props
    const editIndex = parseInt(params.cardIdx, 10) - 1
    const cardDetails = cardList[editIndex]
    const { question, answer } = cardDetails || { question: '', answer: '' }
    const header = type === 'new'
      ? 'Create a Flash Card'
      : 'Edit a Flash Card'

    return (
      <form className="card border-0" key={type} onSubmit={this.handleSubmit}>
        <h5 className="card-title text-center">{header}</h5>
        <div className="form-group my-3">
          <label htmlFor="question">Question</label>
          <input
            id="question"
            type="text"
            className="form-control"
            defaultValue={question}
            name='question' />
        </div>
        <div className="form-group my-3">
          <label htmlFor="answer">Answer</label>
          <input
            id="answer"
            type="text"
            className="form-control"
            defaultValue={answer}
            name='answer' />
        </div>
        <button type="submit" className="btn btn-primary mx-auto my-3">Save</button>
      </form>
    )
  }
}
