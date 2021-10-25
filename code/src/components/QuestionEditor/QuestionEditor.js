import React, { useState } from 'react'
import 'components/QuestionEditor/questionEditor.css'
import { EditText } from 'components/QuestionEditor/EditText'

// import { Heading } from 'components/Heading'
import { Button } from 'components/Button'

export const QuestionEditor = ({ data, setData }) => {
  const [editing, setEditing] = useState(0)

  const handleEditQuestion = (question, type) => {
    console.log(question, type)
    if (type === 'edit') {
      editing === question.id ? setEditing(0) : setEditing(question.id)
    }
  }

  const Question = ({ question }) => {
    if (question.type === 'text') {
      return <EditText question={question} />
    } else if (question.type === 'radio') {
      return <div>{question.type}</div>
    } else if (question.type === 'dropdown') {
      return <div>{question.type}</div>
    } else if (question.type === 'range') {
      return <div>{question.type}</div>
    }
  }

  return (
    <div>
      {data.questions.map(question => {
        return (
          <div key={question.id}>
            {/* <Heading number={question.number} title={question.title} /> */}
            <div className='question-wrapper'>
              <p>{question.number + '. ' + question.title}</p>
              <div className='edit-button-container'>
                <Button
                  customStyle={'edit-button'}
                  type={'edit'}
                  onClick={() => handleEditQuestion(question, 'edit')}
                />
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
            {editing === question.id && <Question question={question} />}
          </div>
        )
      })}
    </div>
  )
}
