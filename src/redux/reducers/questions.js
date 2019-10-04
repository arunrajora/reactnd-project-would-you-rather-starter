import { LOAD_QUESTIONS, SAVE_QUESTION } from "../actionsTypes";

const questions = (state = {}, action) => {
  switch (action.type) {
    case LOAD_QUESTIONS:
      return action.questions;
    case SAVE_QUESTION:
      return {...state, [action.question.id]: action.question};
    default:
      return state;
  }
};

export default questions;
