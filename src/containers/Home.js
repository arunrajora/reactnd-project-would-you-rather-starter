import { connect } from 'react-redux'

import { Home } from '../components'

const sortQuestionsByTimestamp = questions =>
  questions.sort((a, b) => b.timestamp - a.timestamp)
const isAnswered = (id, user) => user.answers.hasOwnProperty(id)
const getAnsweredQuestions = (questions, user) =>
  sortQuestionsByTimestamp(questions.filter(({ id }) => isAnswered(id, user)))
const getUnAnsweredQuestions = (questions, user) =>
  sortQuestionsByTimestamp(questions.filter(({ id }) => !isAnswered(id, user)).map(question => question))
const formatQuestions = (questions, users, authedUser) =>
  questions.map(({ id, author, optionOne, optionTwo }) => ({
    id,
    optionOneText: optionOne.text,
    optionTwoText: optionTwo.text,
    authorName: author === authedUser ? 'You' : users[author].name,
    avatarURL: users[author].avatarURL
  }))

const mapStateToProps = ({ questions, authedUser, users }) => ({
  answeredQuestions: formatQuestions(getAnsweredQuestions(
    Object.values(questions),
    users[authedUser]
  ), users, authedUser),
  unansweredQuestions: formatQuestions(getUnAnsweredQuestions(
    Object.values(questions),
    users[authedUser]
  ), users, authedUser)
})

export default connect(mapStateToProps)(Home)
