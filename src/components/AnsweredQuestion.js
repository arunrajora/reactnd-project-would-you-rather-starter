import React from 'react'

const calculatePercentage = (firstVotes, secondVotes) =>
  Math.round((firstVotes / (firstVotes + secondVotes)) * 100)

const AnsweredQuestion = ({
  author,
  avatarURL,
  optionOneText,
  optionTwoText,
  optionOneVotes,
  optiontwoVotes,
  optionSelected
}) => (
  <div>
    <img src={avatarURL} alt={author} />
    {author} asked Would You Rather:
    <br />
    {optionOneText}
    {optionOneVotes} out of {optionOneVotes + optiontwoVotes} votes
    {calculatePercentage(optionOneVotes, optiontwoVotes)}%
    {optionSelected === 'optionOne' && 'Your choice'}
    <br />
    or
    <br />
    {optionTwoText}
    {optiontwoVotes} out of {optionOneVotes + optiontwoVotes} votes
    {100 - calculatePercentage(optionOneVotes, optiontwoVotes)}%
    {optionSelected === 'optionTwo' && 'Your choice'}
  </div>
)

export default AnsweredQuestion
