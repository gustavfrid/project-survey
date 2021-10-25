import React from 'react'

export const EditText = ({ question }) => {
  console.log(question.options)
  return (
    <div>
      {question.options.map(option => {
        return (
          <label className='label-text-input label' key={option.id}>
            {option.label}
            <span className='required'>{question.required ? ' *required' : ''}</span>
            <input
              className='text-input'
              required={question.required === 'true'}
              type='text'
              id={option.id}
              placeholder={option.placeholder}
              value={option.value}
              onChange={() => console.log('hej')}
            />
          </label>
        )
      })}
    </div>
  )
}
