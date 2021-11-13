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
		card3.src = hearCards[8];
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
		card5.src = hearCards[8];
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
	bust.innerHTML = 'HOLY SHIT!!!';
	};

	/*Stopping anymore hits after bust*/


	if (cardSum1New1 > 21 || cardSum1New2 > 21 || cardSum1New3 > 21) {
		bust.innerHTML = 'Bust';
		hit.removeEventListener("click", addCard);
		winFunctionD();
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
		bust.innerHTML = 'HOLY SHIT!!!';
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


	/*Generating number values for the face cards for each click*/

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
		dcard3.src = hearCards[8];
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
		dcard5.src = hearCards[8];
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
	dealBust.innerHTML = 'HOLY SHIT!!!';
	};

	
	stay.removeEventListener('click', timeFunction);
	timeFunction2();
	
};



const timeFunction = () => {
	if (cardSum1New3Out !== cardNumber3Opt1 + cardNumber4Opt1 + cardNumber5Opt1 + cardSum1) {
		cardSum1New3Out = cardSum1;
	};  
	


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
		dcard1.src = hearCards[8];
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

	dcard1.src = 'resources/pictures/cardback.jpg';


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
		dealBust.innerHTML = 'HOLY SHIT!!!';
	};
	

	/*Resetting values from previous games after a new hand is dealt*/


	valueArrD = [];
	suitArrD = [];

	dcard3.src = '';
	dcard4.src = '';
	dcard5.src = '';



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
};


const dealerscore = document.querySelector('.dealerscore');
const playerscore = document.querySelector('.playerscore');
const winmessage = document.querySelector('.winmessage');


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


newHandButton.addEventListener("click", generateHands);
newHandButton.addEventListener('click', genDealerHand);

const test = document.querySelector('.test');