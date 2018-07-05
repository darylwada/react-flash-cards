import React, { Component, Fragment } from 'react'

export default class CarouselControls extends Component {
  render() {
    return (
      <Fragment>
        <a id="prev" className="carousel-control-prev btn">
          <i className="fas fa-chevron-left"></i>
        </a>
        <a id="next" className="carousel-control-next btn">
          <i className="fas fa-chevron-right"></i>
        </a>
      </Fragment>
    )
  }
}
