import { connect } from "react-redux";

import { UnansweredQuestion } from "../components";
import { answerQuestion } from "../redux/actions/shared";

const mapStateToProps = (
  { questions, users, authedUser, isAuthor },
  { questionId: qid }
) => {
  const question = questions[qid];
  if (!questions[qid]) {
    return {};
  }
  const { author } = question;
  return {
    authedUser,
    isAuthor: authedUser === author,
    author: users[author].name,
    avatarURL: users[author].avatarURL,
    optionOneText: question.optionOne.text,
    optionTwoText: question.optionTwo.text
  };
};

const mapDispatchToProps = { answerQuestion };

export default connect(mapStateToProps, mapDispatchToProps)(UnansweredQuestion);
