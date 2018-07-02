import React, { Component } from 'react'

export default class AnswerInput extends Component {
  render() {
    return (
      <div className="form-group">
        <label>Answer</label>
        <input
          type="text"
          className="form-control"
          id="answerInput"
          placeholder="Enter answer..."/>
      </div>
    )
  }
}
