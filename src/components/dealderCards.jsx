import React from "react";

const DealderCards = ({ dealerCardsStatus, isDealClicked, isStandClicked }) => {
  return (
    <div className="dealer-container">
      {dealerCardsStatus.map((dealerCard) => {
        return (
          <div key={dealerCard.id}>
            <img alt="" src={dealerCard.img_src} />
          </div>
        );
      })}
      {isDealClicked && !isStandClicked && (
        <img
          src="https://image.shutterstock.com/z/stock-vector-anonymous-ace-playing-card-580406773.jpg"
          alt=""
        />
      )}
    </div>
  );
};

export default DealderCards;
