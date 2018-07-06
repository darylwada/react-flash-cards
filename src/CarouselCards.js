import React from 'react'

export default function CarouselCards({ practiceCard, showAnswer, transition }) {
  const [ visibility, icon ] = showAnswer
    ? [ 'visible', 'fas fa-chevron-circle-down' ]
    : [ 'd-none', 'fas fa-chevron-circle-right' ]
  let transitionClass
  if (transition === 'forward') {
    transitionClass = ' slideOutForward'
  }
  if (transition === 'backward') {
    transitionClass = ' slideOutBackward'
  }
  if (transition === 'afterForward') {
    transitionClass = ' slideInForward'
  }
  if (transition === 'afterBackward') {
    transitionClass = ' slideInBackward'
  }
    console.log(transitionClass)
  return (
    <div className="card fixed-width-700 p-3 mx-auto shadow-sm overflow-hidden">
      <h5 className={'card-title' + transitionClass}>{practiceCard.question}</h5>
      <div id="show-answer"className="btn text-left">
        <i className={icon + ' mr-3'} /><span>Show Answer</span>
      </div>
      <div className={'card-body p-3 ' + visibility}>
        <p>{practiceCard.answer}</p>
      </div>
    </div>
  )
}
