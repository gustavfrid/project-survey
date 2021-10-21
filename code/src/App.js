import React, { useState } from 'react'
import { FormWrapper } from 'components/FormWrapper'
import { FormSummary } from 'components/FormSummary'
import { Button } from 'components/Button'

import data from 'assets/data.json'

export const App = () => {
  const initialState = { nextQuestion: 0, questions: data.questions.length, answers: [] }

  const [state, setState] = useState(initialState)
  const [step, setStep] = useState(1)
  const [steps, setSteps] = useState([1])

  const handleChange = (e, nextQuestion, title, number, label, questionId, validated) => {
    // console.log(e.target)
    const { id, value } = e.target
    if (title.includes('color')) {
      console.log('color', value)
      handleTheme(value)
    }
    let newAnswers = [...state.answers]
    if (state.answers[number - 1]) {
      newAnswers[number - 1] = { ...newAnswers[number - 1], [id]: { value: value, label: label } }
    } else {
      newAnswers = [...newAnswers, { title: title, [id]: { value: value, label: label } }]
    }
    setState({
      ...state,
      [questionId]: validated,
      [id]: value,
      answers: [...newAnswers],
      nextQuestion: nextQuestion,
    })
  }

  const handleTheme = color => {
    setState({ ...state, theme: color })
  }

  const incrementStep = () => {
    let newSteps = ''
    if (step === state.questions) {
      newSteps = 'end'
    } else if (state.nextQuestion) {
      newSteps = state.nextQuestion
    } else {
      newSteps = step + 1
    }
    setStep(newSteps)
    setSteps([...steps, newSteps])
  }

  const decrementStep = () => {
    if (steps.length > 1) {
      const newSteps = steps.filter((e, i) => i < steps.length - 1)
      const newStep = newSteps[newSteps.length - 1]
      setStep(newStep)
      setSteps([...newSteps])
      setState({ ...state, nextQuestion: 0 })
    }
  }

  const handleRestart = () => {
    setStep(1)
    setState(initialState)
    setSteps([1])
  }

  return (
    <div className={'container'}>
      <FormWrapper
        step={step}
        state={state}
        handleChange={handleChange}
        incrementStep={incrementStep}
        decrementStep={decrementStep}
      />
      {step === 'end' && <FormSummary state={state} />}
      <div className='button-container'>
        {step === 'end' && <Button text={''} type={'up'} onClick={decrementStep} />}
        {step === 'end' && <Button text={'Reset'} onClick={handleRestart} />}
      </div>
    </div>
  )
}
