/*Variables for each individual card and suit value posibility*/


const cardValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
const cardSuit = ['diamonds', 'hearts', 'spades', 'clubs'];



/*links to each picture of each card in a given suit*/

const clubCards = ['resources/pictures/clubs/acec.jpg', 'resources/pictures/clubs/2c.jpg', 'resources/pictures/clubs/3c.jpg', 
'resources/pictures/clubs/4c.jpg', 'resources/pictures/clubs/5c.jpg', 'resources/pictures/clubs/6c.jpg', 'resources/pictures/clubs/7c.jpg',
'resources/pictures/clubs/8c.jpg', 'resources/pictures/clubs/9c.jpg', 'resources/pictures/clubs/10c.jpg', 'resources/pictures/clubs/jc.jpg'
, 'resources/pictures/clubs/qc.jpg', 'resources/pictures/clubs/kc.jpg'];


const spadeCards = ['resources/pictures/spades/aces.jpg', 'resources/pictures/spades/2s.jpg', 'resources/pictures/spades/3s.jpg', 
'resources/pictures/spades/4s.jpg', 'resources/pictures/spades/5s.jpg', 'resources/pictures/spades/6s.jpg', 'resources/pictures/spades/7s.jpg',
'resources/pictures/spades/8s.jpg', 'resources/pictures/spades/9s.jpg', 'resources/pictures/spades/10s.jpg', 'resources/pictures/spades/js.jpg',
'resources/pictures/spades/qs.jpg', 'resources/pictures/spades/ks.jpg',];


const heartCards = ['resources/pictures/hearts/aceh.jpg', 'resources/pictures/hearts/2h.jpg', 'resources/pictures/hearts/3h.jpg', 'resources/pictures/hearts/4h.jpg',
'resources/pictures/hearts/5h.jpg', 'resources/pictures/hearts/6h.jpg', 'resources/pictures/hearts/7h.jpg', 'resources/pictures/hearts/8h.jpg',
'resources/pictures/hearts/9h.jpg', 'resources/pictures/hearts/10h.jpg', 'resources/pictures/hearts/jh.jpg', 'resources/pictures/hearts/qh.jpg',
'resources/pictures/hearts/kh.jpg',];


const diamondCards = ['resources/pictures/diamonds/aced.jpg', 'resources/pictures/diamonds/2d.jpg', 'resources/pictures/diamonds/3d.jpg', 'resources/pictures/diamonds/4d.jpg',
'resources/pictures/diamonds/5d.jpg', 'resources/pictures/diamonds/6d.jpg', 'resources/pictures/diamonds/7d.jpg', 'resources/pictures/diamonds/8d.jpg',
'resources/pictures/diamonds/9d.jpg', 'resources/pictures/diamonds/10d.jpg', 'resources/pictures/diamonds/jd.jpg', 'resources/pictures/diamonds/qd.jpg',
'resources/pictures/diamonds/kd.jpg',];

/*I'm going to replace the sources for these with higher quility images that are cropped nicer later but the ones I have should work for now
I'll just replace the location with the better image and leave it the same name so I won't have to change any of my source code. */



/*card image variables*/

const card1 = document.querySelector('.pcard1');
const card2 = document.querySelector('.pcard2');
const card3 = document.querySelector('.pcard3');
const card4 = document.querySelector('.pcard4');
const card5 = document.querySelector('.pcard5');

const flipinner1 = document.querySelector('.flipinner1');
const flipinner2 = document.querySelector('.flipinner2');
const flipinner3 = document.querySelector('.flipinner3');
const flipinner4 = document.querySelector('.flipinner4');
const flipinner5 = document.querySelector('.flipinner5');


const flipcardall = document.querySelector('.flipcard');
const flipcard1 = document.querySelector('.flipcard1');
const flipcard2 = document.querySelector('.flipcard2');
const flipcard3 = document.querySelector('.flipcard3');
const flipcard4 = document.querySelector('.flipcard4');
const flipcard5 = document.querySelector('.flipcard5');


const flipcard1id = document.querySelector('#flipcard1');

const inner1trans = document.querySelector('#flipinner1');



/*button variables*/

const newHandButton = document.querySelector("#newhand");
const hit = document.querySelector('.hit');
const stay = document.querySelector('.stay');


const dealerHand = document.querySelector('.dealer-hand');
const playerHand = document.querySelector('#playerhand');


/*Variables for the numericle value of each card drawn, plus secondary values
for aces*/

let cardNumber1Opt1 = 0;
let cardNumber1Opt2 = 0;
let cardNumber2Opt1 = 0;
let cardNumber2Opt2 = 0;
let cardNumber3Opt1 = 0;
let cardNumber3Opt2 = 0;
let cardNumber4Opt1 = 0;
let cardNumber4Opt2 = 0;
let cardNumber5Opt1 = 0;
let cardNumber5Opt2 = 0;


/*Variables for the html elements in which values will be printed*/


const bust = document.querySelector('.bust');
const newText = document.querySelector('#newtext');
const cardVal = document.querySelector('.cardvalue');


/*A global version of the random number generated to pick the first two cards
so the same number can be used in the hit function text print*/

let randValue1Out = 0;
let randSuit1Out = 0;
let randValue2Out = 0;
let randSuit2Out = 0;


/*The primary and secondary sum of all cards dealt*/

let cardSum1 = 0;
let cardSum2 = 0;

let cardSum1New1Out = 0;
let cardSum1New2Out = 0;
let cardSum1New3Out = 0;

/*Arrays for the cards dealt in the hit function so they can be reused after 
a new random number is generated on each succesive click*/

let valueArr = [];
let suitArr = [];

/*Cick counter for the hit button so a new card can be defined for each hit*/

let clickCount = 0;



const addCard = () => {
	clickCount ++;	


	const randValue3 = Math.floor(Math.random()*13);
	const randSuit3 = Math.floor(Math.random()*4);

	const randValue4 = Math.floor(Math.random()*13);
	const randSuit4 = Math.floor(Math.random()*4);

	const randValue5 = Math.floor(Math.random()*13);
	const randSuit5 = Math.floor(Math.random()*4);



	/*Generating number values for the face cards for each click*/

	if (cardValue[randValue3]==='Jack' && clickCount===1 || 
		cardValue[randValue3]==='Queen' && clickCount===1 || 
		cardValue[randValue3]==='King' && clickCount===1) {
		cardNumber3Opt1 = 10;
		valueArr.push(cardValue[randValue3]);
		suitArr.push(cardSuit[randSuit3]);

	} else if (cardValue[randValue3]==='Ace' && clickCount===1) {
			cardNumber3Opt1 = 1;
			cardNumber3Opt2 = 10;
			valueArr.push(cardValue[randValue3]);
			suitArr.push(cardSuit[randSuit3]);

	} else if (clickCount===1) {
		cardNumber3Opt1 = cardValue[randValue3];
		valueArr.push(cardValue[randValue3]);
		suitArr.push(cardSuit[randSuit3]);
	}; 



	if (cardValue[randValue3]==='Jack' && clickCount===2 || 
		cardValue[randValue3]==='Queen' && clickCount===2 || 
		cardValue[randValue3]==='King' && clickCount===2) {
		cardNumber4Opt1 = 10;
		valueArr.push(cardValue[randValue3]);
		suitArr.push(cardSuit[randSuit3]);

	} else if (cardValue[randValue3]==='Ace' && clickCount===2) {
			cardNumber4Opt1 = 1;
			cardNumber4Opt2 = 10;
			valueArr.push(cardValue[randValue3]);
			suitArr.push(cardSuit[randSuit3]);

	} else if (clickCount===2) {
		cardNumber4Opt1 = cardValue[randValue3];
		valueArr.push(cardValue[randValue3]);
		suitArr.push(cardSuit[randSuit3]);
	};



	if (cardValue[randValue3]==='Jack' && clickCount===3 || 
		cardValue[randValue3]==='Queen' && clickCount===3 || 
		cardValue[randValue3]==='King' && clickCount===3) {
		cardNumber5Opt1 = 10;
		valueArr.push(cardValue[randValue3]);
		suitArr.push(cardSuit[randSuit3]);

	} else if (cardValue[randValue3]==='Ace' && clickCount===3) {
			cardNumber5Opt1 = 1;
			cardNumber5Opt2 = 10;
			valueArr.push(cardValue[randValue3]);
			suitArr.push(cardSuit[randSuit3]);
			
	} else if (clickCount===3) {
		cardNumber5Opt1 = cardValue[randValue3];
		valueArr.push(cardValue[randValue3]);
		suitArr.push(cardSuit[randSuit3]);
	};


/*printing each card*/

/*card3*/
if (suitArr[0] === 'clubs') {
	flipinner3.style.display = 'block'} 
											{
	if (valueArr[0] === 'Ace') {
		card3.src = clubCards[0];
	} else if (valueArr[0] === 2) {
		card3.src = clubCards[1];
	} else if (valueArr[0] === 3) {
		card3.src = clubCards[2];
	} else if (valueArr[0] === 4) {
		card3.src = clubCards[3];
	} else if (valueArr[0] === 5) {
		card3.src = clubCards[4];
	} else if (valueArr[0] === 6) {
		card3.src = clubCards[5];
	} else if (valueArr[0] === 7) {
		card3.src = clubCards[6];
	} else if (valueArr[0] === 8) {
		card3.src = clubCards[7];
	} else if (valueArr[0] === 9) {
		card3.src = clubCards[8];
	} else if (valueArr[0] === 10) {
		card3.src = clubCards[9];
	} else if (valueArr[0] === 'Jack') {
		card3.src = clubCards[10];
	} else if (valueArr[0] === 'Queen') {
		card3.src = clubCards[11];
	} else if (valueArr[0] === 'King') {
		card3.src = clubCards[12];
	}; 
};


if (suitArr[0] === 'spades') {
	flipinner3.style.display = 'block'}{
	if (valueArr[0] === 'Ace') {
		card3.src = spadeCards[0];
	} else if (valueArr[0] === 2) {
		card3.src = spadeCards[1];
	} else if (valueArr[0] === 3) {
		card3.src = spadeCards[2];
	} else if (valueArr[0] === 4) {
		card3.src = spadeCards[3];
	} else if (valueArr[0] === 5) {
		card3.src = spadeCards[4];
	} else if (valueArr[0] === 6) {
		card3.src = spadeCards[5];
	} else if (valueArr[0] === 7) {
		card3.src = spadeCards[6];
	} else if (valueArr[0] === 8) {
		card3.src = spadeCards[7];
	} else if (valueArr[0] === 9) {
		card3.src = spadeCards[8];
	} else if (valueArr[0] === 10) {
		card3.src = spadeCards[9];
	} else if (valueArr[0] === 'Jack') {
		card3.src = spadeCards[10];
	} else if (valueArr[0] === 'Queen') {
		card3.src = spadeCards[11];
	} else if (valueArr[0] === 'King') {
		card3.src = spadeCards[12];
	}; 
};


if (suitArr[0] === 'hearts') {
	flipinner3.style.display = 'block'}{
	if (valueArr[0] === 'Ace') {
		card3.src = heartCards[0];
	} else if (valueArr[0] === 2) {
		card3.src = heartCards[1];
	} else if (valueArr[0] === 3) {
		card3.src = heartCards[2];
	} else if (valueArr[0] === 4) {
		card3.src = heartCards[3];
	} else if (valueArr[0] === 5) {
		card3.src = heartCards[4];
	} else if (valueArr[0] === 6) {
		card3.src = heartCards[5];
	} else if (valueArr[0] === 7) {
		card3.src = heartCards[6];
	} else if (valueArr[0] === 8) {
		card3.src = heartCards[7];
	} else if (valueArr[0] === 9) {
		card3.src = heartCards[8];
	} else if (valueArr[0] === 10) {
		card3.src = heartCards[9];
	} else if (valueArr[0] === 'Jack') {
		card3.src = heartCards[10];
	} else if (valueArr[0] === 'Queen') {
		card3.src = heartCards[11];
	} else if (valueArr[0] === 'King') {
		card3.src = heartCards[12];
	};
};


if (suitArr[0] === 'diamonds') {
	flipinner3.style.display = 'block'}{
	if (valueArr[0] === 'Ace') {
		card3.src = diamondCards[0];
	} else if (valueArr[0] === 2) {
		card3.src = diamondCards[1];
	} else if (valueArr[0] === 3) {
		card3.src = diamondCards[2];
	} else if (valueArr[0] === 4) {
		card3.src = diamondCards[3];
	} else if (valueArr[0] === 5) {
		card3.src = diamondCards[4];
	} else if (valueArr[0] === 6) {
		card3.src = diamondCards[5];
	} else if (valueArr[0] === 7) {
		card3.src = diamondCards[6];
	} else if (valueArr[0] === 8) {
		card3.src = diamondCards[7];
	} else if (valueArr[0] === 9) {
		card3.src = diamondCards[8];
	} else if (valueArr[0] === 10) {
		card3.src = diamondCards[9];
	} else if (valueArr[0] === 'Jack') {
		card3.src = diamondCards[10];
	} else if (valueArr[0] === 'Queen') {
		card3.src = diamondCards[11];
	} else if (valueArr[0] === 'King') {
		card3.src = diamondCards[12];
	}; 
};


/*card 4*/
if (suitArr[1] === 'clubs') {
	flipinner4.style.display = 'block'}{
	if (valueArr[1] === 'Ace') {
		card4.src = clubCards[0];
	} else if (valueArr[1] === 2) {
		card4.src = clubCards[1];
	} else if (valueArr[1] === 3) {
		card4.src = clubCards[2];
	} else if (valueArr[1] === 4) {
		card4.src = clubCards[3];
	} else if (valueArr[1] === 5) {
		card4.src = clubCards[4];
	} else if (valueArr[1] === 6) {
		card4.src = clubCards[5];
	} else if (valueArr[1] === 7) {
		card4.src = clubCards[6];
	} else if (valueArr[1] === 8) {
		card4.src = clubCards[7];
	} else if (valueArr[1] === 9) {
		card4.src = clubCards[8];
	} else if (valueArr[1] === 10) {
		card4.src = clubCards[9];
	} else if (valueArr[1] === 'Jack') {
		card4.src = clubCards[10];
	} else if (valueArr[1] === 'Queen') {
		card4.src = clubCards[11];
	} else if (valueArr[1] === 'King') {
		card4.src = clubCards[12];
	}; 
};


if (suitArr[1] === 'spades') {
	flipinner4.style.display = 'block'}{
	if (valueArr[1] === 'Ace') {
		card4.src = spadeCards[0];
	} else if (valueArr[1] === 2) {
		card4.src = spadeCards[1];
	} else if (valueArr[1] === 3) {
		card4.src = spadeCards[2];
	} else if (valueArr[1] === 4) {
		card4.src = spadeCards[3];
	} else if (valueArr[1] === 5) {
		card4.src = spadeCards[4];
	} else if (valueArr[1] === 6) {
		card4.src = spadeCards[5];
	} else if (valueArr[1] === 7) {
		card4.src = spadeCards[6];
	} else if (valueArr[1] === 8) {
		card4.src = spadeCards[7];
	} else if (valueArr[1] === 9) {
		card4.src = spadeCards[8];
	} else if (valueArr[1] === 10) {
		card4.src = spadeCards[9];
	} else if (valueArr[1] === 'Jack') {
		card4.src = spadeCards[10];
	} else if (valueArr[1] === 'Queen') {
		card4.src = spadeCards[11];
	} else if (valueArr[1] === 'King') {
		card4.src = spadeCards[12];
	}; 
};


if (suitArr[1] === 'hearts') {
	flipinner4.style.display = 'block'}{
	if (valueArr[1] === 'Ace') {
		card4.src = heartCards[0];
	} else if (valueArr[1] === 2) {
		card4.src = heartCards[1];
	} else if (valueArr[1] === 3) {
		card4.src = heartCards[2];
	} else if (valueArr[1] === 4) {
		card4.src = heartCards[3];
	} else if (valueArr[1] === 5) {
		card4.src = heartCards[4];
	} else if (valueArr[1] === 6) {
		card4.src = heartCards[5];
	} else if (valueArr[1] === 7) {
		card4.src = heartCards[6];
	} else if (valueArr[1] === 8) {
		card4.src = heartCards[7];
	} else if (valueArr[1] === 9) {
		card4.src = heartCards[8];
	} else if (valueArr[1] === 10) {
		card4.src = heartCards[9];
	} else if (valueArr[1] === 'Jack') {
		card4.src = heartCards[10];
	} else if (valueArr[1] === 'Queen') {
		card4.src = heartCards[11];
	} else if (valueArr[1] === 'King') {
		card4.src = heartCards[12];
	};
};


if (suitArr[1] === 'diamonds') {
	flipinner4.style.display = 'block'}{
	if (valueArr[1] === 'Ace') {
		card4.src = diamondCards[0];
	} else if (valueArr[1] === 2) {
		card4.src = diamondCards[1];
	} else if (valueArr[1] === 3) {
		card4.src = diamondCards[2];
	} else if (valueArr[1] === 4) {
		card4.src = diamondCards[3];
	} else if (valueArr[1] === 5) {
		card4.src = diamondCards[4];
	} else if (valueArr[1] === 6) {
		card4.src = diamondCards[5];
	} else if (valueArr[1] === 7) {
		card4.src = diamondCards[6];
	} else if (valueArr[1] === 8) {
		card4.src = diamondCards[7];
	} else if (valueArr[1] === 9) {
		card4.src = diamondCards[8];
	} else if (valueArr[1] === 10) {
		card4.src = diamondCards[9];
	} else if (valueArr[1] === 'Jack') {
		card4.src = diamondCards[10];
	} else if (valueArr[1] === 'Queen') {
		card4.src = diamondCards[11];
	} else if (valueArr[1] === 'King') {
		card4.src = diamondCards[12];
	}; 
};


/*card5*/
if (suitArr[2] === 'clubs') {
	flipinner5.style.display = 'block'}{
	if (valueArr[2] === 'Ace') {
		card5.src = clubCards[0];
	} else if (valueArr[2] === 2) {
		card5.src = clubCards[1];
	} else if (valueArr[2] === 3) {
		card5.src = clubCards[2];
	} else if (valueArr[2] === 4) {
		card5.src = clubCards[3];
	} else if (valueArr[2] === 5) {
		card5.src = clubCards[4];
	} else if (valueArr[2] === 6) {
		card5.src = clubCards[5];
	} else if (valueArr[2] === 7) {
		card5.src = clubCards[6];
	} else if (valueArr[2] === 8) {
		card5.src = clubCards[7];
	} else if (valueArr[2] === 9) {
		card5.src = clubCards[8];
	} else if (valueArr[2] === 10) {
		card5.src = clubCards[9];
	} else if (valueArr[2] === 'Jack') {
		card5.src = clubCards[10];
	} else if (valueArr[2] === 'Queen') {
		card5.src = clubCards[11];
	} else if (valueArr[2] === 'King') {
		card5.src = clubCards[12];
	}; 
};


if (suitArr[2] === 'spades') {
	flipinner5.style.display = 'block'}{
	if (valueArr[2] === 'Ace') {
		card5.src = spadeCards[0];
	} else if (valueArr[2] === 2) {
		card5.src = spadeCards[1];
	} else if (valueArr[2] === 3) {
		card5.src = spadeCards[2];
	} else if (valueArr[2] === 4) {
		card5.src = spadeCards[3];
	} else if (valueArr[2] === 5) {
		card5.src = spadeCards[4];
	} else if (valueArr[2] === 6) {
		card5.src = spadeCards[5];
	} else if (valueArr[2] === 7) {
		card5.src = spadeCards[6];
	} else if (valueArr[2] === 8) {
		card5.src = spadeCards[7];
	} else if (valueArr[2] === 9) {
		card5.src = spadeCards[8];
	} else if (valueArr[2] === 10) {
		card5.src = spadeCards[9];
	} else if (valueArr[2] === 'Jack') {
		card5.src = spadeCards[10];
	} else if (valueArr[2] === 'Queen') {
		card5.src = spadeCards[11];
	} else if (valueArr[2] === 'King') {
		card5.src = spadeCards[12];
	}; 
};


if (suitArr[2] === 'hearts') {
	flipinner5.style.display = 'block'}{
	if (valueArr[2] === 'Ace') {
		card5.src = heartCards[0];
	} else if (valueArr[2] === 2) {
		card5.src = heartCards[1];
	} else if (valueArr[2] === 3) {
		card5.src = heartCards[2];
	} else if (valueArr[2] === 4) {
		card5.src = heartCards[3];
	} else if (valueArr[2] === 5) {
		card5.src = heartCards[4];
	} else if (valueArr[2] === 6) {
		card5.src = heartCards[5];
	} else if (valueArr[2] === 7) {
		card5.src = heartCards[6];
	} else if (valueArr[2] === 8) {
		card5.src = heartCards[7];
	} else if (valueArr[2] === 9) {
		card5.src = heartCards[8];
	} else if (valueArr[2] === 10) {
		card5.src = heartCards[9];
	} else if (valueArr[2] === 'Jack') {
		card5.src = heartCards[10];
	} else if (valueArr[2] === 'Queen') {
		card5.src = heartCards[11];
	} else if (valueArr[2] === 'King') {
		card5.src = heartCards[12];
	};
};


if (suitArr[2] === 'diamonds') {
	flipinner5.style.display = 'block'}{
	if (valueArr[2] === 'Ace') {
		card5.src = diamondCards[0];
	} else if (valueArr[2] === 2) {
		card5.src = diamondCards[1];
	} else if (valueArr[2] === 3) {
		card5.src = diamondCards[2];
	} else if (valueArr[2] === 4) {
		card5.src = diamondCards[3];
	} else if (valueArr[2] === 5) {
		card5.src = diamondCards[4];
	} else if (valueArr[2] === 6) {
		card5.src = diamondCards[5];
	} else if (valueArr[2] === 7) {
		card5.src = diamondCards[6];
	} else if (valueArr[2] === 8) {
		card5.src = diamondCards[7];
	} else if (valueArr[2] === 9) {
		card5.src = diamondCards[8];
	} else if (valueArr[2] === 10) {
		card5.src = diamondCards[9];
	} else if (valueArr[2] === 'Jack') {
		card5.src = diamondCards[10];
	} else if (valueArr[2] === 'Queen') {
		card5.src = diamondCards[11];
	} else if (valueArr[2] === 'King') {
		card5.src = diamondCards[12];
	}; 
};



	/*Creating the primary sum and secondary sum for the ace values*/
	
	cardSum1New1 = cardSum1 + cardNumber3Opt1;
	cardSum1New2 = cardSum1New1 + cardNumber4Opt1;
	cardSum1New3 = cardSum1New2 + cardNumber5Opt1;

	cardSum1New1Out = cardSum1New1;
	cardSum1New2Out = cardSum1New2;
	cardSum1New3Out = cardSum1New3;
	
	

	if (cardNumber3Opt1 === 1 && cardSum2 === 0) {
		cardSum2 = cardSum1New1 + cardNumber3Opt2;
	} else if (cardNumber3Opt1 === 1 && cardSum2 > 0) {
		cardSum2 += cardNumber3Opt2;
	} else if (cardNumber3Opt1 !== 1 && cardSum2 > 0) {
		cardSum2 += cardNumber3Opt1;
	};



	if (cardNumber4Opt1 === 1 && cardSum2 === 0) {
		cardSum2 = cardSum1New2 + cardNumber4Opt2;
	} else if (cardNumber4Opt1 === 1 && cardSum2 > 0) {
		cardSum2 += cardNumber4Opt2;
	} else if (cardNumber4Opt1 !== 1 && cardSum2 > 0) {
		cardSum2 += cardNumber4Opt1;
	};


	if (cardNumber5Opt1 === 1 && cardSum2 === 0) {
		cardSum2 = cardSum1New3 + cardNumber5Opt2;
	} else if (cardNumber5Opt1 === 1 && cardSum2 > 0) {
		cardSum2 += cardNumber5Opt2;
	} else if (cardNumber5Opt1 !== 1 && cardSum2 > 0) {
		cardSum2 += cardNumber5Opt1;
	};


	
 	if (cardSum2 > 21) {
 		cardSum2 = 0;
 	};


 	/*printing the sums for each hit*/


	if (cardSum2 > 0 && clickCount===1) {
		cardVal.innerHTML = `${cardSum1New1} or ${cardSum2}`;
	} else if (clickCount===1) {
		cardVal.innerHTML = cardSum1New1;
	};



	if (cardSum2 > 0 && clickCount===2) {
		cardVal.innerHTML = `${cardSum1New2} or ${cardSum2}`;
	} else if (clickCount===2) {
		cardVal.innerHTML = cardSum1New2;
	};
	

	if (cardSum2 > 0 && clickCount===3) {
		cardVal.innerHTML = `${cardSum1New3} or ${cardSum2}`;
	} else if (clickCount===3) {
		cardVal.innerHTML = cardSum1New3;
	};


	/*Printing messages that discribe how safe it is to hit again*/

	if (cardSum1 <= 11 || cardSum1New1 <= 11 || cardSum1New2 <= 11 
	|| cardSum1New3 <= 11) {
	bust.innerHTML = 'All clear';
	}; 

	if (cardSum1 > 11 && cardSum1 <= 14 || cardSum1New1 > 11 && 
	cardSum1New1 <= 14 || cardSum1New2 > 11 && cardSum1New2 <= 14 
	|| cardSum1New3 > 11 && cardSum1New3 <= 14) {
	bust.innerHTML = 'Careful';
	}; 

	if (cardSum1 > 14 && cardSum1 <= 17 || cardSum1New1 > 14 && 
	cardSum1New1 <= 17 || cardSum1New2 > 14 && cardSum1New2 <= 17 
	|| cardSum1New3 > 14 && cardSum1New3 <= 17) {
	bust.innerHTML = 'CAREFUL!'; 
	}; 

	if (cardSum1 > 17 || cardSum1New1 > 17 || cardSum1New2 > 17 
	|| cardSum1New3 > 17) {
	bust.innerHTML = 'CAREFUL!!!';
	};

	/*Stopping anymore hits after bust*/


	if (cardSum1New1 > 21 || cardSum1New2 > 21 || cardSum1New3 > 21) {
		bust.innerHTML = 'Bust';
		hit.removeEventListener("click", addCard);
		winFunctionD();
	};

/*this didn't work I think i might just have to set each cards absolute postion to the postion
it was at after the animation for the next hit so that it's there without the anmiation being
held and then define a new animation for every card on every hit based on the click counter*/
	/*
	flipcard1.className = 'flipcard flipcard1 flipcard11';
*/
/*I think any tiny amount that this is off from the position it was at after the initil animation
should be mostly covered up if the new animation to slide left is started as soon as this 
happens*/
	if (clickCount === 1) {
		/*I could but a 1 second delay on each hit so that the animations will always run through
		but i'd like it to be so that you can press hit when ever and have all the animations running
		smoothly together. The real problem is redefining the position. putting the new animation on
		a different class instead of the id doesn't help. as soon as you press hit the new position
		is defined so the position jumps from wherever it was in the animation to the new end point
		not defining the new point puts the card back on the deck. Maybe my inital idea of defining
		the position where it should've been in the player hand and then running the animatio backward
		would work better. But there's still the issue of redefining the position after every incremint
		to the left for the next increment*/
		flipcard1.style.top = '40%';
		flipcard1.style.right = '16.666666666666666666666666666666666666666666667%';
		flipcard2.style.top = '40%';
		flipcard2.style.right = '10.8333333333333333333333333333333333333333333333%';
		flipinner3.id = 'flipinner3';
		flipcard3.id = 'flipcard3';
		
		document.querySelector('#flipcard1').style.animation = 'moveincriment 1s forwards';
		
		/*I'm not going to worry about it right now but for some reason the below doesn't 
		work when i define the flipcard 1 id as a variable and use the variable name*/
		/*document.querySelector('#flipcard1').style.animation = 'moveincriment 1s forwards';*/
		document.querySelector('#flipcard2').style.animation = 'moveincriment 1s forwards';
		document.querySelector('#flipcard3').style.animation = 'move3 1s forwards';
		/*Idk why i wasn't thinking to just defin move 3 here and do it sequintially like that
		the timefunction i made didn't work which i think the reason is the move of the animation
		was defined way before The card actually was doing this move up here. idk it's late lol
		I keep getting mixed up with little stuff and forgetting, like i forgot i put the flipinner
		id up here. I was like how is it flipping when the inner id isn't defined. It's late and
		this is the most complex thing i've done but it's good because i'm learning alot and i didn't
		really know much about animations before because the section on them was brief so this is good
		*/
		
		/*I'm not exacly sure why the code below needs to be an else if. when i just put it
		as another if after this one it doesn't work*/
	} else if (clickCount === 2) {
		flipcard1.style.top = '40%';
		flipcard1.style.right = '19.5833333333333333333333333333333333333333333333333%';
		flipcard2.style.top = '40%';
		flipcard2.style.right = '13.75%';
		flipcard3.style.top = '40%';
		flipcard3.style.right = '7.91666666666666666666666666666666666666666666666666667%';
		flipinner4.id = 'flipinner4';
		flipcard4.id = 'flipcard4';

		document.querySelector('#flipcard1').style.animation = 'moveincriment2 1s forwards';
		document.querySelector('#flipcard2').style.animation = 'moveincriment2 1s forwards';
		document.querySelector('#flipcard3').style.animation = 'moveincriment 1s forwards';
		document.querySelector('#flipcard4').style.animation = 'move4 1s forwards';
	} else if (clickCount === 3) {
		flipcard1.style.top = '40%';
		flipcard1.style.right = '22.5%';
		flipcard2.style.top = '40%';
		flipcard2.style.right = '16.66666666666666666666666666666666666666666666666666667%';
		flipcard3.style.top = '40%';
		flipcard3.style.right = '10.83333333333333333333333333333333333333333333333333333%';
		flipcard4.style.top = '40%';
		flipcard4.style.right = '5%';
		flipinner5.id = 'flipinner5';
		flipcard5.id = 'flipcard5';

		document.querySelector('#flipcard1').style.animation = 'moveincriment3 1s forwards';
		document.querySelector('#flipcard2').style.animation = 'moveincriment3 1s forwards';
		document.querySelector('#flipcard3').style.animation = 'moveincriment2 1s forwards';
		document.querySelector('#flipcard4').style.animation = 'moveincriment 1s forwards';
		document.querySelector('#flipcard5').style.animation = 'move5 1s forwards';
	};
	
};



const pressStay = () => {
	hit.removeEventListener("click", addCard);
};





const generateHands = () => {

	winmessage.innerHTML = '';


	const randValue1 = Math.floor(Math.random()*13);
	const randSuit1 = Math.floor(Math.random()*4);
	const randValue2 = Math.floor(Math.random()*13);
	const randSuit2 = Math.floor(Math.random()*4);


	randValue1Out = randValue1
	randSuit1Out = randSuit1
	randValue2Out = randValue2
	randSuit2Out = randSuit2

	/*Creating number values out of the face cards*/

	if (cardValue[randValue1]==='Jack' || cardValue[randValue1]==='Queen' 
		|| cardValue[randValue1]==='King') {
		cardNumber1Opt1 = 10;
		cardNumber1Opt2 = 0;
	} else if (cardValue[randValue1]==='Ace') {
			cardNumber1Opt1 = 1;
			cardNumber1Opt2 = 11;
	} else {
		cardNumber1Opt1 = cardValue[randValue1];
		cardNumber1Opt2 = 0;
	};

		if (cardValue[randValue2]==='Jack' || cardValue[randValue2]==='Queen' || 
		cardValue[randValue2]==='King') {
		cardNumber2Opt1 = 10;
		cardNumber2Opt2 = 0;
	} else if (cardValue[randValue2]==='Ace') {
			cardNumber2Opt1 = 1;
			cardNumber2Opt2 = 11;
	} else {
		cardNumber2Opt1 = cardValue[randValue2];
		cardNumber2Opt2 = 0;
	};




/*card 1*/

if (cardSuit[randSuit1] === 'clubs') {
	if (cardValue[randValue1] === 'Ace') {
		card1.src = clubCards[0];
	} else if (cardValue[randValue1] === 2) {
		card1.src = clubCards[1];
	} else if (cardValue[randValue1] === 3) {
		card1.src = clubCards[2];
	} else if (cardValue[randValue1] === 4) {
		card1.src = clubCards[3];
	} else if (cardValue[randValue1] === 5) {
		card1.src = clubCards[4];
	} else if (cardValue[randValue1] === 6) {
		card1.src = clubCards[5];
	} else if (cardValue[randValue1] === 7) {
		card1.src = clubCards[6];
	} else if (cardValue[randValue1] === 8) {
		card1.src = clubCards[7];
	} else if (cardValue[randValue1] === 9) {
		card1.src = clubCards[8];
	} else if (cardValue[randValue1] === 10) {
		card1.src = clubCards[9];
	} else if (cardValue[randValue1] === 'Jack') {
		card1.src = clubCards[10];
	} else if (cardValue[randValue1] === 'Queen') {
		card1.src = clubCards[11];
	} else if (cardValue[randValue1] === 'King') {
		card1.src = clubCards[12];
	}; 
};


if (cardSuit[randSuit1] === 'spades') {
	if (cardValue[randValue1] === 'Ace') {
		card1.src = spadeCards[0];
	} else if (cardValue[randValue1] === 2) {
		card1.src = spadeCards[1];
	} else if (cardValue[randValue1] === 3) {
		card1.src = spadeCards[2];
	} else if (cardValue[randValue1] === 4) {
		card1.src = spadeCards[3];
	} else if (cardValue[randValue1] === 5) {
		card1.src = spadeCards[4];
	} else if (cardValue[randValue1] === 6) {
		card1.src = spadeCards[5];
	} else if (cardValue[randValue1] === 7) {
		card1.src = spadeCards[6];
	} else if (cardValue[randValue1] === 8) {
		card1.src = spadeCards[7];
	} else if (cardValue[randValue1] === 9) {
		card1.src = spadeCards[8];
	} else if (cardValue[randValue1] === 10) {
		card1.src = spadeCards[9];
	} else if (cardValue[randValue1] === 'Jack') {
		card1.src = spadeCards[10];
	} else if (cardValue[randValue1] === 'Queen') {
		card1.src = spadeCards[11];
	} else if (cardValue[randValue1] === 'King') {
		card1.src = spadeCards[12];
	}; 
};


if (cardSuit[randSuit1] === 'hearts') {
	if (cardValue[randValue1] === 'Ace') {
		card1.src = heartCards[0];
	} else if (cardValue[randValue1] === 2) {
		card1.src = heartCards[1];
	} else if (cardValue[randValue1] === 3) {
		card1.src = heartCards[2];
	} else if (cardValue[randValue1] === 4) {
		card1.src = heartCards[3];
	} else if (cardValue[randValue1] === 5) {
		card1.src = heartCards[4];
	} else if (cardValue[randValue1] === 6) {
		card1.src = heartCards[5];
	} else if (cardValue[randValue1] === 7) {
		card1.src = heartCards[6];
	} else if (cardValue[randValue1] === 8) {
		card1.src = heartCards[7];
	} else if (cardValue[randValue1] === 9) {
		card1.src = heartCards[8];
	} else if (cardValue[randValue1] === 10) {
		card1.src = heartCards[9];
	} else if (cardValue[randValue1] === 'Jack') {
		card1.src = heartCards[10];
	} else if (cardValue[randValue1] === 'Queen') {
		card1.src = heartCards[11];
	} else if (cardValue[randValue1] === 'King') {
		card1.src = heartCards[12];
	}; 
};


if (cardSuit[randSuit1] === 'diamonds') {
	if (cardValue[randValue1] === 'Ace') {
		card1.src = diamondCards[0];
	} else if (cardValue[randValue1] === 2) {
		card1.src = diamondCards[1];
	} else if (cardValue[randValue1] === 3) {
		card1.src = diamondCards[2];
	} else if (cardValue[randValue1] === 4) {
		card1.src = diamondCards[3];
	} else if (cardValue[randValue1] === 5) {
		card1.src = diamondCards[4];
	} else if (cardValue[randValue1] === 6) {
		card1.src = diamondCards[5];
	} else if (cardValue[randValue1] === 7) {
		card1.src = diamondCards[6];
	} else if (cardValue[randValue1] === 8) {
		card1.src = diamondCards[7];
	} else if (cardValue[randValue1] === 9) {
		card1.src = diamondCards[8];
	} else if (cardValue[randValue1] === 10) {
		card1.src = diamondCards[9];
	} else if (cardValue[randValue1] === 'Jack') {
		card1.src = diamondCards[10];
	} else if (cardValue[randValue1] === 'Queen') {
		card1.src = diamondCards[11];
	} else if (cardValue[randValue1] === 'King') {
		card1.src = diamondCards[12];
	}; 
};


/*card 2*/

if (cardSuit[randSuit2] === 'clubs') {
	if (cardValue[randValue2] === 'Ace') {
		card2.src = clubCards[0];
	} else if (cardValue[randValue2] === 2) {
		card2.src = clubCards[1];
	} else if (cardValue[randValue2] === 3) {
		card2.src = clubCards[2];
	} else if (cardValue[randValue2] === 4) {
		card2.src = clubCards[3];
	} else if (cardValue[randValue2] === 5) {
		card2.src = clubCards[4];
	} else if (cardValue[randValue2] === 6) {
		card2.src = clubCards[5];
	} else if (cardValue[randValue2] === 7) {
		card2.src = clubCards[6];
	} else if (cardValue[randValue2] === 8) {
		card2.src = clubCards[7];
	} else if (cardValue[randValue2] === 9) {
		card2.src = clubCards[8];
	} else if (cardValue[randValue2] === 10) {
		card2.src = clubCards[9];
	} else if (cardValue[randValue2] === 'Jack') {
		card2.src = clubCards[10];
	} else if (cardValue[randValue2] === 'Queen') {
		card2.src = clubCards[11];
	} else if (cardValue[randValue2] === 'King') {
		card2.src = clubCards[12];
	}; 
};


if (cardSuit[randSuit2] === 'spades') {
	if (cardValue[randValue2] === 'Ace') {
		card2.src = spadeCards[0];
	} else if (cardValue[randValue2] === 2) {
		card2.src = spadeCards[1];
	} else if (cardValue[randValue2] === 3) {
		card2.src = spadeCards[2];
	} else if (cardValue[randValue2] === 4) {
		card2.src = spadeCards[3];
	} else if (cardValue[randValue2] === 5) {
		card2.src = spadeCards[4];
	} else if (cardValue[randValue2] === 6) {
		card2.src = spadeCards[5];
	} else if (cardValue[randValue2] === 7) {
		card2.src = spadeCards[6];
	} else if (cardValue[randValue2] === 8) {
		card2.src = spadeCards[7];
	} else if (cardValue[randValue2] === 9) {
		card2.src = spadeCards[8];
	} else if (cardValue[randValue2] === 10) {
		card2.src = spadeCards[9];
	} else if (cardValue[randValue2] === 'Jack') {
		card2.src = spadeCards[10];
	} else if (cardValue[randValue2] === 'Queen') {
		card2.src = spadeCards[11];
	} else if (cardValue[randValue2] === 'King') {
		card2.src = spadeCards[12];
	}; 
};


if (cardSuit[randSuit2] === 'hearts') {
	if (cardValue[randValue2] === 'Ace') {
		card2.src = heartCards[0];
	} else if (cardValue[randValue2] === 2) {
		card2.src = heartCards[1];
	} else if (cardValue[randValue2] === 3) {
		card2.src = heartCards[2];
	} else if (cardValue[randValue2] === 4) {
		card2.src = heartCards[3];
	} else if (cardValue[randValue2] === 5) {
		card2.src = heartCards[4];
	} else if (cardValue[randValue2] === 6) {
		card2.src = heartCards[5];
	} else if (cardValue[randValue2] === 7) {
		card2.src = heartCards[6];
	} else if (cardValue[randValue2] === 8) {
		card2.src = heartCards[7];
	} else if (cardValue[randValue2] === 9) {
		card2.src = heartCards[8];
	} else if (cardValue[randValue2] === 10) {
		card2.src = heartCards[9];
	} else if (cardValue[randValue2] === 'Jack') {
		card2.src = heartCards[10];
	} else if (cardValue[randValue2] === 'Queen') {
		card2.src = heartCards[11];
	} else if (cardValue[randValue2] === 'King') {
		card2.src = heartCards[12];
	};
};


if (cardSuit[randSuit2] === 'diamonds') {
	if (cardValue[randValue2] === 'Ace') {
		card2.src = diamondCards[0];
	} else if (cardValue[randValue2] === 2) {
		card2.src = diamondCards[1];
	} else if (cardValue[randValue2] === 3) {
		card2.src = diamondCards[2];
	} else if (cardValue[randValue2] === 4) {
		card2.src = diamondCards[3];
	} else if (cardValue[randValue2] === 5) {
		card2.src = diamondCards[4];
	} else if (cardValue[randValue2] === 6) {
		card2.src = diamondCards[5];
	} else if (cardValue[randValue2] === 7) {
		card2.src = diamondCards[6];
	} else if (cardValue[randValue2] === 8) {
		card2.src = diamondCards[7];
	} else if (cardValue[randValue2] === 9) {
		card2.src = diamondCards[8];
	} else if (cardValue[randValue2] === 10) {
		card2.src = diamondCards[9];
	} else if (cardValue[randValue2] === 'Jack') {
		card2.src = diamondCards[10];
	} else if (cardValue[randValue2] === 'Queen') {
		card2.src = diamondCards[11];
	} else if (cardValue[randValue2] === 'King') {
		card2.src = diamondCards[12];
	}; 
};




	/*creating the sum of the cards, as well as a second sum for ace values*/


	cardSum1 = cardNumber1Opt1 + cardNumber2Opt1;
		
		if (cardNumber1Opt2 > 0) {
	cardSum2 = cardNumber1Opt2 + cardNumber2Opt1;
	} else if (cardNumber2Opt2 > 0) {
		cardSum2 = cardNumber1Opt1 + cardNumber2Opt2;
	} else if (cardNumber2Opt2 > 0 && cardNumber1Opt2 > 0) {
		cardSum2 = cardNumber1Opt1 + cardNumber2Opt2;
	} else {
		cardSum2 = 0;
	};


	/*Printing the sum on the webpage*/


	if (cardSum2 > 0) {
		cardVal.innerHTML = `${cardSum1} or ${cardSum2}`;
	} else {
		cardVal.innerHTML = cardSum1;
	};
	


	/*Printing bust statment and other statements based on the current sum*/

			if (cardSum1 <= 11) {
		bust.innerHTML = 'All clear';
	}; 

		if (cardSum1 > 11 && cardSum1 <= 14) {
		bust.innerHTML = 'Careful';
	}; 

		if (cardSum1 > 14 && cardSum1 <= 17) {
		bust.innerHTML = 'CAREFUL!'; 
	};

		if (cardSum1 > 17) {
		bust.innerHTML = 'CAREFUL!!!';
	};
	

	/*Resetting values from previous games after a new hand is dealt*/


	valueArr = [];
	suitArr = [];
	clickCount = 0;
	hitCount = 0;


	cardNumber1Opt1 = 0;
	cardNumber1Opt2 = 0;
	cardNumber2Opt1 = 0;
   cardNumber2Opt2 = 0;
	cardNumber3Opt1 = 0;
	cardNumber3Opt2 = 0;
	cardNumber4Opt1 = 0;
	cardNumber4Opt2 = 0;
	cardNumber5Opt1 = 0;
	cardNumber5Opt2 = 0;


	card3.src = '';
	card4.src = '';
	card5.src = '';

	

	flipinner3.style.display = 'none';
	flipinner4.style.display = 'none';
	flipinner5.style.display = 'none';


	const dealcard1 = () => {

	flipinner1.style.display = 'block';
	flipinner1.id = 'flipinner1';
	flipcard1.id = 'flipcard1';
	document.querySelector('#flipcard1').style.animation = 'move 1s forwards';	
	};
	
	const dealcard2 = () => {
	flipinner2.style.display = 'block';
	flipinner2.id = 'flipinner2';
	flipcard2.id = 'flipcard2';
	document.querySelector('#flipcard2').style.animation = 'move2 1s forwards';
	};

	setTimeout(dealcard1, 10);
	setTimeout(dealcard2, 100);
	/*I could make a second time function inside of these that will turn some arbitrary 
	variable on or off, and then when hit is pressed i can say if arbitrary variable equls
	null execute timing function before hit is excecuted if not then just let the hit excecute
	instantly
	I'm not sure why the first two cards onlyh animate if you press hit. If you press genhand
	twice in a row any time after the first doesn't play the animation. Like with the hit thing
	I could work around this by removing the listener for the hit button untill win lose or draw
	happens but I'd like it to be more fluid then that.*/






	/*Creating the event listiner for hit which will be removed when the player
	busts or presses stay*/


	hit.addEventListener("click", addCard);

	stay.addEventListener("click", pressStay);

	stay.addEventListener("click", timeFunction);	
};


const dcard1 = document.querySelector('.dcard1');
const dcard2 = document.querySelector('.dcard2');
const dcard3 = document.querySelector('.dcard3');
const dcard4 = document.querySelector('.dcard4');
const dcard5 = document.querySelector('.dcard5');



const dflipinner1 = document.querySelector('.dflipinner1');
const dflipinner2 = document.querySelector('.dflipinner2');
const dflipinner3 = document.querySelector('.dflipinner3');
const dflipinner4 = document.querySelector('.dflipinner4');
const dflipinner5 = document.querySelector('.dflipinner5');



const dflipcard1 = document.querySelector('.dflipcard1');
const dflipcard2 = document.querySelector('.dflipcard2');
const dflipcard3 = document.querySelector('.dflipcard3');
const dflipcard4 = document.querySelector('.dflipcard4');
const dflipcard5 = document.querySelector('.dflipcard5');


/*Dealer functions variables*/

let dealBust = document.querySelector('.dealbust');
let dealText = document.querySelector('.dealtext');
let dealVal = document.querySelector('.dealsum');



let randValue1DOut = 0;
let randSuit1DOut = 0;
let randValue2DOut = 0;
let randSuit2DOut = 0;




let cardNumber1Opt1D = 0;
let cardNumber1Opt2D = 0;
let cardNumber2Opt1D = 0;
let cardNumber2Opt2D = 0;
let cardNumber3Opt1D = 0;
let cardNumber3Opt2D = 0;
let cardNumber4Opt1D = 0;
let cardNumber4Opt2D = 0;
let cardNumber5Opt1D = 0;
let cardNumber5Opt2D = 0;



/*The primary and secondary sum of all cards dealt*/

let cardSum1D = 0;
let cardSum2D = 0;

let cardSum1New3DOut = 0;

/*Arrays for the cards dealt in the hit function so they can be reused after 
a new random number is generated on each succesive click*/

let valueArrD = [];
let suitArrD = [];
                

let hitCount = 0;


const genDealerHand2 = () => {
	

	hitCount ++;

	const randValue3D = Math.floor(Math.random()*13);
	const randSuit3D = Math.floor(Math.random()*4);


	if (hitCount===1) {
		dflipinner3.style.display = 'block';
	
	} else if (hitCount===2) {
		dflipinner4.style.display = 'block';
	
	} else if (hitCount===3) {
		dflipinner5.style.display = 'block';
	};

	/*Generating number values for the face cards for each click*/
	/*There's still an issue here when two aces are dealt sometimes. a 4 A A only gave 6 and
	not 6 or 16*/
	if (cardValue[randValue3D]==='Jack' && hitCount===1 || 
		cardValue[randValue3D]==='Queen' && hitCount===1 || 
		cardValue[randValue3D]==='King' && hitCount===1) {
		cardNumber3Opt1D = 10;
		valueArrD.push(cardValue[randValue3D]);
		suitArrD.push(cardSuit[randSuit3D]);

	} else if (cardValue[randValue3D]==='Ace' && hitCount===1) {
			cardNumber3Opt1D = 1;
			cardNumber3Opt2D = 10;
			valueArrD.push(cardValue[randValue3D]);
			suitArrD.push(cardSuit[randSuit3D]);

	} else if (hitCount===1) {
		cardNumber3Opt1D = cardValue[randValue3D];
		valueArrD.push(cardValue[randValue3D]);
		suitArrD.push(cardSuit[randSuit3D]);
	}; 



	if (cardValue[randValue3D]==='Jack' && hitCount===2 || 
		cardValue[randValue3D]==='Queen' && hitCount===2 || 
		cardValue[randValue3D]==='King' && hitCount===2) {
		cardNumber4Opt1D = 10;
		valueArrD.push(cardValue[randValue3D]);
		suitArrD.push(cardSuit[randSuit3D]);

	} else if (cardValue[randValue3D]==='Ace' && hitCount===2) {
			cardNumber4Opt1D = 1;
			cardNumber4Opt2D = 10;
			valueArrD.push(cardValue[randValue3D]);
			suitArrD.push(cardSuit[randSuit3D]);

	} else if (hitCount===2) {
		cardNumber4Opt1D = cardValue[randValue3D];
		valueArrD.push(cardValue[randValue3D]);
		suitArrD.push(cardSuit[randSuit3D]);
	};



	if (cardValue[randValue3D]==='Jack' && hitCount===3 || 
		cardValue[randValue3D]==='Queen' && hitCount===3 || 
		cardValue[randValue3D]==='King' && hitCount===3) {
		cardNumber5Opt1D = 10;
		valueArrD.push(cardValue[randValue3D]);
		suitArrD.push(cardSuit[randSuit3D]);

	} else if (cardValue[randValue3D]==='Ace' && hitCount===3) {
			cardNumber5Opt1D = 1;
			cardNumber5Opt2D = 10;
			valueArrD.push(cardValue[randValue3D]);
			suitArrD.push(cardSuit[randSuit3D]);
			
	} else if (hitCount===3) {
		cardNumber5Opt1D = cardValue[randValue3D];
		valueArrD.push(cardValue[randValue3D]);
		suitArrD.push(cardSuit[randSuit3D]);
	};


/*Printing the cards that were 'dealt' on each hit*/
	

/*card 3*/

if (suitArrD[0] === 'clubs') {
	if (valueArrD[0] === 'Ace') {
		dcard3.src = clubCards[0];
	} else if (valueArrD[0] === 2) {
		dcard3.src = clubCards[1];
	} else if (valueArrD[0] === 3) {
		dcard3.src = clubCards[2];
	} else if (valueArrD[0] === 4) {
		dcard3.src = clubCards[3];
	} else if (valueArrD[0] === 5) {
		dcard3.src = clubCards[4];
	} else if (valueArrD[0] === 6) {
		dcard3.src = clubCards[5];
	} else if (valueArrD[0] === 7) {
		dcard3.src = clubCards[6];
	} else if (valueArrD[0] === 8) {
		dcard3.src = clubCards[7];
	} else if (valueArrD[0] === 9) {
		dcard3.src = clubCards[8];
	} else if (valueArrD[0] === 10) {
		dcard3.src = clubCards[9];
	} else if (valueArrD[0] === 'Jack') {
		dcard3.src = clubCards[10];
	} else if (valueArrD[0] === 'Queen') {
		dcard3.src = clubCards[11];
	} else if (valueArrD[0] === 'King') {
		dcard3.src = clubCards[12];
	}; 
};


if (suitArrD[0] === 'spades') {
	if (valueArrD[0] === 'Ace') {
		dcard3.src = spadeCards[0];
	} else if (valueArrD[0] === 2) {
		dcard3.src = spadeCards[1];
	} else if (valueArrD[0] === 3) {
		dcard3.src = spadeCards[2];
	} else if (valueArrD[0] === 4) {
		dcard3.src = spadeCards[3];
	} else if (valueArrD[0] === 5) {
		dcard3.src = spadeCards[4];
	} else if (valueArrD[0] === 6) {
		dcard3.src = spadeCards[5];
	} else if (valueArrD[0] === 7) {
		dcard3.src = spadeCards[6];
	} else if (valueArrD[0] === 8) {
		dcard3.src = spadeCards[7];
	} else if (valueArrD[0] === 9) {
		dcard3.src = spadeCards[8];
	} else if (valueArrD[0] === 10) {
		dcard3.src = spadeCards[9];
	} else if (valueArrD[0] === 'Jack') {
		dcard3.src = spadeCards[10];
	} else if (valueArrD[0] === 'Queen') {
		dcard3.src = spadeCards[11];
	} else if (valueArrD[0] === 'King') {
		dcard3.src = spadeCards[12];
	}; 
};


if (suitArrD[0] === 'hearts') {
	if (valueArrD[0] === 'Ace') {
		dcard3.src = heartCards[0];
	} else if (valueArrD[0] === 2) {
		dcard3.src = heartCards[1];
	} else if (valueArrD[0] === 3) {
		dcard3.src = heartCards[2];
	} else if (valueArrD[0] === 4) {
		dcard3.src = heartCards[3];
	} else if (valueArrD[0] === 5) {
		dcard3.src = heartCards[4];
	} else if (valueArrD[0] === 6) {
		dcard3.src = heartCards[5];
	} else if (valueArrD[0] === 7) {
		dcard3.src = heartCards[6];
	} else if (valueArrD[0] === 8) {
		dcard3.src = heartCards[7];
	} else if (valueArrD[0] === 9) {
		dcard3.src = heartCards[8];
	} else if (valueArrD[0] === 10) {
		dcard3.src = heartCards[9];
	} else if (valueArrD[0] === 'Jack') {
		dcard3.src = heartCards[10];
	} else if (valueArrD[0] === 'Queen') {
		dcard3.src = heartCards[11];
	} else if (valueArrD[0] === 'King') {
		dcard3.src = heartCards[12];
	};
};


if (suitArrD[0] === 'diamonds') {
	if (valueArrD[0] === 'Ace') {
		dcard3.src = diamondCards[0];
	} else if (valueArrD[0] === 2) {
		dcard3.src = diamondCards[1];
	} else if (valueArrD[0] === 3) {
		dcard3.src = diamondCards[2];
	} else if (valueArrD[0] === 4) {
		dcard3.src = diamondCards[3];
	} else if (valueArrD[0] === 5) {
		dcard3.src = diamondCards[4];
	} else if (valueArrD[0] === 6) {
		dcard3.src = diamondCards[5];
	} else if (valueArrD[0] === 7) {
		dcard3.src = diamondCards[6];
	} else if (valueArrD[0] === 8) {
		dcard3.src = diamondCards[7];
	} else if (valueArrD[0] === 9) {
		dcard3.src = diamondCards[8];
	} else if (valueArrD[0] === 10) {
		dcard3.src = diamondCards[9];
	} else if (valueArrD[0] === 'Jack') {
		dcard3.src = diamondCards[10];
	} else if (valueArrD[0] === 'Queen') {
		dcard3.src = diamondCards[11];
	} else if (valueArrD[0] === 'King') {
		dcard3.src = diamondCards[12];
	}; 
};


/*card 4*/
if (suitArrD[1] === 'clubs') {
	if (valueArrD[1] === 'Ace') {
		dcard4.src = clubCards[0];
	} else if (valueArrD[1] === 2) {
		dcard4.src = clubCards[1];
	} else if (valueArrD[1] === 3) {
		dcard4.src = clubCards[2];
	} else if (valueArrD[1] === 4) {
		dcard4.src = clubCards[3];
	} else if (valueArrD[1] === 5) {
		dcard4.src = clubCards[4];
	} else if (valueArrD[1] === 6) {
		dcard4.src = clubCards[5];
	} else if (valueArrD[1] === 7) {
		dcard4.src = clubCards[6];
	} else if (valueArrD[1] === 8) {
		dcard4.src = clubCards[7];
	} else if (valueArrD[1] === 9) {
		dcard4.src = clubCards[8];
	} else if (valueArrD[1] === 10) {
		dcard4.src = clubCards[9];
	} else if (valueArrD[1] === 'Jack') {
		dcard4.src = clubCards[10];
	} else if (valueArrD[1] === 'Queen') {
		dcard4.src = clubCards[11];
	} else if (valueArrD[1] === 'King') {
		dcard4.src = clubCards[12];
	}; 
};


if (suitArrD[1] === 'spades') {
	if (valueArrD[1] === 'Ace') {
		dcard4.src = spadeCards[0];
	} else if (valueArrD[1] === 2) {
		dcard4.src = spadeCards[1];
	} else if (valueArrD[1] === 3) {
		dcard4.src = spadeCards[2];
	} else if (valueArrD[1] === 4) {
		dcard4.src = spadeCards[3];
	} else if (valueArrD[1] === 5) {
		dcard4.src = spadeCards[4];
	} else if (valueArrD[1] === 6) {
		dcard4.src = spadeCards[5];
	} else if (valueArrD[1] === 7) {
		dcard4.src = spadeCards[6];
	} else if (valueArrD[1] === 8) {
		dcard4.src = spadeCards[7];
	} else if (valueArrD[1] === 9) {
		dcard4.src = spadeCards[8];
	} else if (valueArrD[1] === 10) {
		dcard4.src = spadeCards[9];
	} else if (valueArrD[1] === 'Jack') {
		dcard4.src = spadeCards[10];
	} else if (valueArrD[1] === 'Queen') {
		dcard4.src = spadeCards[11];
	} else if (valueArrD[1] === 'King') {
		dcard4.src = spadeCards[12];
	}; 
};


if (suitArrD[1] === 'hearts') {
	if (valueArrD[1] === 'Ace') {
		dcard4.src = heartCards[0];
	} else if (valueArrD[1] === 2) {
		dcard4.src = heartCards[1];
	} else if (valueArrD[1] === 3) {
		dcard4.src = heartCards[2];
	} else if (valueArrD[1] === 4) {
		dcard4.src = heartCards[3];
	} else if (valueArrD[1] === 5) {
		dcard4.src = heartCards[4];
	} else if (valueArrD[1] === 6) {
		dcard4.src = heartCards[5];
	} else if (valueArrD[1] === 7) {
		dcard4.src = heartCards[6];
	} else if (valueArrD[1] === 8) {
		dcard4.src = heartCards[7];
	} else if (valueArrD[1] === 9) {
		dcard4.src = heartCards[8];
	} else if (valueArrD[1] === 10) {
		dcard4.src = heartCards[9];
	} else if (valueArrD[1] === 'Jack') {
		dcard4.src = heartCards[10];
	} else if (valueArrD[1] === 'Queen') {
		dcard4.src = heartCards[11];
	} else if (valueArrD[1] === 'King') {
		dcard4.src = heartCards[12];
	};
};


if (suitArrD[1] === 'diamonds') {
	if (valueArrD[1] === 'Ace') {
		dcard4.src = diamondCards[0];
	} else if (valueArrD[1] === 2) {
		dcard4.src = diamondCards[1];
	} else if (valueArrD[1] === 3) {
		dcard4.src = diamondCards[2];
	} else if (valueArrD[1] === 4) {
		dcard4.src = diamondCards[3];
	} else if (valueArrD[1] === 5) {
		dcard4.src = diamondCards[4];
	} else if (valueArrD[1] === 6) {
		dcard4.src = diamondCards[5];
	} else if (valueArrD[1] === 7) {
		dcard4.src = diamondCards[6];
	} else if (valueArrD[1] === 8) {
		dcard4.src = diamondCards[7];
	} else if (valueArrD[1] === 9) {
		dcard4.src = diamondCards[8];
	} else if (valueArrD[1] === 10) {
		dcard4.src = diamondCards[9];
	} else if (valueArrD[1] === 'Jack') {
		dcard4.src = diamondCards[10];
	} else if (valueArrD[1] === 'Queen') {
		dcard4.src = diamondCards[11];
	} else if (valueArrD[1] === 'King') {
		dcard4.src = diamondCards[12];
	}; 
};


/*card5*/
if (suitArrD[2] === 'clubs') {
	if (valueArrD[2] === 'Ace') {
		dcard5.src = clubCards[0];
	} else if (valueArrD[2] === 2) {
		dcard5.src = clubCards[1];
	} else if (valueArrD[2] === 3) {
		dcard5.src = clubCards[2];
	} else if (valueArrD[2] === 4) {
		dcard5.src = clubCards[3];
	} else if (valueArrD[2] === 5) {
		dcard5.src = clubCards[4];
	} else if (valueArrD[2] === 6) {
		dcard5.src = clubCards[5];
	} else if (valueArrD[2] === 7) {
		dcard5.src = clubCards[6];
	} else if (valueArrD[2] === 8) {
		dcard5.src = clubCards[7];
	} else if (valueArrD[2] === 9) {
		dcard5.src = clubCards[8];
	} else if (valueArrD[2] === 10) {
		dcard5.src = clubCards[9];
	} else if (valueArrD[2] === 'Jack') {
		dcard5.src = clubCards[10];
	} else if (valueArrD[2] === 'Queen') {
		dcard5.src = clubCards[11];
	} else if (valueArrD[2] === 'King') {
		dcard5.src = clubCards[12];
	}; 
};


if (suitArrD[2] === 'spades') {
	if (valueArrD[2] === 'Ace') {
		dcard5.src = spadeCards[0];
	} else if (valueArrD[2] === 2) {
		dcard5.src = spadeCards[1];
	} else if (valueArrD[2] === 3) {
		dcard5.src = spadeCards[2];
	} else if (valueArrD[2] === 4) {
		dcard5.src = spadeCards[3];
	} else if (valueArrD[2] === 5) {
		dcard5.src = spadeCards[4];
	} else if (valueArrD[2] === 6) {
		dcard5.src = spadeCards[5];
	} else if (valueArrD[2] === 7) {
		dcard5.src = spadeCards[6];
	} else if (valueArrD[2] === 8) {
		dcard5.src = spadeCards[7];
	} else if (valueArrD[2] === 9) {
		dcard5.src = spadeCards[8];
	} else if (valueArrD[2] === 10) {
		dcard5.src = spadeCards[9];
	} else if (valueArrD[2] === 'Jack') {
		dcard5.src = spadeCards[10];
	} else if (valueArrD[2] === 'Queen') {
		dcard5.src = spadeCards[11];
	} else if (valueArrD[2] === 'King') {
		dcard5.src = spadeCards[12];
	}; 
};


if (suitArrD[2] === 'hearts') {
	if (valueArrD[2] === 'Ace') {
		dcard5.src = heartCards[0];
	} else if (valueArrD[2] === 2) {
		dcard5.src = heartCards[1];
	} else if (valueArrD[2] === 3) {
		dcard5.src = heartCards[2];
	} else if (valueArrD[2] === 4) {
		dcard5.src = heartCards[3];
	} else if (valueArrD[2] === 5) {
		dcard5.src = heartCards[4];
	} else if (valueArrD[2] === 6) {
		dcard5.src = heartCards[5];
	} else if (valueArrD[2] === 7) {
		dcard5.src = heartCards[6];
	} else if (valueArrD[2] === 8) {
		dcard5.src = heartCards[7];
	} else if (valueArrD[2] === 9) {
		dcard5.src = heartCards[8];
	} else if (valueArrD[2] === 10) {
		dcard5.src = heartCards[9];
	} else if (valueArrD[2] === 'Jack') {
		dcard5.src = heartCards[10];
	} else if (valueArrD[2] === 'Queen') {
		dcard5.src = heartCards[11];
	} else if (valueArrD[2] === 'King') {
		dcard5.src = heartCards[12];
	};
};


if (suitArrD[2] === 'diamonds') {
	if (valueArrD[2] === 'Ace') {
		dcard5.src = diamondCards[0];
	} else if (valueArrD[2] === 2) {
		dcard5.src = diamondCards[1];
	} else if (valueArrD[2] === 3) {
		dcard5.src = diamondCards[2];
	} else if (valueArrD[2] === 4) {
		dcard5.src = diamondCards[3];
	} else if (valueArrD[2] === 5) {
		dcard5.src = diamondCards[4];
	} else if (valueArrD[2] === 6) {
		dcard5.src = diamondCards[5];
	} else if (valueArrD[2] === 7) {
		dcard5.src = diamondCards[6];
	} else if (valueArrD[2] === 8) {
		dcard5.src = diamondCards[7];
	} else if (valueArrD[2] === 9) {
		dcard5.src = diamondCards[8];
	} else if (valueArrD[2] === 10) {
		dcard5.src = diamondCards[9];
	} else if (valueArrD[2] === 'Jack') {
		dcard5.src = diamondCards[10];
	} else if (valueArrD[2] === 'Queen') {
		dcard5.src = diamondCards[11];
	} else if (valueArrD[2] === 'King') {
		dcard5.src = diamondCards[12];
	}; 
};






	/*Creating the primary sum and secondary sum for the ace values.*/
	
	cardSum1New1D = cardSum1D + cardNumber3Opt1D;
	cardSum1New2D = cardSum1New1D + cardNumber4Opt1D;
	cardSum1New3D = cardSum1New2D + cardNumber5Opt1D;

	cardSum1New3DOut = cardSum1New3D;
	
	

	if (cardNumber3Opt1D === 1 && cardSum2D === 0) {
		cardSum2D = cardSum1New1D + cardNumber3Opt2D;
	} else if (cardNumber3Opt1D === 1 && cardSum2D > 0) {
		cardSum2D += cardNumber3Opt2D;
	} else if (cardNumber3Opt1D !== 1 && cardSum2D > 0) {
		cardSum2D += cardNumber3Opt1D;
	};



	if (cardNumber4Opt1D === 1 && cardSum2D === 0) {
		cardSum2D = cardSum1New2D + cardNumber4Opt2D;
	} else if (cardNumber4Opt1D === 1 && cardSum2D > 0) {
		cardSum2D += cardNumber4Opt2D;
	} else if (cardNumber4Opt1D !== 1 && cardSum2D > 0) {
		cardSum2D += cardNumber4Opt1D;
	};


	if (cardNumber5Opt1D === 1 && cardSum2D === 0) {
		cardSum2D = cardSum1New3D + cardNumber5Opt2D;
	} else if (cardNumber5Opt1D === 1 && cardSum2D > 0) {
		cardSum2D += cardNumber5Opt2D;
	} else if (cardNumber5Opt1D !== 1 && cardSum2D > 0) {
		cardSum2D += cardNumber5Opt1D;
	};


	
 	if (cardSum2D > 21) {
 		cardSum2D = 0;
 	};


 	/*printing the sums for each hit*/


	if (cardSum2D > 0 && hitCount===1) {
		dealVal.innerHTML = `${cardSum1New1D} or ${cardSum2D}`;
	} else if (hitCount===1) {
		dealVal.innerHTML = cardSum1New1D;
	};



	if (cardSum2D > 0 && hitCount===2) {
		dealVal.innerHTML = `${cardSum1New2D} or ${cardSum2D}`;
	} else if (hitCount===2) {
		dealVal.innerHTML = cardSum1New2D;
	};
	

	if (cardSum2D > 0 && hitCount===3) {
		dealVal.innerHTML = `${cardSum1New3D} or ${cardSum2D}`;
	} else if (hitCount===3) {
		dealVal.innerHTML = cardSum1New3D;
	};

	if (cardSum2D > 0 && hitCount===4) {
		dealVal.innerHTML = `${cardSum1New3D} or ${cardSum2D}`;
	} else if (hitCount===3) {
		dealVal.innerHTML = cardSum1New3D;
	};

	/*Printing messages that discribe how safe it is to hit again*/

	if (cardSum1D <= 11 || cardSum1New1D <= 11 || cardSum1New2D <= 11 
	|| cardSum1New3D <= 11) {
	dealBust.innerHTML = 'All clear';
	}; 

	if (cardSum1D > 11 && cardSum1D <= 14 || cardSum1New1D > 11 && 
	cardSum1New1D <= 14 || cardSum1New2D > 11 && cardSum1New2D <= 14 
	|| cardSum1New3D > 11 && cardSum1New3D <= 14) {
	dealBust.innerHTML = 'Careful';
	}; 

	if (cardSum1D > 14 && cardSum1D <= 17 || cardSum1New1D > 14 && 
	cardSum1New1D <= 17 || cardSum1New2D > 14 && cardSum1New2D <= 17 
	|| cardSum1New3D > 14 && cardSum1New3D <= 17) {
	dealBust.innerHTML = 'CAREFUL!'; 
	}; 

	if (cardSum1D > 17 || cardSum1New1D > 17 || cardSum1New2D > 17 
	|| cardSum1New3D > 17) {
	dealBust.innerHTML = 'CAREFUL!!!';
	};

	
/*
	if (hitCount === 1) {
		/*I could but a 1 second delay on each hit so that the animations will always run through
		but i'd like it to be so that you can press hit when ever and have all the animations running
		smoothly together. The real problem is redefining the position. putting the new animation on
		a different class instead of the id doesn't help. as soon as you press hit the new position
		is defined so the position jumps from wherever it was in the animation to the new end point
		not defining the new point puts the card back on the deck. Maybe my inital idea of defining
		the position where it should've been in the player hand and then running the animatio backward
		would work better. But there's still the issue of redefining the position after every incremint
		to the left for the next increment*/
		/*IDK why i went through so much hasle before to get these lined up. just do the full
		width in half and subtract the width of a card for card 1. Then shift 35px each time
		and whatever that is as a percent and then I could set all the initial moves based on that
		instead of the other way around and it would turn out better
		dflipcard1.style.top = '43.4%';
		dflipcard1.style.left = '130px';
		dflipcard2.style.top = '43.4%';
		dflipcard2.style.left = '200px';
		dflipinner3.id = 'dflipinner3';
		dflipcard3.id = 'dflipcard3';
		
		document.querySelector('#dflipcard1').style.animation = 'moveincriment 1s forwards';
		
		/*I'm not going to worry about it right now but for some reason the below doesn't 
		work when i define the flipcard 1 id as a variable and use the variable name
		/*document.querySelector('#flipcard1').style.animation = 'moveincriment 1s forwards';
		document.querySelector('#dflipcard2').style.animation = 'moveincriment 1s forwards';
		document.querySelector('#dflipcard3').style.animation = 'move3d 1s forwards';
		/*Idk why i wasn't thinking to just defin move 3 here and do it sequintially like that
		the timefunction i made didn't work which i think the reason is the move of the animation
		was defined way before The card actually was doing this move up here. idk it's late lol
		I keep getting mixed up with little stuff and forgetting, like i forgot i put the flipinner
		id up here. I was like how is it flipping when the inner id isn't defined. It's late and
		this is the most complex thing i've done but it's good because i'm learning alot and i didn't
		really know much about animations before because the section on them was brief so this is good
		*/
		
		/*I'm not exacly sure why the code below needs to be an else if. when i just put it
		as another if after this one it doesn't work
	} else if (hitCount === 2) {
		dflipcard1.style.top = '43.4%';
		dflipcard1.style.left = '95px';
		dflipcard2.style.top = '43.4%';
		dflipcard2.style.left = '165px';
		dflipcard3.style.top = '43.4%';
		dflipcard3.style.left = '235px';
		dflipinner4.id = 'dflipinner4';
		dflipcard4.id = 'dflipcard4';

		document.querySelector('#dflipcard1').style.animation = 'moveincriment2 1s forwards';
		document.querySelector('#dflipcard2').style.animation = 'moveincriment2 1s forwards';
		document.querySelector('#dflipcard3').style.animation = 'moveincriment 1s forwards';
		document.querySelector('#dflipcard4').style.animation = 'move4d 1s forwards';
	} else if (hitCount === 3) {
		dflipcard1.style.top = '43.4%';
		dflipcard1.style.left = '60px';
		dflipcard2.style.top = '43.4%';
		dflipcard2.style.left = '130px';
		dflipcard3.style.top = '43.4';
		dflipcard3.style.left = '200px';
		dflipcard4.style.top = '43.4%';
		dflipcard4.style.left = '270px';
		dflipinner5.id = 'dflipinner5';
		dflipcard5.id = 'dflipcard5';

		document.querySelector('#dflipcard1').style.animation = 'moveincriment3 1s forwards';
		document.querySelector('#dflipcard2').style.animation = 'moveincriment3 1s forwards';
		document.querySelector('#dflipcard3').style.animation = 'moveincriment2 1s forwards';
		document.querySelector('#dflipcard4').style.animation = 'moveincriment 1s forwards';
		document.querySelector('#dflipcard5').style.animation = 'move5d 1s forwards';
	};*/

	if (hitCount === 1) {
		/*I could but a 1 second delay on each hit so that the animations will always run through
		but i'd like it to be so that you can press hit when ever and have all the animations running
		smoothly together. The real problem is redefining the position. putting the new animation on
		a different class instead of the id doesn't help. as soon as you press hit the new position
		is defined so the position jumps from wherever it was in the animation to the new end point
		not defining the new point puts the card back on the deck. Maybe my inital idea of defining
		the position where it should've been in the player hand and then running the animatio backward
		would work better. But there's still the issue of redefining the position after every incremint
		to the left for the next increment*/
		dflipcard1.style.top = '40%';
		dflipcard1.style.left = '10.833333333333333333333333333333333333333333%';
		dflipcard2.style.top = '40%';
		dflipcard2.style.left = '16.666666666666666666666666666666666666666666666667%';
		dflipinner3.id = 'dflipinner3';
		dflipcard3.id = 'dflipcard3';
		/*2.9166666666666666666666666666666666666666666666667% is 35px*/
		document.querySelector('#dflipcard1').style.animation = 'moveincriment 1s forwards';
		
		/*I'm not going to worry about it right now but for some reason the below doesn't 
		work when i define the flipcard 1 id as a variable and use the variable name*/
		/*document.querySelector('#flipcard1').style.animation = 'moveincriment 1s forwards';*/
		document.querySelector('#dflipcard2').style.animation = 'moveincriment 1s forwards';
		document.querySelector('#dflipcard3').style.animation = 'move3d 1s forwards';
		/*Idk why i wasn't thinking to just defin move 3 here and do it sequintially like that
		the timefunction i made didn't work which i think the reason is the move of the animation
		was defined way before The card actually was doing this move up here. idk it's late lol
		I keep getting mixed up with little stuff and forgetting, like i forgot i put the flipinner
		id up here. I was like how is it flipping when the inner id isn't defined. It's late and
		this is the most complex thing i've done but it's good because i'm learning alot and i didn't
		really know much about animations before because the section on them was brief so this is good
		*/
		
		/*I'm not exacly sure why the code below needs to be an else if. when i just put it
		as another if after this one it doesn't work*/
	} else if (hitCount === 2) {
		dflipcard1.style.top = '40%';
		dflipcard1.style.left = '7.916666666666666666666666666666666666666666666666666667%';
		dflipcard2.style.top = '40%';
		dflipcard2.style.left = '13.75%';
		dflipcard3.style.top = '40%';
		dflipcard3.style.left = '19.5833333333333333333333333333333333333333333333333333333%';
		dflipinner4.id = 'dflipinner4';
		dflipcard4.id = 'dflipcard4';

		document.querySelector('#dflipcard1').style.animation = 'moveincriment2 1s forwards';
		document.querySelector('#dflipcard2').style.animation = 'moveincriment2 1s forwards';
		document.querySelector('#dflipcard3').style.animation = 'moveincriment 1s forwards';
		document.querySelector('#dflipcard4').style.animation = 'move4d 1s forwards';
	} else if (hitCount === 3) {
		dflipcard1.style.top = '40%';
		dflipcard1.style.left = '5%';
		dflipcard2.style.top = '40%';
		dflipcard2.style.left = '10.8333333333333333333333333333333333333333333333%';
		dflipcard3.style.top = '40%';
		dflipcard3.style.left = '16.6666666666666666666666666666666666666666666666666667%';
		dflipcard4.style.top = '40%';
		dflipcard4.style.left = '22.5%';
		dflipinner5.id = 'dflipinner5';
		dflipcard5.id = 'dflipcard5';

		document.querySelector('#dflipcard1').style.animation = 'moveincriment3 1s forwards';
		document.querySelector('#dflipcard2').style.animation = 'moveincriment3 1s forwards';
		document.querySelector('#dflipcard3').style.animation = 'moveincriment2 1s forwards';
		document.querySelector('#dflipcard4').style.animation = 'moveincriment 1s forwards';
		document.querySelector('#dflipcard5').style.animation = 'move5d 1s forwards';
	};





	stay.removeEventListener('click', timeFunction);
	timeFunction2();

	
};

/*when the dealer runs out of cards before busting or staying when you start a new hand it
sometimes just starts dealing the dealers hands because that function for the dealer never really
finished excecuting. putting more cards in the thing would fix this but also I should try to
find a way to make this not happen in the case that you select a new hand during the dealers draws
arbitrarily.*/

const timeFunction = () => {
	if (cardSum1New3DOut !== cardNumber3Opt1D + cardNumber4Opt1D + cardNumber5Opt1D + cardSum1D) {
		cardSum1New3DOut = cardSum1D;
	 }; 

	 if (cardSum1New3Out !== cardNumber3Opt1 + cardNumber4Opt1 + cardNumber5Opt1 + cardSum1) {
		cardSum1New3Out = cardSum1;
	 }; 
	dflipinner1.id = 'dflipinner1';
		
		document.querySelector('#dflipinner1').style.animation =  'flip 1s forwards';

	if (cardSuit[randSuit1DOut] === 'clubs') {
		if (cardValue[randValue1DOut] === 'Ace') {
		dcard1.src = clubCards[0];
	} else if (cardValue[randValue1DOut] === 2) {
		dcard1.src = clubCards[1];
	} else if (cardValue[randValue1DOut] === 3) {
		dcard1.src = clubCards[2];
	} else if (cardValue[randValue1DOut] === 4) {
		dcard1.src = clubCards[3];
	} else if (cardValue[randValue1DOut] === 5) {
		dcard1.src = clubCards[4];
	} else if (cardValue[randValue1DOut] === 6) {
		dcard1.src = clubCards[5];
	} else if (cardValue[randValue1DOut] === 7) {
		dcard1.src = clubCards[6];
	} else if (cardValue[randValue1DOut] === 8) {
		dcard1.src = clubCards[7];
	} else if (cardValue[randValue1DOut] === 9) {
		dcard1.src = clubCards[8];
	} else if (cardValue[randValue1DOut] === 10) {
		dcard1.src = clubCards[9];
	} else if (cardValue[randValue1DOut] === 'Jack') {
		dcard1.src = clubCards[10];
	} else if (cardValue[randValue1DOut] === 'Queen') {
		dcard1.src = clubCards[11];
	} else if (cardValue[randValue1DOut] === 'King') {
		dcard1.src = clubCards[12];
	}; 
};


if (cardSuit[randSuit1DOut] === 'spades') {
	if (cardValue[randValue1DOut] === 'Ace') {
		dcard1.src = spadeCards[0];
	} else if (cardValue[randValue1DOut] === 2) {
		dcard1.src = spadeCards[1];
	} else if (cardValue[randValue1DOut] === 3) {
		dcard1.src = spadeCards[2];
	} else if (cardValue[randValue1DOut] === 4) {
		dcard1.src = spadeCards[3];
	} else if (cardValue[randValue1DOut] === 5) {
		dcard1.src = spadeCards[4];
	} else if (cardValue[randValue1DOut] === 6) {
		dcard1.src = spadeCards[5];
	} else if (cardValue[randValue1DOut] === 7) {
		dcard1.src = spadeCards[6];
	} else if (cardValue[randValue1DOut] === 8) {
		dcard1.src = spadeCards[7];
	} else if (cardValue[randValue1DOut] === 9) {
		dcard1.src = spadeCards[8];
	} else if (cardValue[randValue1DOut] === 10) {
		dcard1.src = spadeCards[9];
	} else if (cardValue[randValue1DOut] === 'Jack') {
		dcard1.src = spadeCards[10];
	} else if (cardValue[randValue1DOut] === 'Queen') {
		dcard1.src = spadeCards[11];
	} else if (cardValue[randValue1DOut] === 'King') {
		dcard1.src = spadeCards[12];
	}; 
};


if (cardSuit[randSuit1DOut] === 'hearts') {
	if (cardValue[randValue1DOut] === 'Ace') {
		dcard1.src = heartCards[0];
	} else if (cardValue[randValue1DOut] === 2) {
		dcard1.src = heartCards[1];
	} else if (cardValue[randValue1DOut] === 3) {
		dcard1.src = heartCards[2];
	} else if (cardValue[randValue1DOut] === 4) {
		dcard1.src = heartCards[3];
	} else if (cardValue[randValue1DOut] === 5) {
		dcard1.src = heartCards[4];
	} else if (cardValue[randValue1DOut] === 6) {
		dcard1.src = heartCards[5];
	} else if (cardValue[randValue1DOut] === 7) {
		dcard1.src = heartCards[6];
	} else if (cardValue[randValue1DOut] === 8) {
		dcard1.src = heartCards[7];
	} else if (cardValue[randValue1DOut] === 9) {
		dcard1.src = heartCards[8];
	} else if (cardValue[randValue1DOut] === 10) {
		dcard1.src = heartCards[9];
	} else if (cardValue[randValue1DOut] === 'Jack') {
		dcard1.src = heartCards[10];
	} else if (cardValue[randValue1DOut] === 'Queen') {
		dcard1.src = heartCards[11];
	} else if (cardValue[randValue1DOut] === 'King') {
		dcard1.src = heartCards[12];
	}; 
};


if (cardSuit[randSuit1DOut] === 'diamonds') {
	if (cardValue[randValue1DOut] === 'Ace') {
		dcard1.src = diamondCards[0];
	} else if (cardValue[randValue1DOut] === 2) {
		dcard1.src = diamondCards[1];
	} else if (cardValue[randValue1DOut] === 3) {
		dcard1.src = diamondCards[2];
	} else if (cardValue[randValue1DOut] === 4) {
		dcard1.src = diamondCards[3];
	} else if (cardValue[randValue1DOut] === 5) {
		dcard1.src = diamondCards[4];
	} else if (cardValue[randValue1DOut] === 6) {
		dcard1.src = diamondCards[5];
	} else if (cardValue[randValue1DOut] === 7) {
		dcard1.src = diamondCards[6];
	} else if (cardValue[randValue1DOut] === 8) {
		dcard1.src = diamondCards[7];
	} else if (cardValue[randValue1DOut] === 9) {
		dcard1.src = diamondCards[8];
	} else if (cardValue[randValue1DOut] === 10) {
		dcard1.src = diamondCards[9];
	} else if (cardValue[randValue1DOut] === 'Jack') {
		dcard1.src = diamondCards[10];
	} else if (cardValue[randValue1DOut] === 'Queen') {
		dcard1.src = diamondCards[11];
	} else if (cardValue[randValue1DOut] === 'King') {
		dcard1.src = diamondCards[12];
	}; 
};




	if (cardSum2D > 0) {
		dealVal.innerHTML = `${cardSum1D} or ${cardSum2D}`
	} else {
		dealVal.innerHTML = cardSum1D;
	};

	
	const playerAce = () => {


			const dealerNoAce = () => {
				if (cardSum1D > 21) {
					winFunction();
				};

				if (cardSum1D > cardSum2) {
					winFunctionD();
				};

				if (cardSum1D <= cardSum2 && cardSum1D < 17) {
					setTimeout(genDealerHand2, 2000);
				} else if (cardSum1D >= 17 && cardSum1D < cardSum2) {
					winFunction();
				} else if (cardSum1D >= 17 && cardSum1D === cardSum2) {
					draw();
				}; 
			};

			const dealerAce = () => {
				if (cardSum2D > cardSum2) {
					winFunctionD();
				};

				if (cardSum2D <= cardSum2 && cardSum2D <= 17) {
					setTimeout(genDealerHand2, 2000);
				} else if (cardSum2D >= 18 && cardSum2D < cardSum2) {
					winFunction();
				} else if (cardSum2D >= 18 && cardSum2D === cardSum2) {
					draw();
				}; 	
			};
			if (cardSum2D === 0) {
				dealerNoAce();
			} else if (cardSum2D > 0) {
				dealerAce();
			};

		};


		const playerNoAce = () => {

			const dealerNoAce = () => {
				if (cardSum1D > 21) {
					winFunction();
				};

				if (cardSum1D > cardSum1New3Out) {
					winFunctionD();
				};
			
				if (cardSum1D <= cardSum1New3Out && cardSum1D < 17) {
					setTimeout(genDealerHand2, 2000);
				} else if (cardSum1D >= 17 && cardSum1D < cardSum1New3Out) {
					winFunction();
				} else if (cardSum1D >= 17 && cardSum1D === cardSum1New3Out) {
					draw();
				
				};
				 
			
			};

			const dealerAce = () => {
				if (cardSum2D > cardSum1New3Out) {
					winFunctionD();
				};

				if (cardSum2D <= cardSum1New3Out && cardSum2D <= 17) {
					setTimeout(genDealerHand2, 2000);
				} else if (cardSum2D >= 18 && cardSum2D < cardSum1New3Out) {
					winFunction();
				} else if (cardSum2D >= 18 && cardSum2D === cardSum1New3Out) {
					draw();
				}; 
			};

			if (cardSum2D === 0) {
				dealerNoAce();
			} else if (cardSum2D > 0) {
				dealerAce();
			};
				
		};


			if (cardSum2 === 0) {
				playerNoAce();
				
			} else if (cardSum2 > 0){
				playerAce();
				
			};
	
};



const timeFunction2 = () => {


	const playerAce2 = () => {


			const dealerNoAce2 = () => {


				if (cardSum1New3DOut > 21) {
					dealBust.innerHTML = 'Bust';
					winFunction();
				};

				if (cardSum1New3DOut <= cardSum2 && cardSum1New3DOut < 17) {
					setTimeout(genDealerHand2, 2000);
				} else if (cardSum1New3DOut >= 17 && cardSum1New3DOut < cardSum2) {
					winFunction();}

				if (cardSum1New3DOut > cardSum2 && cardSum1New3DOut <=21) {
					winFunctionD();

				} else if (cardSum1New3DOut >= 17 && cardSum1New3DOut === cardSum2) {
					draw();
				}; 
			};


			const dealerAce2 = () => {
				if (cardSum2D > cardSum2) {
					winFunctionD();
				};

				if (cardSum2D <= cardSum2 && cardSum2D <= 17) {
					setTimeout(genDealerHand2, 2000);
				} else if (cardSum2D >= 18 && cardSum2D < cardSum2) {
					winFunction();
				} else if (cardSum2D >= 18 && cardSum2D === cardSum2) {
					draw();
				}; 	
			};
						if (cardSum2D === 0) {
				dealerNoAce2();
			} else if (cardSum2D > 0) {
				dealerAce2();
			};

		};


		const playerNoAce2 = () => {

			const dealerNoAce2 = () => {
				if (cardSum1New3DOut > 21) {
					dealBust.innerHTML = 'Bust';
					winFunction();
				};

				if (cardSum1New3DOut > cardSum1New3Out && cardSum1New3DOut <=21) {
					winFunctionD();
				};

				if (cardSum1New3DOut <= cardSum1New3Out && cardSum1New3DOut < 17) {
					setTimeout(genDealerHand2, 2000);
				} else if (cardSum1New3DOut >= 17 && cardSum1New3DOut < cardSum1New3Out) {
					winFunction();
				} else if (cardSum1New3DOut >= 17 && cardSum1New3DOut === cardSum1New3Out) {
					draw();
				}; 
			};


			const dealerAce2 = () => {
				if (cardSum2D > cardSum1New3Out) {
					winFunctionD();
				};

				if (cardSum2D <= cardSum1New3Out && cardSum2D <= 17) {
					setTimeout(genDealerHand2, 2000);
				} else if (cardSum2D >= 18 && cardSum2D < cardSum1New3Out) {
					winFunction();
				} else if (cardSum2D >= 18 && cardSum2D === cardSum1New3Out) {
					draw();
				}; 
			};

			if (cardSum2D === 0) {
				dealerNoAce2();
			} else if (cardSum2D > 0) {
				dealerAce2();
			};
				
		};


			if (cardSum2 === 0) {
				playerNoAce2();
			} else if (cardSum2 > 0) {
				playerAce2();
			};
	
};



const genDealerHand = () => {

	const randValue1D = Math.floor(Math.random()*13);
	const randSuit1D = Math.floor(Math.random()*4);
	const randValue2D = Math.floor(Math.random()*13);
	const randSuit2D = Math.floor(Math.random()*4);

	randValue1DOut = randValue1D;
	randSuit1DOut = randSuit1D;
	randValue2DOut = randValue2D;
	randSuit2DOut = randSuit2D;

	if (cardValue[randValue1D]==='Jack' || cardValue[randValue1D]==='Queen' 
		|| cardValue[randValue1D]==='King') {
		cardNumber1Opt1D = 10;
		cardNumber1Opt2D = 0;

	} else if (cardValue[randValue1D]==='Ace') {
			cardNumber1Opt1D = 1;
			cardNumber1Opt2D = 11;

	} else {
		cardNumber1Opt1D = cardValue[randValue1D];
		cardNumber1Opt2D = 0;
	};

		
		if (cardValue[randValue2D]==='Jack' || cardValue[randValue2D]==='Queen' || 
		cardValue[randValue2D]==='King') {
		cardNumber2Opt1D = 10;
		cardNumber2Opt2D = 0;

	} else if (cardValue[randValue2D]==='Ace') {
			cardNumber2Opt1D = 1;
			cardNumber2Opt2D = 11;

	} else {
		cardNumber2Opt1D = cardValue[randValue2D];
		cardNumber2Opt2D = 0;
	};


/*card 1 blank*/
/*
	dcard1.src = 'resources/pictures/cardback.jpg';
*/

/*card 2*/
if (cardSuit[randSuit2D] === 'clubs') {
	if (cardValue[randValue2D] === 'Ace') {
		dcard2.src = clubCards[0];
	} else if (cardValue[randValue2D] === 2) {
		dcard2.src = clubCards[1];
	} else if (cardValue[randValue2D] === 3) {
		dcard2.src = clubCards[2];
	} else if (cardValue[randValue2D] === 4) {
		dcard2.src = clubCards[3];
	} else if (cardValue[randValue2D] === 5) {
		dcard2.src = clubCards[4];
	} else if (cardValue[randValue2D] === 6) {
		dcard2.src = clubCards[5];
	} else if (cardValue[randValue2D] === 7) {
		dcard2.src = clubCards[6];
	} else if (cardValue[randValue2D] === 8) {
		dcard2.src = clubCards[7];
	} else if (cardValue[randValue2D] === 9) {
		dcard2.src = clubCards[8];
	} else if (cardValue[randValue2D] === 10) {
		dcard2.src = clubCards[9];
	} else if (cardValue[randValue2D] === 'Jack') {
		dcard2.src = clubCards[10];
	} else if (cardValue[randValue2D] === 'Queen') {
		dcard2.src = clubCards[11];
	} else if (cardValue[randValue2D] === 'King') {
		dcard2.src = clubCards[12];
	}; 
};


if (cardSuit[randSuit2D] === 'spades') {
	if (cardValue[randValue2D] === 'Ace') {
		dcard2.src = spadeCards[0];
	} else if (cardValue[randValue2D] === 2) {
		dcard2.src = spadeCards[1];
	} else if (cardValue[randValue2D] === 3) {
		dcard2.src = spadeCards[2];
	} else if (cardValue[randValue2D] === 4) {
		dcard2.src = spadeCards[3];
	} else if (cardValue[randValue2D] === 5) {
		dcard2.src = spadeCards[4];
	} else if (cardValue[randValue2D] === 6) {
		dcard2.src = spadeCards[5];
	} else if (cardValue[randValue2D] === 7) {
		dcard2.src = spadeCards[6];
	} else if (cardValue[randValue2D] === 8) {
		dcard2.src = spadeCards[7];
	} else if (cardValue[randValue2D] === 9) {
		dcard2.src = spadeCards[8];
	} else if (cardValue[randValue2D] === 10) {
		dcard2.src = spadeCards[9];
	} else if (cardValue[randValue2D] === 'Jack') {
		dcard2.src = spadeCards[10];
	} else if (cardValue[randValue2D] === 'Queen') {
		dcard2.src = spadeCards[11];
	} else if (cardValue[randValue2D] === 'King') {
		dcard2.src = spadeCards[12];
	}; 
};


if (cardSuit[randSuit2D] === 'hearts') {
	if (cardValue[randValue2D] === 'Ace') {
		dcard2.src = heartCards[0];
	} else if (cardValue[randValue2D] === 2) {
		dcard2.src = heartCards[1];
	} else if (cardValue[randValue2D] === 3) {
		dcard2.src = heartCards[2];
	} else if (cardValue[randValue2D] === 4) {
		dcard2.src = heartCards[3];
	} else if (cardValue[randValue2D] === 5) {
		dcard2.src = heartCards[4];
	} else if (cardValue[randValue2D] === 6) {
		dcard2.src = heartCards[5];
	} else if (cardValue[randValue2D] === 7) {
		dcard2.src = heartCards[6];
	} else if (cardValue[randValue2D] === 8) {
		dcard2.src = heartCards[7];
	} else if (cardValue[randValue2D] === 9) {
		dcard2.src = heartCards[8];
	} else if (cardValue[randValue2D] === 10) {
		dcard2.src = heartCards[9];
	} else if (cardValue[randValue2D] === 'Jack') {
		dcard2.src = heartCards[10];
	} else if (cardValue[randValue2D] === 'Queen') {
		dcard2.src = heartCards[11];
	} else if (cardValue[randValue2D] === 'King') {
		dcard2.src = heartCards[12];
	};
};


if (cardSuit[randSuit2D] === 'diamonds') {
	if (cardValue[randValue2D] === 'Ace') {
		dcard2.src = diamondCards[0];
	} else if (cardValue[randValue2D] === 2) {
		dcard2.src = diamondCards[1];
	} else if (cardValue[randValue2D] === 3) {
		dcard2.src = diamondCards[2];
	} else if (cardValue[randValue2D] === 4) {
		dcard2.src = diamondCards[3];
	} else if (cardValue[randValue2D] === 5) {
		dcard2.src = diamondCards[4];
	} else if (cardValue[randValue2D] === 6) {
		dcard2.src = diamondCards[5];
	} else if (cardValue[randValue2D] === 7) {
		dcard2.src = diamondCards[6];
	} else if (cardValue[randValue2D] === 8) {
		dcard2.src = diamondCards[7];
	} else if (cardValue[randValue2D] === 9) {
		dcard2.src = diamondCards[8];
	} else if (cardValue[randValue2D] === 10) {
		dcard2.src = diamondCards[9];
	} else if (cardValue[randValue2D] === 'Jack') {
		dcard2.src = diamondCards[10];
	} else if (cardValue[randValue2D] === 'Queen') {
		dcard2.src = diamondCards[11];
	} else if (cardValue[randValue2D] === 'King') {
		dcard2.src = diamondCards[12];
	}; 
};



	/*creating the sum of the cards, as well as a second sum for ace values*/


	cardSum1D = cardNumber1Opt1D + cardNumber2Opt1D;
		
		if (cardNumber1Opt2D > 0) {
	cardSum2D = cardNumber1Opt2D + cardNumber2Opt1D;

	} else if (cardNumber2Opt2D > 0) {
		cardSum2D = cardNumber1Opt1D + cardNumber2Opt2D;

	} else if (cardNumber2Opt2D > 0 && cardNumber1Opt2D > 0) {
		cardSum2D = cardNumber1Opt1D + cardNumber2Opt2D;

	} else {
		cardSum2D = 0;
	};


	/*Printing the sum on the webpage*/


	if (cardValue[randValue2D==='Ace']) {
		dealVal.innerHTML = `At least ${cardNumber2Opt1D+1} or ${cardNumber2Opt2D+1}`;

	} else {
		dealVal.innerHTML = `At least ${cardNumber2Opt1D+1}`;
	};
	


	/*Printing bust statment and other statements based on the current sum*/
	/*I'll change these for the dealer side idk to what yet though*/

			if (cardSum1D <= 11) {
		dealBust.innerHTML = 'All clear';
	}; 

		if (cardSum1D > 11 && cardSum1D <= 14) {
		dealBust.innerHTML = 'Careful';
	}; 

		if (cardSum1D > 14 && cardSum1D <= 17) {
		dealBust.innerHTML = 'CAREFUL!'; 
	};

		if (cardSum1D > 17) {
		dealBust.innerHTML = 'CAREFUL!!!';
	};
	

	/*Resetting values from previous games after a new hand is dealt*/


	valueArrD = [];
	suitArrD = [];

	dcard3.src = '';
	dcard4.src = '';
	dcard5.src = '';

	dflipinner3.style.display = 'none';
	dflipinner4.style.display = 'none';
	dflipinner5.style.display = 'none';



	cardNumber1Opt1D = 0;
	cardNumber1Opt2D = 0;
	cardNumber2Opt1D = 0;
   cardNumber2Opt2D = 0;
	cardNumber3Opt1D = 0;
	cardNumber3Opt2D = 0;
	cardNumber4Opt1D = 0;
	cardNumber4Opt2D = 0;
	cardNumber5Opt1D = 0;
	cardNumber5Opt2D = 0;

	hitCount = 0;	



	const dealdcard1 = () => {
		dflipinner1.style.display = 'block'
		dflipcard1.id = 'dflipcard1';
		document.querySelector('#dflipcard1').style.animation = 'moved 1s forwards';
	}

	const dealdcard2 = () => {
		dflipinner2.id = 'dflipinner2';
		dflipcard2.id = 'dflipcard2';
		document.querySelector('#dflipcard2').style.animation = 'move2d 1s forwards';
	}

	setTimeout(dealdcard1, 200);
	setTimeout(dealdcard2, 250);
};


const dealerscore = document.querySelector('.dealerscore');
const playerscore = document.querySelector('.playerscore');
const winmessage = document.querySelector('.winmessage');

/*the first two card animations doesn't seem to be working when i win or draw

setting all the animation to false in the reset instead of to an empty string or to another
animation fixed all the problems i was having with the animations not executing.

nevermind that's not what fixed it. It seems like if i play enough hands it will at some point
settle in a spot where the initial animation works repeatedly if you just keep pressing dea
 new hand. Which doesn't work when you first refresh the page. I have absolutly no idea why*/
const winFunction = () => {
	playerscore.innerHTML ++;
	winmessage.innerHTML = 'You Win'

};


const winFunctionD = () => {
	dealerscore.innerHTML ++;
	winmessage.innerHTML = 'Dealer Wins';


};


const draw = () => {
	winmessage.innerHTML = 'Draw';

};

/*to make the inner3 + id animations work i might have to create another time function that
leads to this and make it so the initial one defines the id's and sets everything back to
move3 move4 etc and then have that setTimout to the reset animation*/

/*the style on inner3 etc needs to be set to display none here because it excecutes the move3
animation there when you redefine it after defining the increment animation previously. idk 
exactly why the inner1 id needs to be set to '' and the position set inside the time function. 
i'll thinkg about that. It seems like it's executing the move1 animation before it goest back
to its origional starting position but i'm not to sure why because the time is less on the
animation timer also i need to time the sums so that they display after the cards have been dealt */

const resetAnimations = () => {

	flipcard1.id = 'flipcard1';
	flipcard2.id = 'flipcard2';
	flipcard3.id = 'flipcard3';
	flipcard4.id = 'flipcard4';
	flipcard5.id = 'flipcard5';

	dflipcard1.id = 'dflipcard1';
	dflipcard2.id = 'dflipcard2';
	dflipcard3.id = 'dflipcard3';
	dflipcard4.id = 'dflipcard4';
	dflipcard5.id = 'dflipcard5';

	dflipinner1.id = 'dflipinner1';

	flipcard1.style.top = '70%';
	flipcard1.style.right = '54.16666666666666666666666666666666666667%';
	flipcard2.style.top = '70%';
	flipcard2.style.right = '54.166666666666666666666666666666666666667%';
	flipcard3.style.top = '70%';
	flipcard3.style.right = '54.16666666666666666666666666666666666667%';
	flipcard4.style.top = '70%';
	flipcard4.style.right = '54.1666666666666666666666666666666666666667%';
	flipcard5.style.top = '70%';
	flipcard5.style.right = '54.16666666666666666666666666666666666666667%';


	dflipcard1.style.top = '70%';
	dflipcard1.style.left = '40%';
	dflipcard2.style.top = '70%';
	dflipcard2.style.left = '40%';
	dflipcard3.style.top = '70%';
	dflipcard3.style.left = '40%';
	dflipcard4.style.top = '70%';
	dflipcard4.style.left = '40%';
	dflipcard5.style.top = '70%';
	dflipcard5.style.left = '40%';


	/*it seems the animations only work properly when the animation is defined with the id in the
	same instance/within the same function
	at least when you change the animation from within the virtual dom. On the flip animations
	I don't change those at all because it's one animation so it's never altered in the dom.
	there seems to be a difference here. maybe not it's not working now. it was a coincidence
	i guess. it made flipcard 4 work properly 3 still isn't. setting it to moveincreiment worked
	i believe the thing i said before about the dom acting different and the animation needing
	to be defined with the id when the animation is being changed in js is true but setting the
	animation to a blank string doesn't seem to work properly either in the case of flip card three
	.when two deals in a row happen where a fith card is drawn it wont draw the fifth card.
	I think this has something to do twith the animation being set to null here and me not having
	a fifth card animation defined. it works in every other case. */
	flipinner3.style.display = 'none';
	flipinner4.style.display = 'none';
	flipinner5.style.display = 'none';
	/*putting these in order fixed the problem. I normally would anyway but I had put them
	in at different times for different reasons and wasn't really thinking about it. it kept
	saying three specifically was null which was the one on top at first. so idk exactly why
	that is the case though I also got rid of a couple of css elements from styles that i had
	when i was trying to createe this effect a different way. it diddn't seam to improve anything
	but in any case i didn't need it there. it still says can't read properties of null though
	flipcard1. which makes sense for the first go round because nothings been defined. and also
	makes sense for cards past 1 and 2 for anytime that i haven't hit that many times. but idk
	why it doesn't say it for three or more. if i just keep pressing deal new hand. it says
	can't read null on card 1 the first time which makes sense and then nothing after that. which
	actually doesn't really make sense now that I think about it. I mean i guess it's defined in
	the css so that's why to some extent. but i guess in any case it's the id that it's not getting
	not the animation partoh wait no it does say can read at 3 every time after they're just stacked
	in a drop down so it looks like it only did it one time. this was fixed by setting the id's
	above in this same function*/
	document.querySelector('#flipcard1').style.animation = '';
	document.querySelector('#flipcard2').style.animation = '';
	document.querySelector('#flipcard3').style.animation = '';
	document.querySelector('#flipcard4').style.animation = '';
	document.querySelector('#flipcard5').style.animation = '';

	document.querySelector('#dflipcard1').style.animation = '';
	document.querySelector('#dflipcard2').style.animation = '';
	document.querySelector('#dflipcard3').style.animation = '';
	document.querySelector('#dflipcard4').style.animation = '';
	document.querySelector('#dflipcard5').style.animation = '';

	document.querySelector('#dflipinner1').style.animation = '';
	
	/*i didn't need the time function that lead to the id's being set to ''. It diddn't seem
	to work initially without it there must have been some other reason that I wasn't realising
	*/

	flipinner1.id = '';
	flipinner2.id = '';
	flipinner3.id = '';
	flipinner4.id = '';
	flipinner5.id = '';

	flipcard1.id = '';
	flipcard2.id = '';
	flipcard3.id = '';
	flipcard4.id = '';
	flipcard5.id = '';

	dflipinner1.id = '';
	dflipinner2.id = '';
	dflipinner3.id = '';
	dflipinner4.id = '';
	dflipinner5.id = '';

	dflipcard1.id = '';
	dflipcard2.id = '';
	dflipcard3.id = '';
	dflipcard4.id = '';
	dflipcard5.id = '';

	dflipinner3.style.display = 'none';
	dflipinner4.style.display = 'none';
	dflipinner5.style.display = 'none';
		
   dflipinner1.style.display = 'none';
	flipinner1.style.display = 'none';
	flipinner2.style.display = 'none';
	
   generateHands();

	
};







newHandButton.addEventListener('click', genDealerHand);
newHandButton.addEventListener('click', resetAnimations);

const test = document.querySelector('.test');

/*i still plan on adding a betting sytstem as well as allowing you to split and things like
that I'm just going to do it after I get the animations working perfectly and once I get an idea
of how to make them responsive for mobile. I mean I could just change the mobile with a media query
but the only thing is with something like this it's going to be really sensitive to little differences
in phone size as well as just looking at the phone horizontally vs vertically so I'm going to 
try to think of something more clever. I also will probably just look up how to make absolutely positioned
elements and animations work responsively. Unless I can find a way to do this without using
absolute positioning. I wonder if I can just actually put a change to the postioning in the animation.
Like instead of sayiing translte if I could just start with an absolute position by the deck
and then in the animation just say position static or whatever I had it that made the cards work
normally. Or something like that. IDK if you actually can do that though, */

/*I got the cards pretty well lined up although they aren't when i zoom in, i think setting
the initial animatins to a percent might help. also I was going to just change the postion
back to static which idk why I didn't try that. oh actually I did it causes problems because
the third card coming up is set to absolute so the cards one and two don't shift over how
they're supposed to. There might be a work around to that that would be more responsive but
idk. There's several problems though. Occasionally it won't let me hit on the fifth card.
allso some times the first two card animations don't play. I though this only happened when
I win but i've won and it doesn't happen and i think there was a time i didn't win and it 
happened. Also if i press the hit button to fast the cards start in the player hand section
and fly way off to the right of the page. It seems like there's some kind of timing issue
also something about the animation at the very begining looks sort of artificial. IDK how to
fix that and the first two cards jump right a little but on the first hit which I hadn't notice
before. shortening the timing functions fixed the problem of the cards flying off to the right
when you press hit to fast beuse everything is defined and where it needs to be before you
press hit. It needs to be more fluid though. If you press the hit to fast the cards end up
where they should but it cuts off the previoius animations. Idk if this is how it works exactly
but I'm thinking of instead of putting the animation calls inside the function I make them
in a global scope. oh no the reason is when you press hit the position and animation variables
of the previous card change so it's not going to work perfectly like that regardless of where
they are. I have to find a way to create the movements without changing the animation. if instead
of changing the animation in a class I wonder if it would work better if I left all the animations
defined and then just defined a new class for each. I'm thinking maybe the move and move increament
animations would work in tandem that way. This is kind of what I was thinking of doing in the
first place it just seemed like it would be less efficient but now that I'm thinking about it
it'll probably be pretty much the same. I learned something at least if it works this way that
i would've overlooked had i just done it that way to begin with. but even if the animations
are working together there's still the issue of the new position being defined which might
mess up the first animation. Maybe if i just add a new variable I won't have to define a new 
position. we'll see*/

/*had this wied error when i hadn't hit, i had 14 and the dealer had 14 and then the dealer
dealt two cards really fast insted of just one. although they would've busted with the first
anyway cause it was a queen idk why that happened.*/