import React, { Component } from 'react'

export default class QuestionInput extends Component {
  render() {
    return (
      <div className="form-group my-3">
        <label>Question</label>
        <input
          type="text"
          className="form-control"
          id="questionInput"
          placeholder="Example: What is 2 + 2?"
          name="question"/>
      </div>
    )
  }
}
