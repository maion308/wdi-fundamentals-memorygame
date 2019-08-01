let cards = ["queen", "queen", "king", "king"];
let cardOne = cards[0];
let cardTwo = cards[2];
let cardsInPlay = [];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2) {
	if(cardsInPlay[0] === cardsInPlay[1]) {
		alert("you found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

