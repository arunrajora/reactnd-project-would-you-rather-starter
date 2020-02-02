import { connect } from "react-redux";

import { QuestionDetails } from "../components";

const mapStateToProps = (
  { users, authedUser, questions },
  {
    match: {
      params: { question_id: questionId }
    }
  }
) => ({
  questionId,
  exists: questions.hasOwnProperty(questionId),
  isAnswered: users[authedUser].answers.hasOwnProperty(questionId)
});

export default connect(mapStateToProps)(QuestionDetails);
