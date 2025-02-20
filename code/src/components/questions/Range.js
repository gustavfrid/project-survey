import React from 'react'
import 'components/questions/range.css'
import { Button } from 'components/Button'
import { Heading } from 'components/Heading'

export const Range = ({ state, handleChange, data, step, incrementStep, decrementStep }) => {
  const checkValid = e => {
    if (data.required && e.target.value) {
      return true
    } else {
      return false
    }
  }

  const onChangeHandler = (e, option) => {
    let validated = checkValid(e)
    handleChange(e, option.next_question, data.title, data.number, 'Answer', data.id, validated)
  }

  return (
    <>
      <Heading number={data.number} title={data.title} />
      {data.options.map(option => {
        return (
          <label className='label-range label' key={option.id}>
            {option.label}

            <input
              className='range'
              type='range'
              min={option.min}
              max={option.max}
              id={data.type + data.id}
              value={state[data.type + data.id]}
              onChange={e => onChangeHandler(e, option)}
            />
          </label>
        )
      })}
      <span className='required'>{data.required ? ' *required' : ''}</span>
      <div className='button-container'>
        <Button disabled={step === 0} text={''} type={'up'} onClick={decrementStep} />
        <Button
          disabled={step === 'end' || (!state[data.id] && data.required)}
          text={''}
          type={'down'}
          onClick={incrementStep}
        />
      </div>
    </>
  )
}
