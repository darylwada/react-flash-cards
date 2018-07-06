import React, { Component, Fragment } from 'react'
import Nav from './Nav'
import Form from './Form'
import CardList from './CardList'
import CardListEmpty from './CardListEmpty'
import Practice from './Practice'
import parseHash from './parse-hash'

export default class App extends Component {
  constructor(props) {
    super(props)
    const { path, params } = parseHash(window.location.hash)
    const cards = localStorage.getItem('cards')
    this.state = {
      path,
      params,
      cards: JSON.parse(cards) || [],
      practiceIndex: 0,
      showAnswer: false
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.deleteCard = this.deleteCard.bind(this)
    this.toggleShowAnswer = this.toggleShowAnswer.bind(this)
    this.handleCarouselControls = this.handleCarouselControls.bind(this)
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const { path, params } = parseHash(window.location.hash)
      this.setState({ path, params })
    })
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('cards', JSON.stringify(this.state.cards))
    })
  }

  addCard(newCard) {
    const cards = [...this.state.cards, newCard]
    this.setState({ cards })
  }

  editCard(newCard) {
    const { params } = this.state
    const editIndex = parseInt(params.cardIdx, 10) - 1
    const cards = this.state.cards.map((card, index) => {
      if (index === editIndex) return newCard
      return card
    })
    this.setState({ cards })
  }

  deleteCard(deleteIndex) {
    const cards = [...this.state.cards]
    cards.splice(deleteIndex, 1)
    this.setState({ cards })
  }

  handleFormSubmit(newCard) {
    this.state.params.hasOwnProperty('cardIdx')
      ? this.editCard(newCard)
      : this.addCard(newCard)
  }

  toggleShowAnswer() {
    const showAnswer = !this.state.showAnswer
    this.setState({ showAnswer })
  }

  handleCarouselControls(control) {
    const { cards } = this.state
    let { practiceIndex, showAnswer } = this.state
    if (control === 'next' && practiceIndex < cards.length - 1) {
      practiceIndex++
      showAnswer = false
    }
    if (control === 'prev' && practiceIndex > 0) {
      practiceIndex--
      showAnswer = false
    }
    this.setState({ practiceIndex, showAnswer })
  }

  renderForm() {
    const { cards, params } = this.state
    const editIndex = parseInt(params.cardIdx, 10) - 1
    const cardToEdit = cards[editIndex] || null
    return <Form
      cardToEdit={cardToEdit}
      handleFormSubmit={this.handleFormSubmit} />
  }

  renderCards() {
    if (this.state.params.cardIdx) return this.renderForm()
    return this.state.cards.length > 0
      ? <CardList
        currentCards={this.state.cards}
        deleteCard={this.deleteCard} />
      : <CardListEmpty />
  }

  renderPractice() {
    const { cards, practiceIndex, showAnswer } = this.state
    return <Practice
      practiceCard={cards[practiceIndex]}
      showAnswer={showAnswer}
      toggleShowAnswer={this.toggleShowAnswer}
      handleCarouselControls={this.handleCarouselControls} />
  }

  renderView() {
    switch (this.state.path) {
      case 'new-card':
        return this.renderForm()
      case 'cards':
        return this.renderCards()
      case 'practice':
        return this.renderPractice()
      default:
        return this.renderCards()
    }
  }

  render() {
    return (
      <Fragment>
        <Nav path={this.state.path}/>
        {this.renderView()}
      </Fragment>
    )
  }
}
