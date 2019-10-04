import React, { useState } from 'react'

const Home = ({ answeredQuestions, unansweredQuestions, history }) => {
  const [selectedTab, changeTab] = useState('unanswered')
  return (
    <div>
      <button onClick={() => changeTab('unanswered')}>
        Unanswered Questions
      </button>
      <button onClick={() => changeTab('answered')}>Answered Questions</button>
      {(selectedTab === 'unanswered'
        ? unansweredQuestions
        : answeredQuestions
      ).map(({ id, authorName, avatarURL, optionOneText, optionTwoText }) => (
        <div key={id} onClick={() => history.push(`questions/${id}`)}>
          <img src={avatarURL} alt={authorName} />
          {authorName}{' '}
          {selectedTab === 'answered' || authorName === 'You'
            ? 'asked'
            : 'asks'}{' '}
          Would You Rather <b>{optionOneText}</b> or <b>{optionTwoText}</b>?
        </div>
      ))}
    </div>
  )
}

export default Home
