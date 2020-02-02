import { showLoading, hideLoading } from "react-redux-loading-bar";
import { authenticateUser } from "./authedUser";

import {
  LOAD_USERS,
  LOAD_QUESTIONS,
  SAVE_QUESTION,
  SAVE_ANSWER
} from "../actionsTypes";
import {
  getUsers,
  getQuestions,
  saveQuestion,
  saveQuestionAnswer
} from "../../API";

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

const addAnswer = question => ({
  question,
  type: SAVE_ANSWER
});

export const loadInitialData = () => dispatch => {
  dispatch(showLoading());
  return Promise.all([getUsers(), getQuestions()]).then(
    ([users, questions]) => {
      dispatch(loadUsers(users));
      dispatch(loadQuestions(questions));
      dispatch(hideLoading());
      dispatch(authenticateUser("sarahedo"));
    }
  );
};

export const handleCreateQuestion = ({
  optionOneText,
  optionTwoText,
  authedUser
}) => dispatch => {
  dispatch(showLoading());
  return saveQuestion({
    optionOneText,
    optionTwoText,
    author: authedUser
  }).then(question => {
    dispatch(addQuestion(question));
    dispatch(hideLoading());
  });
};

export const answerQuestion = ({ authedUser, qid, answer }) => dispatch => {
  dispatch(showLoading());
  return saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
    dispatch(addAnswer({ authedUser, qid, answer }));
    dispatch(hideLoading());
  });
};
