import React from 'react';
import { UnansweredQuestion, AnsweredQuestion } from '../containers';
import { Redirect } from 'react-router-dom';

const QuestionDetails = ({ questionId, isAnswered, exists }) => {
  if (!exists) {
    return <Redirect to='/NotFound' />;
  }
  return isAnswered ? (
    <AnsweredQuestion questionId={questionId} />
  ) : (
    <UnansweredQuestion questionId={questionId} />
  );
};

export default QuestionDetails;
