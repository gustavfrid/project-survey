import React, { useState } from 'react'
import 'components/QuestionEditor/editText.css'

export const EditText = ({ question, editing, setUpdatedQuestion }) => {
  const [questionToEdit, setQuestionToEdit] = useState({ ...question })
  // setQuestionToEdit({ ...question })
  console.log('[questionToEdit]', questionToEdit)

  const handleChangeQuestion = (e, type, id) => {
    console.log('[handleChangeQuestion]', e.target.value)
    if (type === 'title') {
      console.log('[handleChangeQuestion]: if')
      setQuestionToEdit({ ...questionToEdit, title: e.target.value })
    } else {
      console.log('[handleChangeQuestion]: else')
      const optionIndex = id.split('_')[2]
      const newOption = {
        ...questionToEdit.options[optionIndex],
        label: e.target.value,
        value: e.target.value,
      }
      const newOptions = [...questionToEdit.options]
      newOptions[optionIndex] = { ...newOption }
      console.log('[newOption]', newOption)
      setQuestionToEdit({
        ...questionToEdit,
        options: [...newOptions],
      })
    }
    // setUpdatedQuestion(questionToEdit)
  }

  console.log('[edit text]')

  return (
    <>
      {questionToEdit.id !== editing && <p>{questionToEdit.title}</p>}
      {questionToEdit.id === editing && (
        <div className='edit-question-container'>
          <p>{questionToEdit.title}</p>
          <label className='label-text-input label'>
            Question Title
            <span className='required'> *required</span>
            <input
              className='text-input'
              required={true}
              type='text'
              id={questionToEdit.id}
              placeholder={questionToEdit.title}
              value={questionToEdit.title}
              onChange={e => handleChangeQuestion(e, 'title', questionToEdit.id)}
            />
          </label>
          {questionToEdit.options.map(option => {
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
                  onChange={e => handleChangeQuestion(e, 'option', option.id)}
                />
              </label>
            )
          })}
        </div>
      )}
    </>
  )
}
