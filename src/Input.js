import React from 'react'

export default function Input({ label, placeholder, name }) {
  return (
    <div className="form-group my-3">
      <label>{label}</label>
      <input
        type="text"
        className="form-control"
        placeholder={placeholder}
        name={name}/>
    </div>
  )
}
