import React from "react";
import { Card, Image, Label, Segment, Divider, Grid } from "semantic-ui-react";
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
        <Card raised key={id} onClick={() => history.push(`questions/${id}`)}>
          <Card.Content>
            <Image bordered rounded floated="left" avatar src={avatarURL} />
            <Card.Header>{authorName}</Card.Header>
            <Card.Meta>{moment(timestamp).fromNow()}</Card.Meta>
            <Card.Description>
              <Segment padded basic>
                <Grid columns={2} stackable textAlign="center">
                  <Divider vertical>Or</Divider>

                  <Grid.Row verticalAlign="middle">
                    <Grid.Column>
                      <Label.Group size="large">
                        <Label color="green">{optionOneText}</Label>
                      </Label.Group>
                    </Grid.Column>

                    <Grid.Column>
                      <Label.Group size="large">
                        <Label color="blue">{optionTwoText}</Label>
                      </Label.Group>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            </Card.Description>
          </Card.Content>
        </Card>
      )
    )}
  </Card.Group>
);
export default QuestionList;
