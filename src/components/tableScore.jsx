import React from "react";

const TableScore = ({ playerWin, playerLoose }) => {
  return (
    <div>
      <h2>Game Summary</h2>
      <table>
        <tr>
          <th>Player</th>
          <th>Wins</th>
          <th>Loose</th>
        </tr>
        <tr>
          <td>you</td>
          <td>{playerWin}</td>
          <td>{playerLoose}</td>
        </tr>
        <tr>
          <td>computer</td>
          <td>{playerLoose}</td>
          <td>{playerWin}</td>
        </tr>
      </table>
    </div>
  );
};

export default TableScore;
