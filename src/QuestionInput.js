import React, { Component } from 'react'

export default class QuestionInput extends Component {
  render() {
    return (
      <div className="form-group">
        <label>Question</label>
        <input
          type="text"
          className="form-control"
          id="questionInput"
          placeholder="Enter question..."/>
      </div>
    )
  }
}
