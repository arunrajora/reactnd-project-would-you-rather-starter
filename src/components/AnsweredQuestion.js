import React from "react";
import {
  Image,
  Header,
  Container,
  Divider,
  Segment,
  Progress,
  Label
} from "semantic-ui-react";

const calculatePercentage = (firstVotes, secondVotes) =>
  Math.round((firstVotes / (firstVotes + secondVotes)) * 100);

const YourChoice = () => (
  <Label size="mini" color="violet" content="Your choice" icon="star" />
);

const QuestionAnsweredOption = ({
  text,
  percentage,
  votes,
  totalVotes,
  optionSelected,
  color
}) => (
  <>
    <Label color={color} size="large" content={text} />
    <Progress
      color={color}
      label={`${votes} out of ${totalVotes} votes`}
      percent={percentage}
      progress
    />
    {optionSelected && <YourChoice />}
  </>
);

const AnsweredQuestion = ({
  author,
  isAuthor,
  avatarURL,
  optionOneText,
  optionTwoText,
  optionOneVotes,
  optiontwoVotes,
  optionSelected
}) => (
  <Container textAlign="center">
    <Image size="tiny" avatar src={avatarURL} alt={author} />
    <Header>{isAuthor ? "You" : author} asked Would You Rather:</Header>
    <Segment>
      <QuestionAnsweredOption
        color="green"
        text={optionOneText}
        percentage={calculatePercentage(optionOneVotes, optiontwoVotes)}
        votes={optionOneVotes}
        totalVotes={optionOneVotes + optiontwoVotes}
        optionSelected={optionSelected === "optionOne"}
      />
      <Divider horizontal>or</Divider>
      <QuestionAnsweredOption
        color="blue"
        text={optionTwoText}
        percentage={100.0 - calculatePercentage(optionOneVotes, optiontwoVotes)}
        votes={optiontwoVotes}
        totalVotes={optionOneVotes + optiontwoVotes}
        optionSelected={optionSelected === "optionTwo"}
      />
    </Segment>
  </Container>
);

export default AnsweredQuestion;
