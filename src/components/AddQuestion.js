import React, { useState } from 'react';
import { Form, Container, Button, Segment, Divider } from 'semantic-ui-react';

const AddQuestion = ({ authedUser, handleCreateQuestion, history }) => {
  const [optionOneText, setOptionOneText] = useState('');
  const [optionTwoText, setOptionTwoText] = useState('');

  return (
    <Container textAlign='center'>
      <Form
        onSubmit={event => {
          event.preventDefault();
          handleCreateQuestion({
            optionOneText,
            optionTwoText,
            authedUser
          }).then(() => history.push('/'));
        }}
      >
        Would You Rather
        <Segment>
          <Form.Input
            placeholder='first thing'
            value={optionOneText}
            onChange={({ target: { value } }) => setOptionOneText(value)}
          />
          <Divider horizontal>or</Divider>
          <Form.Input
            placeholder='second thing'
            value={optionTwoText}
            onChange={({ target: { value } }) => setOptionTwoText(value)}
          />
        </Segment>
        <Button type='submit' positive size='large'>
          Ask
        </Button>
      </Form>
    </Container>
  );
};

export default AddQuestion;
