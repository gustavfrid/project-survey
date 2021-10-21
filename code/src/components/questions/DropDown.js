import React from 'react'
import 'components/questions/dropDown.css'
import { Button } from 'components/Button'

export const DropDown = ({ state, handleChange, data, step, incrementStep, decrementStep }) => {
  // generate object with next question
  const nextQuestion = data.options.reduce(
    (o, option) => ({ ...o, [option.value]: option.next_question }),
    {}
  )
  console.log(nextQuestion)

  const checkValid = e => {
    if (data.required && e.target.value) {
      return true
    } else {
      return false
    }
  }
  const onChangeHandler = e => {
    let validated = checkValid(e)
    handleChange(
      e,
      nextQuestion[e.target.value],
      data.title,
      data.number,
      'Answer',
      data.id,
      validated
    )
  }

  return (
    <>
      <h2>{data.title}</h2>
      <select
        className='dropdown'
        name='select'
        id={data.type + data.id}
        value={state[data.type + data.id]}
        onChange={e => onChangeHandler(e)}>
        {data.options.map(option => {
          return (
            <option hidden={option.hidden} key={option.label + data.id} value={option.value}>
              {option.label}
            </option>
          )
        })}
      </select>
      <div className='button-container'>
        <Button disabled={step === 1} text={'^'} onClick={decrementStep} />
        <Button disabled={step === 'end' || !state[data.id]} text={'v'} onClick={incrementStep} />
      </div>
    </>
  )
}
