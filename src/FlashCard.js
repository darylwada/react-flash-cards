import React, { Component } from 'react'
import QuestionInput from './QuestionInput'
import AnswerInput from './AnswerInput'

export default class FlashCard extends Component {
  constructor(props) {
    super(props)
    this.state = { cards: [] }
  }

  handleSubmit(event) {
    this.setState({ cards: [] })
  }

  render() {
    return (
      <form className="form-group card col-6 mx-auto d-flex align-self-center p-3">
        <h5 className="card-title text-center">Create a Flash Card</h5>
        <QuestionInput />
        <AnswerInput />
        <button type="submit" className="btn btn-primary mx-auto my-3" onSubmit={this.handleSubmit}>Save</button>
      </form>
    )
  }
}
