import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  // variables for button
  let button = document.querySelector(".button");


  // variables for card object
  let element = document.querySelector(".obj");

  let suitType = ["♦", "♥", "♠", "♣"];
  
  let random = Math.floor(Math.random() * suitType.length);
  let randomSuitType = suitType[random];
  let deck = [];


  let num = Math.floor(Math.random() * 13);

  function createCard(randomSuitType, num, element) {
    return {
      suit: randomSuitType,
      number: num,
      elem: element
    };
  }

  const first = createCard(randomSuitType, num, element);
  deck.push(first);
  for (let i = 0; i < deck.length; i++) {
      console.log(deck[i]);
    }

  function buttonClick(e) {
    const latestCard = createCard(randomSuitType, num, element);
    deck.push(latestCard);
    for (let i = 0; i < deck.length; i++) {
      console.log(deck[i]);
    }
  }

  button.addEventListener("click", buttonClick);
};
