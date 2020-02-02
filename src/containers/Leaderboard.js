import { connect } from "react-redux";

import { Leaderboard } from "../components";

const objectSize = object => Object.values(object).length;

const mapStateToProps = ({ users, authedUser }) => ({
  authedUser,
  users: Object.values(users)
    .sort(
      (a, b) =>
        b.questions.length +
        objectSize(b.answers) -
        a.questions.length -
        objectSize(a.answers)
    )
    .map(({ id, name, avatarURL, answers, questions }) => ({
      id,
      name,
      avatarURL,
      questionsAnswered: objectSize(answers),
      questionsCreated: questions.length
    }))
});

export default connect(mapStateToProps)(Leaderboard);
