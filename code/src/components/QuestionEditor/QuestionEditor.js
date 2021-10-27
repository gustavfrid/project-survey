import React, { useState } from 'react'
import 'components/QuestionEditor/questionEditor.css'
import { EditText } from 'components/QuestionEditor/EditText'

// import { Heading } from 'components/Heading'
import { Button } from 'components/Button'

export const QuestionEditor = ({ data, setData }) => {
  const [editing, setEditing] = useState(0)
  const [updatedQuestion, setUpdatedQuestion] = useState({})

  const handleEditQuestion = (question, type) => {
    console.log(question, type)
    if (type === 'edit') {
      editing === question.id ? setEditing(0) : setEditing(question.id)
    }
  }

  const handleUpdateData = newQuestion => {
    console.log('[handleUpdateData, newQuestion]', newQuestion)
    console.log('[handleUpdateData, data]', data.questions)
    const newQuestions = [...data.questions]
    newQuestions[newQuestion.number - 1] = { ...newQuestion }
    console.log('[handleUpdateData, newQuestions]', newQuestions)
    const newData = { questions: [...newQuestions] }
    console.log('[handleUpdateData, newData]', newData)
    setData(newData)
  }

  const Question = ({ question, editing }) => {
    if (question.type === 'text') {
      // setQuestionToEdit({ ...question })
      return (
        <EditText question={question} editing={editing} setUpdatedQuestion={setUpdatedQuestion} />
      )
    } else if (question.type === 'radio') {
      return <div>{question.type}</div>
    } else if (question.type === 'dropdown') {
      return <div>{question.type}</div>
    } else if (question.type === 'range') {
      return <div>{question.type}</div>
    }
  }

  return (
    <>
      {data.questions.map(question => {
        return (
          <div key={question.id} className='question-wrapper'>
            <p>{question.number}</p>
            <Question question={question} editing={editing} />
            <div className='edit-button-container'>
              {editing === question.id && (
                <Button customStyle={'edit-button'} text={'save'} onClick={handleUpdateData} />
              )}
              {editing !== question.id && (
                <Button
                  customStyle={'edit-button'}
                  type={'edit'}
                  onClick={() => handleEditQuestion(question, 'edit')}
                />
              )}
              <Button
                customStyle={'edit-button'}
                type={'up'}
                onClick={() => handleEditQuestion(question, 'up')}
              />
              <Button
                customStyle={'edit-button'}
                type={'down'}
                onClick={() => handleEditQuestion(question, 'down')}
              />
            </div>
          </div>
        )
      })}
    </>
  )
}
