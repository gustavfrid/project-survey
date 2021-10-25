import React from 'react'
import 'components/startSurvey.css'
import { Heading } from 'components/Heading'

export const StartSurvey = ({ setStep, incrementStep }) => {
  return (
    <div className='form'>
      <Heading title={'Start survey?'} />
      <div className='label'>
        <button className='button-start' onClick={incrementStep}>
          Start
        </button>
        <button className='button-start' onClick={() => setStep('edit')}>
          Edit Survey
        </button>
      </div>
    </div>
  )
}
