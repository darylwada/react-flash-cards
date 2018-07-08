export default function setTransitionAnimation(transition) {
  if (transition === 'transition-next') {
    return ' slideOutLeft'
  }
  if (transition === 'next') {
    return ' slideInLeft'
  }
  if (transition === 'transition-prev') {
    return ' slideOutRight'
  }
  if (transition === 'prev') {
    return ' slideInRight'
  }
  return ''
}