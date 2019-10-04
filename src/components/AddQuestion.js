import React, { useState } from 'react'

const AddQuestion = ({ authedUser, handleCreateQuestion, history }) => {
  const [optionOneText, setOptionOneText] = useState('')
  const [optionTwoText, setOptionTwoText] = useState('')

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        handleCreateQuestion({ optionOneText, optionTwoText, authedUser }).then(
          () => history.push('/')
        )
      }}
    >
      <div>
        Would You Rather
        <input
          type='text'
          value={optionOneText}
          onChange={({ target: { value } }) => setOptionOneText(value)}
        />
        or
        <input
          type='text'
          value={optionTwoText}
          onChange={({ target: { value } }) => setOptionTwoText(value)}
        />
        ?
        <input type='submit' />
      </div>
    </form>
  )
}

export default AddQuestion
