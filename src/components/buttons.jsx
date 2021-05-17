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
  isGameOver,
  isHitClicked,
}) => {
  return (
    <div className="button-container">
      {isDealClicked && !isGameOver && (
        <button className="biti" onClick={() => hitCard()}>
          hit
        </button>
      )}
      {isDealClicked && !isGameOver && (
        <button className="biti" onClick={() => stand()}>
          stand
        </button>
      )}
      {!isDealClicked && !isGameOver && (
        <button className="btn-deal" onClick={() => randomCards()}>
          Deal
        </button>
      )}

      {isDealClicked && isGameOver && (
        <button className="biti" onClick={newGame}>
          Start Again !
        </button>
      )}
      {isDealClicked &&
        isShowBet &&
        !isDoubleClicked &&
        !isGameOver &&
        !isHitClicked && (
          <button className="biti" onClick={() => doubleBet()}>
            Double
          </button>
        )}
    </div>
  );
};

export default Buttons;
