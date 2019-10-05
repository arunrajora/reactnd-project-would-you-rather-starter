import { connect } from "react-redux";

import { UnansweredQuestion } from "../components";
import { answerQuestion } from "../redux/actions/shared";

const mapStateToProps = ({questions, users, authedUser}, {questionId: qid}) => ({
     authedUser,
     author: users[questions[qid].author].name,
     avatarURL: users[questions[qid].author].avatarURL,
      optionOneText: questions[qid].optionOne.text,
       optionTwoText: questions[qid].optionTwo.text
});

const mapDispatchToProps = { answerQuestion };

export default connect(mapStateToProps, mapDispatchToProps)(UnansweredQuestion);
