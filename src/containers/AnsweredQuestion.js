import { connect } from 'react-redux';

import { AnsweredQuestion } from '../components';

const mapStateToProps = (
  { questions, users },
  { questionId: id },
  authedUser
) => ({
  isAuthor: questions[id].author === authedUser,
  author: users[questions[id].author].name,
  avatarURL: users[questions[id].author].avatarURL,
  optionOneText: questions[id].optionOne.text,
  optionTwoText: questions[id].optionTwo.text,
  optionOneVotes: questions[id].optionOne.votes.length,
  optiontwoVotes: questions[id].optionTwo.votes.length,
  optionSelected: users[questions[id].author].answers[id]
});

export default connect(mapStateToProps)(AnsweredQuestion);
