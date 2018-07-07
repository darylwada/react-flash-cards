import React from 'react'
import setTransitionAnimation from './setTransitionAnimation'

export default function CarouselCards({ practiceCard, showAnswer, transition }) {
  const [ visibility, icon ] = showAnswer
    ? [ 'visible', 'fas fa-chevron-circle-down' ]
    : [ 'd-none', 'fas fa-chevron-circle-right' ]
  const animationClass = setTransitionAnimation(transition)
  console.log(animationClass)
  return (
    <div className={'card p-3 shadow-sm' + animationClass}>
      <h5 className="card-title">{practiceCard.question}</h5>
      <div id="show-answer"className="btn text-left">
        <i className={icon + ' mr-3'} /><span>Show Answer</span>
      </div>
      <div className={'card-body p-3 ' + visibility}>
        <p>{practiceCard.answer}</p>
      </div>
    </div>
  )
}
