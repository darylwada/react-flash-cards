import React from 'react'
import setTransitionAnimation from './setTransitionAnimation'

export default function CarouselCards({ practiceCard, showAnswer, transition }) {
  const [ visibility, icon ] = showAnswer
    ? [ ' open', 'fas fa-chevron-circle-right rotate down' ]
    : [ ' ', 'fas fa-chevron-circle-right rotate' ]
  const animationClass = setTransitionAnimation(transition)
  console.log(animationClass)
  return (
    <div className={'card p-3' + animationClass}>
      <h5 className="card-title">{practiceCard.question}</h5>
      <div id="show-answer" className="btn text-left mb-3">
        <i className={icon + ' mr-3'} /><span>Show Answer</span>
      </div>
      <div id="answer" className={'card-body py-0 wrap'}>
          <p className={'inner mb-0' + visibility}>{practiceCard.answer}</p>
      </div>
    </div>
  )
}