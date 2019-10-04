import React from "react";

const Leaderboard = ({ users }) => (
  <div>
  <h2>Leaderboard</h2>
  <table>
  <tbody>
    {users.map(({name, id, avatarURL, questionsAnswered, questionsCreated}, index) => (
      <tr key={id}>
        <td>{index+1}.</td>
        <td><img src={avatarURL} alt={name}/></td>
        <td>{name}</td>
        <td>{questionsAnswered} Answer{questionsAnswered > 1 && "s"}</td>
        <td>{questionsCreated} Question{questionsCreated > 1 && "s"}</td>
        <td>Score: {questionsAnswered + questionsCreated}</td>
      </tr>
      ))}
    </tbody>
  </table>
  </div>
);

export default Leaderboard;
