import React from "react";

const Scores = ({ playerScore, dealerScore, rountBet, isWin, isGameOver }) => {
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
        Game Result :
        {/* {!isGameOver && (
          <span style={{ color: "yellow", fontSize: "30px" }}>
            {" "}
            on process ...
          </span>
        )} */}
        {!isWin && isGameOver && (
          <span style={{ color: "red", fontSize: "30px" }}> Loose</span>
        )}
        {isWin && isGameOver && (
          <span style={{ color: "green", fontSize: "30px" }}> Win</span>
        )}
      </p>
    </div>
  );
};

export default Scores;
