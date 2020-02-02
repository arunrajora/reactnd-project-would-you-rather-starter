import React from "react";
import {
  Image,
  Button,
  Header,
  Container,
  Divider,
  Segment,
  Icon
} from "semantic-ui-react";

const UnansweredQuestion = ({
  questionId: qid,
  author,
  avatarURL,
  optionOneText,
  optionTwoText,
  answerQuestion,
  isAuthor,
  authedUser
}) => {
  return (
    <Container textAlign="center">
      <Image size="tiny" avatar src={avatarURL} alt={author} />
      <Header>
        {isAuthor ? "You asked" : `${author} asks`}
        <br />
        Would you rather:
      </Header>
      <Segment>
        <Button
          color="green"
          onClick={() =>
            answerQuestion({ authedUser, qid, answer: "optionOne" })
          }
        >
          {optionOneText}
        </Button>
        <Divider horizontal>or</Divider>
        <Button
          color="blue"
          onClick={() =>
            answerQuestion({ authedUser, qid, answer: "optionTwo" })
          }
        >
          {optionTwoText}
        </Button>
      </Segment>
      <Icon name="question" size="huge" />
    </Container>
  );
};

export default UnansweredQuestion;
