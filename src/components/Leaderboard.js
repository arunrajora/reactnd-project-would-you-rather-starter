import React from "react";
import { Image, Table } from "semantic-ui-react";

const Leaderboard = ({ users, authedUser }) => (
  <div>
    <h2>Leaderboard</h2>
    <Table>
      <Table.Body>
        {users.map(
          (
            { name, id, avatarURL, questionsAnswered, questionsCreated },
            index
          ) => (
            <Table.Row key={id} active={authedUser === id}>
              <Table.Cell>{index + 1}.</Table.Cell>
              <Table.Cell>
                <Image circular size="tiny" src={avatarURL} alt={name} />
              </Table.Cell>
              <Table.Cell>{name}</Table.Cell>
              <Table.Cell>
                {questionsAnswered} Answer{questionsAnswered > 1 && "s"}
              </Table.Cell>
              <Table.Cell>
                {questionsCreated} Question{questionsCreated > 1 && "s"}
              </Table.Cell>
              <Table.Cell>
                Score: {questionsAnswered + questionsCreated}
              </Table.Cell>
            </Table.Row>
          )
        )}
      </Table.Body>
    </Table>
  </div>
);

export default Leaderboard;
