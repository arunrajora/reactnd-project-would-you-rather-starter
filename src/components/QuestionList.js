import React from "react";
import { Card, Image } from "semantic-ui-react";
import moment from "moment";

const QuestionList = ({ questions, history, selectedTab }) => (
  <Card.Group centered>
    {questions.map(
      ({
        id,
        authorName,
        avatarURL,
        optionOneText,
        optionTwoText,
        timestamp
      }) => (
        <Card key={id} onClick={() => history.push(`questions/${id}`)}>
          <Card.Content>
            <Image bordered rounded floated="left" avatar src={avatarURL} />
            <Card.Header>{authorName}</Card.Header>
            <Card.Meta>{moment(timestamp).fromNow()}</Card.Meta>
            <Card.Description>
              Would You Rather <b>{optionOneText}</b> or <b>{optionTwoText}</b>?
            </Card.Description>
          </Card.Content>
        </Card>
      )
    )}
  </Card.Group>
);
export default QuestionList;
