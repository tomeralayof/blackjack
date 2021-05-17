import React from "react";

const Scores = ({ playerScore, dealerScore, rountBet }) => {
  return (
    <div className="scores-container">
      <p style={{ fontSize: "30px" }}>
        Total Bet :{" "}
        <span
          style={{ fontSize: "30px", fontFamily: "impact", color: "black" }}
        >
          {rountBet} $
        </span>
      </p>
      <p>
        Your Score Is : <span style={{ color: "black" }}>{playerScore}</span>
      </p>
      <p>
        Dealer Score Is : <span style={{ color: "black" }}>{dealerScore}</span>
      </p>
    </div>
  );
};

export default Scores;
