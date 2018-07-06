import React, { Component } from 'react'
import * as queryString from './query-string'

export default class CardList extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick({ target }) {
    const { deleteCard } = this.props
    const deleteIndex = parseInt(target.getAttribute('data-index'), 10)
    deleteCard(deleteIndex)
  }

  render() {
    const { currentCards } = this.props
    return (
      <ul className="list-group fixed-width-700 mx-auto">
        {
          currentCards.map((card, index) => {
            const query = queryString.stringify({ 'cardIdx': index + 1 })
            return (
              <li className="list-group-item mb-3 shadow-sm" key={index}>
                <h5 className="card-title">{card.question}</h5>
                <p className="card-body m-0 py-0">{card.answer}</p>
                <div className="row no-gutters justify-content-end">
                  <a href={'#cards' + query}>
                    <i className="fas fa-edit mr-2" />
                  </a>
                  <a href="#cards">
                    <i
                      data-index={index}
                      className="far fa-trash-alt"
                      onClick={this.handleClick} />
                  </a>
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }
}
