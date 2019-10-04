import { showLoading, hideLoading } from "react-redux-loading-bar";

import { LOAD_USERS, LOAD_QUESTIONS, SAVE_QUESTION } from "../actionsTypes";
import { getUsers, getQuestions, saveQuestion } from "../../API";

const loadUsers = users => ({
  users,
  type: LOAD_USERS
});

const loadQuestions = questions => ({
  questions,
  type: LOAD_QUESTIONS
});

const addQuestion = question => ({
  question,
  type: SAVE_QUESTION
});

export const loadInitialData = () => dispatch => {
  dispatch(showLoading());
  return Promise.all([getUsers(), getQuestions()]).then(
    ([users, questions]) => {
      dispatch(loadUsers(users));
      dispatch(loadQuestions(questions));
      dispatch(hideLoading());
    }
  );
};

export const handleCreateQuestion = ({optionOneText, optionTwoText, authedUser}) => dispatch => {
  dispatch(showLoading());
  return saveQuestion({optionOneText, optionTwoText, author: authedUser}).then((question) => {
    dispatch(addQuestion(question));
    dispatch(hideLoading());
  })
}