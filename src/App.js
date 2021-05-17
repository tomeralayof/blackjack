import './App.css';
import CardService from './services/CardService';
import playerService from "./services/playerService";
import React, {useState,useEffect} from 'react';
import Scores from "./components/scores";
import PlayerCards from "./components/PlayerCards";
import DealerCards from "./components/dealderCards";
import Buttons from "./components/buttons";
import AccountStatus from "./components/accountStatus";
import Bets from "./components/bets";

function App() {
  const [cards,setCards] = useState([]);
  const [isDealClicked,setIsDealCllicked] = useState(false);
  const [isDoubleClicked, setIsDoubleClicked] = useState(false);
  const [isShowBet,setIsShowBet] = useState(false);
  const [isStandClicked,setIsStandClicked] = useState(false);
  const [isGameOver,setIsGameOver] = useState(false);
  const [isWin,setIsWin] = useState(false);
  const [isHitClicked,setHitIsClicked] = useState(false);
  const [cardsStatus,setCardsStatus] = useState([]);
  const [playerScore,setPlayerScore] = useState(0);
  const [dealerScore,setDealerScore] = useState(0);
  const [rountBet,setRoundBet] = useState(0);
  const [playerDetails,setPlayerDetails] = useState([]);
  const [dealerCardsStatus,setDealerCarsStatus] = useState([]);


  useEffect(()=>{
    const showCards = CardService.cards();
    setCards(showCards)
  },[])

  useEffect(()=>{
    const playerStatus = playerService.getPlayer();
    setPlayerDetails(playerStatus)
  },[])

  // bet buttons
 const bet1 = () =>{
  const moneyDown = playerDetails;
  if(moneyDown.money>=1){
  moneyDown.money--
  setPlayerDetails(moneyDown);
  let rountRaise = rountBet
  rountRaise++
  setRoundBet(rountRaise)
  }
  return;
};

const bet10 = () =>{
 const moneyDown = playerDetails;
 if(moneyDown.money>=10){
 moneyDown.money = moneyDown.money-10
 setPlayerDetails(moneyDown);
 let rountRaise = rountBet
 rountRaise+=10
 setRoundBet(rountRaise)
 }
 return;
};

const bet100 = () =>{
 const moneyDown = playerDetails;
 if(moneyDown.money>=100){
 moneyDown.money = moneyDown.money-100
 setPlayerDetails(moneyDown);
 let rountRaise = rountBet
 rountRaise+=100
 setRoundBet(rountRaise)
 }
 return;
};

const bet500 = () =>{
 const moneyDown = playerDetails;
 if(moneyDown.money>=500){
 moneyDown.money = moneyDown.money-500
 setPlayerDetails(moneyDown);
 let rountRaise = rountBet
 rountRaise+=500
 setRoundBet(rountRaise)
 }
 return;
} 

  //deal button
  const randomCards = () =>{
    if(rountBet===0) return;
    setIsDealCllicked(true);
    const newCardsStatus = [...cardsStatus];
    const newDealerCards = [...dealerCardsStatus];
    let randomCard = cards[Math.floor(Math.random()*cards.length)];
    let anotherRandomCard = cards[Math.floor(Math.random()*cards.length)];
    let dealerRandomCard = cards[Math.floor(Math.random()*cards.length)];
    newCardsStatus.push(randomCard,anotherRandomCard);
    newDealerCards.push(dealerRandomCard);
    setCardsStatus(newCardsStatus);
    setDealerCarsStatus(newDealerCards);
    const newScore = [...newCardsStatus];
    let scoreCounter = 0;
    for(let i =0; i<newScore.length; i++){      
      scoreCounter+= newScore[i].value;
    }
    let dealerScoreCounter = 0
    for(let x=0; x<newDealerCards.length;x++){
      dealerScoreCounter+= newDealerCards[x].value
    }
    setDealerScore(dealerScoreCounter)
    setPlayerScore(scoreCounter)
    if(rountBet<=playerDetails.money){
    setIsShowBet(true);
    }
  };

  //double bet
  const doubleBet = () =>{
    const doubleSum = rountBet*2;
    const newCardsStatus = [...cardsStatus];
    let moneyDoubleDown = rountBet;
    playerDetails.money = playerDetails.money - moneyDoubleDown;
    let randomCard = cards[Math.floor(Math.random()*cards.length)];
    newCardsStatus.push(randomCard);
    setCardsStatus(newCardsStatus);
    setRoundBet(doubleSum);    
    setIsDoubleClicked(true);
    let newPlayerScore = playerScore;
    newPlayerScore+=newCardsStatus[2].value;
    setPlayerScore(newPlayerScore);


    if(playerScore<21){
      console.log("operate stand function")
    }

    if(playerScore===21){
      console.log("i win")
    };

    if(playerScore===21 && (dealerScore===10 || dealerScore===1)){
      console.log("operate stand function might be equal")
    }

    console.log(playerScore)

    if(playerScore>=21){
      console.log("i loose grater then 21")
    }




  };

 
  //push a card from the deck
  const hitCard = () => {
    setHitIsClicked(true);
    if(playerScore<21){
    const keepPlaying = [...cardsStatus];  
    let randomCard = cards[Math.floor(Math.random()*cards.length)];
    keepPlaying.push(randomCard);
    setCardsStatus(keepPlaying);
    let scoreCounter = 0;
    for(let i =0; i<keepPlaying.length; i++){      
      scoreCounter+= keepPlaying[i].value;
      setPlayerScore(scoreCounter);
    }
    return;
    }
  }

  //stand button
  const stand = () =>{
   let newDealerCardStatus = [...dealerCardsStatus];
    let counterNewScore = 0;
    for(let i =0; i<newDealerCardStatus.length;i++){
      if(counterNewScore<17){
        counterNewScore += newDealerCardStatus[i].value;        
        let dealerRandomCard = cards[Math.floor(Math.random()*cards.length)];
        newDealerCardStatus.push(dealerRandomCard); 
      };
    };
    newDealerCardStatus.pop();
    setDealerCarsStatus(newDealerCardStatus);
    setDealerScore(counterNewScore)
    setIsStandClicked(true);  
    
    if(counterNewScore<21 && playerScore<counterNewScore ){
      setIsGameOver(true);
      setIsWin(false);
      console.log("i loose")
      return;
    }; 

    if(counterNewScore<21 && dealerScore<counterNewScore){
      console.log("i win")
      playerDetails.money+= rountBet*2;
      setPlayerDetails(playerDetails);
      setIsWin(true);
      setIsGameOver(true);
    };

    if(counterNewScore===21){
      console.log("dealer win");
      setIsWin(false);
      setIsGameOver(true);
    }
  };


  //reset buttons to play a new game
  const newGame = () => {
    setPlayerScore(0);
    setDealerScore(0);
    setCardsStatus([]);
    setIsDealCllicked(false);
    setRoundBet(0);
    setIsDoubleClicked(false);
    setIsShowBet(false);
    setDealerCarsStatus([]);
    setIsStandClicked(false);
    setIsGameOver(false);
    setIsWin(false);
    setHitIsClicked(false);
  }

  return (
    <div className="App">
      
      <div className="game-container">

      <Scores
       rountBet={rountBet} 
       dealerScore={dealerScore} 
       playerScore={playerScore} 
       isGameOver={isGameOver} 
       isWin={isWin} />

      <PlayerCards cardsStatus={cardsStatus}/>
      <DealerCards
       isStandClicked={isStandClicked}
       isDealClicked={isDealClicked}
       dealerCardsStatus={dealerCardsStatus}
      />
      </div>

      <Buttons 
      doubleBet={doubleBet} 
      newGame={newGame}
      dealerScore={dealerScore}
      hitCard={hitCard}
      isDealClicked={isDealClicked}
      randomCards={randomCards}
      playerDetails={playerDetails}
      rountBet={rountBet}
      isShowBet = {isShowBet}
      isDoubleClicked={isDoubleClicked}
      stand={stand}
      isGameOver={isGameOver}
      />

     <Bets
      isDealClicked={isDealClicked}
      bet1={bet1}
      bet10={bet10}
      bet100={bet100}
      bet500={bet500}
      isHitClicked={isHitClicked}
      />

     <AccountStatus playerDetails={playerDetails}/>
    </div>
  );
}

export default App;