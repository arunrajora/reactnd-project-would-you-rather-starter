import React from "react";
import { Redirect } from "react-router";
import { Container, Header, Card } from "semantic-ui-react";

const Login = ({ users, authenticateUser, isAuthenticated, location }) =>
  isAuthenticated ? (
    <Redirect to={location.state || "/"} />
  ) : (
    <Container>
      <Header as="h2">Login</Header>
      <p>Select user:</p>
      <Card.Group centered stackable>
        {users.map(({ id, name, avatarURL }) => (
          <Card
            raised
            key={id}
            onClick={() => authenticateUser(id)}
            header={name}
            image={avatarURL}
          />
        ))}
      </Card.Group>
    </Container>
  );

export default Login;
