import React, { useState } from 'react'

export const EditText = ({ question }) => {
  const [changedQuestion, setChangedQuestion] = useState({ ...question })
  console.log(changedQuestion)
  const handleChangeQuestion = params => {}

  return (
    <div className='edit-question-container'>
      <label className='label-text-input label'>
        Question Title
        <span className='required'> *required</span>
        <input
          className='text-input'
          required={true}
          type='text'
          id={question.id}
          placeholder={question.title}
          value={question.title}
          onChange={() => console.log('hej')}
        />
      </label>
      {question.options.map(option => {
        return (
          <label className='label-text-input label' key={option.id}>
            Label
            <span className='required'> *required</span>
            <input
              className='text-input'
              required={true}
              type='text'
              id={option.id}
              placeholder={option.label}
              value={option.label}
              onChange={() => console.log('hej')}
            />
          </label>
        )
      })}
    </div>
  )
}
