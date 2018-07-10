import React, { Component } from 'react'
import * as queryString from './query-string'

export default class CardList extends Component {
  constructor(props) {
    super(props)
    this.state = { transition: null, deleteIndex: null, heights: [] }
    this.handleClick = this.handleClick.bind(this)
    this.handleTransitionEnd = this.handleTransitionEnd.bind(this)
  }

  handleClick({ target }) {
    const deleteIndex = parseInt(target.getAttribute('data-index'), 10)
    this.setState({ transition: 'deleting', deleteIndex })
  }

  handleTransitionEnd() {
    const { deleteCard } = this.props
    deleteCard(this.state.deleteIndex)
    const heights = this.state.heights
    heights.splice(this.state.deleteIndex, 1)
    this.setState({ transition: null, heights })
  }

  componentDidMount() {
    const heights = []
    for (const key in this.refs) {
      heights.push(this.refs[key].clientHeight)
    }
    this.setState({ heights })
    console.log(this.refs)
  }

  render() {
    console.log(this.state)
    const { currentCards } = this.props
    const { deleteIndex, transition } = this.state
    return (
      <ul className="list-group fixed-width-700 mx-auto">
        {
          currentCards.map((card, index) => {
            const query = queryString.stringify({ 'cardIdx': index + 1 })

            let deleteClass = ''
            let remainingClass = ''
            let handleMethod = null
            let slideObj = null
            if (index === deleteIndex && transition) {
              deleteClass = ' slide slideOutLeft'
              handleMethod = this.handleTransitionEnd
            }
            else if (transition) {
              remainingClass = ' slide'
            }
            if (index > deleteIndex && transition && deleteIndex !== null) {
              slideObj = { transform: `translateY(${-1 * this.state.heights[deleteIndex] - 18}px)` }
            }

            return (
              <li 
                ref={'card-' + index} 
                className={'list-group-item mb-3 shadow-sm' + deleteClass + remainingClass} 
                style={slideObj}
                onTransitionEnd={handleMethod} 
                key={index}>
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