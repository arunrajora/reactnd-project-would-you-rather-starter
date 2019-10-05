import { LOAD_USERS, SAVE_QUESTION, SAVE_ANSWER } from '../actionsTypes'

const users = (state = {}, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return action.users
    case SAVE_QUESTION:
      const {
        question: { author, id }
      } = action
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: [...state[author].questions, id]
        }
      }
    case SAVE_ANSWER:
      const { authedUser, qid, answer } = action.question
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      }
    default:
      return state
  }
}

export default users
