import React from 'react'

const UnansweredQuestion = ({
  questionId: qid,
  author,
  avatarURL,
  optionOneText,
  optionTwoText,
  answerQuestion,
  authedUser
}) => {
  return (
    <div>
      <img src={avatarURL} alt={author} />
      {author === authedUser ? 'You' : author}{' '}
      {author === authedUser ? 'asked' : 'asks'} Would you rather:
      <button
        onClick={() => answerQuestion({ authedUser, qid, answer: 'optionOne' })}
      >
        {optionOneText}
      </button>
      or
      <button
        onClick={() => answerQuestion({ authedUser, qid, answer: 'optionTwo' })}
      >
        {optionTwoText}
      </button>
    </div>
  )
}

export default UnansweredQuestion
