import React, { Component } from 'react'
import QuestionInput from './QuestionInput'

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
      </form>
    )
  }
}
