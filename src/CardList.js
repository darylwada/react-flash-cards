import React, { Component } from 'react'
import * as queryString from './query-string'

export default class CardList extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    const { deleteCard } = this.props
    const deleteIndex = parseInt(event.target.closest('.list-group-item').id, 10)
    deleteCard(deleteIndex)
  }

  render() {
    const { currentCards } = this.props
    return (
      <ul className="list-group card border-0 w-100">
        {
          currentCards.map((card, index) => {
            const query = queryString.stringify({ 'cardIdx': index + 1 })
            return (
              <li className="list-group-item" key={index}>
                <h5 className="card-title">{card.question}</h5>
                <p className="card-body mb-0">{card.answer}</p>
                <div className="row no-gutters justify-content-end">
                  <a href={'#cards' + query}>
                    <i className="fas fa-edit mr-2"></i>
                  </a>
                  <a href="#cards">
                    <i className="far fa-trash-alt" onClick={this.handleClick}></i>
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

// export default function CardList({ currentCards, params }) {
//   return (
//     <ul className="list-group card border-0 w-100">
//       {
//         currentCards.map((card, index) => {
//           const query = queryString.stringify({ 'cardIdx': index + 1 })
//           return (
//             <li className="list-group-item" key={index}>
//               <h5 className="card-title">{card.question}</h5>
//               <p className="card-body mb-0">{card.answer}</p>
//               <div className="row no-gutters justify-content-end">
//                 <a href={'#cards' + query}>
//                   <i className="fas fa-edit mr-2"></i>
//                 </a>
//                 <a href="#cards">
//                   <i className="far fa-trash-alt"></i>
//                 </a>
//               </div>
//             </li>
//           )
//         })
//       }
//     </ul>
//   )
// }
