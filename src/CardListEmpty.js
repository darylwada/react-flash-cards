import React from 'react'

export default function Cards() {
  return (
    <div className="card border-0 w-100">
      <h5 className="card-title text-center">You have no flash cards.</h5>
      <a className="mx-auto my-5" href={'#new-card'}>
        <button className="btn btn-primary">Make One</button>
      </a>
    </div>
  )
}
