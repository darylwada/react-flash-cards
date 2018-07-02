import React, { Component } from 'react'

export default class AnswerInput extends Component {
  render() {
    return (
      <div className="form-group my-3">
        <label>Answer</label>
        <input
          type="text"
          className="form-control"
          id="answerInput"
          placeholder="Example: 4"
          name="answer"/>
      </div>
    )
  }
}
