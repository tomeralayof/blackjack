import React from "react";

const Scores = ({
  playerScore,
  dealerScore,
  rountBet,
  isWin,
  isGameOver,
  isEqual,
}) => {
  return (
    <div className="scores-container">
      <p style={{ fontSize: "30px" }}>
        Total Bet :{" "}
        <span
          style={{ fontSize: "30px", fontFamily: "impact", color: "green" }}
        >
          {rountBet} $
        </span>
      </p>
      <p>
        Your Score Is :{" "}
        <span style={{ color: "red", fontSize: "30px" }}>{playerScore}</span>
      </p>
      <p>
        Dealer Score Is :{" "}
        <span style={{ color: "red", fontSize: "30px" }}>{dealerScore}</span>
      </p>

      <p>
        Round Status :
        {!isGameOver && (
          <span style={{ color: "yellow", fontSize: "30px" }}>
            {" "}
            on progress ...
          </span>
        )}
        {!isWin && isGameOver && !isEqual && (
          <span style={{ color: "red", fontSize: "30px" }}> Loose</span>
        )}
        {isEqual && isGameOver && (
          <span style={{ color: "blue", fontSize: "30px" }}> Equal</span>
        )}
        {isWin && isGameOver && (
          <span style={{ color: "green", fontSize: "30px" }}> Win</span>
        )}
      </p>
    </div>
  );
};

export default Scores;
