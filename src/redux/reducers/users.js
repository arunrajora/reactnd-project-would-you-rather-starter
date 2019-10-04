import { LOAD_USERS, SAVE_QUESTION } from "../actionsTypes";

const users = (state = {}, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return action.users;
    case SAVE_QUESTION:
      const {question: {author, id}} = action
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: [...state[author].questions, id]
        }
      };
    default:
      return state;
  }
};

export default users;
