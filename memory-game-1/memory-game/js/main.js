console.log("Up and running!"); //ensures javascript is running


let cardElement;
//loops through cards and sets images and click listeners for play
function createBoard(){
	for (let i = 0; i < cards.length; i++) {
    cardElement = document.createElement('img');
   cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
   document.getElementById('game-board').appendChild(cardElement);
}

}
//defining the cards
const cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamond",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];
//determines if a match was found
let cardsInPlay = [];
function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
}
//tells console what the user flipped and displays the face of the card
}
function flipCard(){
	cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	
	this.setAttribute('src', cards[cardId].cardImage);
//checks for match if 2 cards have been clicked
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}
//calls create board to start game
createBoard();

function resetCards() {
	document.location.reload(true)
}

//First attempt at reset button
	//console.log("working");
	 //  cardsInPlay.length = 0;
	 //  cards.length = 0;

	   //document.getElementById('game-board').removeChild(cardElement);
	   //for (let c = 0; c < 5; c++) {
	 // document.getElementById('game-board').removeChild(cardElement);
    //cardElement = document.createElement('img');
   //cardElement.setAttribute('src', 'images/back.png');
   // cardElement.setAttribute('data-id', c);
   // cardElement.addEventListener('click', flipCard);
   //document.getElementById('game-board').insertBefore(cardElement, document.getElementById('game-board').firstChild);
	//}
  // };
  
	const button = document.querySelector('button');
   button.addEventListener("click", resetCards);
