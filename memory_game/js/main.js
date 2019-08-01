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
	if(cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}
}

function flipCard() {

let cardId = this.getAttribute('data-id');
	// console.log("User flipped " + cards[cardId].rank + " " + cards[cardId].suit
	// 	+ " " + cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	 this.setAttribute('src', cards[cardId].cardImage);
	if(cardsInPlay.length === 2) {
		checkForMatch();
	}
}

function createBoard() {
	for (var i = 0; i < cards.length; i++) {
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    let gameBoard = document.querySelector('#game-board');
    gameBoard.appendChild(cardElement);
}
}
createBoard();