import React from "react";

const PlayerCards = ({ cardsStatus }) => {
  return (
    <div className="player-container">
      {cardsStatus.map((card) => {
        return (
          <div key={card.id}>
            <img alt="" src={card.img_src} />
          </div>
        );
      })}
    </div>
  );
};

export default PlayerCards;
