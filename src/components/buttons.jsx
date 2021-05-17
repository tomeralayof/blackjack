import React from "react";

const Buttons = ({
  randomCards,
  isDealClicked,
  hitCard,
  newGame,
  doubleBet,
  isShowBet,
  isDoubleClicked,
  stand,
}) => {
  return (
    <div className="button-container">
      {isDealClicked && <button onClick={() => hitCard()}>hit</button>}
      {isDealClicked && <button onClick={() => stand()}>stand</button>}
      {!isDealClicked && (
        <button className="btn-deal" onClick={() => randomCards()}>
          Deal
        </button>
      )}

      {isDealClicked && <button onClick={newGame}>Start Again !</button>}
      {isDealClicked && isShowBet && !isDoubleClicked && (
        <button onClick={() => doubleBet()}>Double</button>
      )}
    </div>
  );
};

export default Buttons;
