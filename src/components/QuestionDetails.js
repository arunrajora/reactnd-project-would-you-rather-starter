import React from 'react'
import { UnansweredQuestion, AnsweredQuestion } from '../containers'

const QuestionDetails = ({ questionId, isAnswered }) =>
  isAnswered ? (
    <AnsweredQuestion questionId={questionId} />
  ) : (
    <UnansweredQuestion questionId={questionId} />
  )

export default QuestionDetails
