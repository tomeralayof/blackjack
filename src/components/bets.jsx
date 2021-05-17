import React from "react";

const Bets = ({ bet1, bet10, bet100, bet500, isDealClicked }) => {
  return (
    <div className="bets" style={{ marginTop: "20px" }}>
      {!isDealClicked && (
        <React.Fragment>
          <button onClick={() => bet1()}>1$</button>
          <button onClick={() => bet10()}>10$</button>
          <button onClick={() => bet100()}>100$</button>
          <button onClick={() => bet500()}>500$</button>
        </React.Fragment>
      )}
    </div>
  );
};

export default Bets;
