import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from "./_DATA";

export const getUsers = () => _getUsers();

export const getQuestions = () => _getQuestions();

export const saveQuestion = ({ optionOneText, optionTwoText, author }) =>
  _saveQuestion({ optionOneText, optionTwoText, author });

export const saveQuestionAnswer = ({ authedUser, qid, answer }) =>
  _saveQuestionAnswer({ authedUser, qid, answer });
