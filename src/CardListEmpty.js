import React, { Fragment } from 'react'

export default function Cards() {
  return (
    <Fragment>
      <h5 className="card-title text-center my-3">You have no flash cards.</h5>
      <a className="mx-auto my-5" href={'#new-card'}>
        <button className="btn btn-primary">Make One</button>
      </a>
    </Fragment>
  )
}
