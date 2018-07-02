import React, { Component } from 'react'
import QuestionInput from './QuestionInput'
import AnswerInput from './AnswerInput'

export default class FlashCard extends Component {
  constructor(props) {
    super(props)
    this.state = { cards: [] }
  }

  handleSubmit() {
    this.setState({ cards: [] })
  }

  render() {
    return (
      <form className="form-group">
        <QuestionInput />
        <AnswerInput />
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    )
  }
}
