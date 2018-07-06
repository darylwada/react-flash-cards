import React from 'react'

export default function CarouselCards({ practiceCard, showAnswer }) {
  const [ visibility, icon ] = showAnswer
    ? [ 'visible', 'fas fa-chevron-circle-down' ]
    : [ 'd-none', 'fas fa-chevron-circle-right' ]
  return (
    <div className="card fixed-width-700 p-3 mx-auto shadow-sm">
      <h5 className="card-title">{practiceCard.question}</h5>
      <div id="show-answer" className="btn text-left">
        <i className={icon + ' mr-3'} /><span>Show Answer</span>
      </div>
      <div className={'card-body p-3 ' + visibility}>
        <p>{practiceCard.answer}</p>
      </div>
    </div>
  )
}
