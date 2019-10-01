import { showLoading, hideLoading } from "react-redux-loading-bar";

import { LOAD_USERS, LOAD_QUESTIONS } from "../actionsTypes";
import { getUsers, getQuestions } from "../../API";

const loadUsers = users => ({
  users,
  type: LOAD_USERS
});

const loadQuestions = questions => ({
  questions,
  type: LOAD_QUESTIONS
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
