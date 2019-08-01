let cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: 'queen',
	suit: 'diamond',
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: "images/king-of-hearts.png"
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: "images/king-of-diamonds.png"
}
];
let cardsInPlay = [];

function checkForMatch() {
	if(cardsInPlay[0] === cardsInPlay[2]) {
	console.log("You found a match!");
} else {
	alert("Sorry, try again.");
}
}

function flipCard(cardId) {
	console.log("User flipped " + cards[cardId].rank + " " + cards[cardId].suit
		+ " " + cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	if(cardsInPlay.length === 2) {
		checkForMatch();

	}
}

flipCard(0);
flipCard(2);
