import React from 'react'

export const TextInput = props => {
  const { title, fields } = props.data
  const { state, handleChange } = props

  return (
    <>
      <h2>{title}</h2>
      {fields.map(field => {
        const { id, label, placeholder } = field
        return (
          <label key={id}>
            {label}
            <input
              type='text'
              id={id}
              placeholder={placeholder}
              value={state[id]}
              onChange={handleChange}
            />
            <p>Input:{state[id]}</p>
          </label>
        )
      })}
    </>
  )
}
