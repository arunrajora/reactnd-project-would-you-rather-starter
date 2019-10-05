import { LOAD_QUESTIONS, SAVE_QUESTION, SAVE_ANSWER } from '../actionsTypes'

const questions = (state = {}, action) => {
  switch (action.type) {
    case LOAD_QUESTIONS:
      return action.questions
    case SAVE_QUESTION:
      return { ...state, [action.question.id]: action.question }
    case SAVE_ANSWER:
      const { authedUser, qid, answer } = action.question
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser])
          }
        }
      }
    default:
      return state
  }
}

export default questions
