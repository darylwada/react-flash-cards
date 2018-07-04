import React from 'react'

export default function Input({ label, placeholder, value, name }) {
  console.log('Input: ' + value);
  return (
    <div className="form-group my-3">
      <label>{label}</label>
      <input
        type="text"
        className="form-control"
        defaultValue={value}
        name={name}/>
    </div>
  )
}
