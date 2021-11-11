const cardValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
const cardSuit = ['diamonds', 'hearts', 'spades', 'clubs'];
/*I was thinking of making the above operate like a real deck and trying
to make it so the cards wouldn't repeat. That would still be interesting to
do for practice but at a real casino they normally have 5 or so decks shuffed
together so It's possible to get two of the exact same cards so I think this
is fine the way it is*/



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


	/*Printing the cards that were 'dealt' on each hit*/

	if (clickCount===1) {
		newText.innerHTML = `${cardValue[randValue1Out]} of ${cardSuit[randSuit1Out]} and 
		${cardValue[randValue2Out]} of ${cardSuit[randSuit2Out]} and 
		${valueArr[0]} of ${suitArr[0]}`;
	};


	if (clickCount===2) {
		newText.innerHTML = `${cardValue[randValue1Out]} of ${cardSuit[randSuit1Out]} and 
		${cardValue[randValue2Out]} of ${cardSuit[randSuit2Out]} and 
		${valueArr[0]} of ${suitArr[0]} and ${valueArr[1]} of ${suitArr[1]}`;
	};

	if (clickCount===3) {
		newText.innerHTML = `${cardValue[randValue1Out]} of ${cardSuit[randSuit1Out]} and 
		${cardValue[randValue2Out]} of ${cardSuit[randSuit2Out]} and 
		${valueArr[0]} of ${suitArr[0]} and ${valueArr[1]} of ${suitArr[1]} 
		and ${valueArr[2]} of ${suitArr[2]}`;
	};


	/*Creating the primary sum and secondary sum for the ace values, 2ndary 
	isn't fully working yet for card four and up at least when 2 aces are dealt
	earlier, I had put number 4 in the 5 statement. I think that was the problem
	but I'll test*/
	
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


	/*displaying the cards that are generated*/

	newText.innerHTML = `${cardValue[randValue1]} of ${cardSuit[randSuit1]} and 
	${cardValue[randValue2]} of ${cardSuit[randSuit2]}`;


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


	/*Creating the event listiner for hit which will be removed when the player
	busts or presses stay*/


	hit.addEventListener("click", addCard);

	stay.addEventListener("click", pressStay);

	stay.addEventListener("click", timeFunction);

	
	
};




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

/*There should be a find and replace in editors so I could copy a function
to another function and then inside that function change every instance like
I'm doing here manually*/

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

	if (hitCount === 1) {
		dealText.innerHTML = `${cardValue[randValue1DOut]} of ${cardSuit[randSuit1DOut]} and 
		${cardValue[randValue2DOut]} of ${cardSuit[randSuit2DOut]} and 
		${valueArrD[0]} of ${suitArrD[0]}`;
	};


	if (hitCount===2) {
		dealText.innerHTML = `${cardValue[randValue1DOut]} of ${cardSuit[randSuit1DOut]} and 
		${cardValue[randValue2DOut]} of ${cardSuit[randSuit2DOut]} and 
		${valueArrD[0]} of ${suitArrD[0]} and ${valueArrD[1]} of ${suitArrD[1]}`;
	};

	if (hitCount===3) {
		dealText.innerHTML = `${cardValue[randValue1DOut]} of ${cardSuit[randSuit1DOut]} and 
		${cardValue[randValue2DOut]} of ${cardSuit[randSuit2DOut]} and 
		${valueArrD[0]} of ${suitArrD[0]} and ${valueArrD[1]} of ${suitArrD[1]} 
		and ${valueArrD[2]} of ${suitArrD[2]}`;
	};


	/*Creating the primary sum and secondary sum for the ace values, 2ndary 
	isn't fully working yet for card four and up at least when 2 aces are dealt
	earlier, I had put number 4 in the 5 statement. I think that was the problem
	but I'll test*/
	
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

	/*I still don't know if two ace situations will compleatly work*/

/*
	if (cardSum1New3D > 21) {
		dealBust.innerHTML = 'Bust';
		winFunction();
		};

	 const sevteentotwent = () => {
	 	if (cardSum2 === 0) {

	 	if (cardSum1New3D > cardSum1New3) {
	 		winFunctionD();
	 	} else if (cardSum1New3D < cardSum1New3) {
	 		winFunction();
	 	}; 
	 };

	 	if (cardSum2 > 0) {
	 	
	 	if (cardSum1New3D > cardSum2) {
	 		winFunctionD();
	 	} else if (cardSum1New3D < cardSum2) {
	 		winFunction();
	 	}; 

	 	};


	 };

	if (cardSum1New3D >= 17 && cardSum1New3D <= 21) {
			sevteentotwent();
		};
*/
		/*I feel like nesting may be a better way to approach this type of thing
		idk though*/
/*
	if (cardSum1New3D < 17 && cardSum1New3D < cardSum2D) {
		timeFunction2();
	
	};

	if (cardSum1New3D < 17 && cardSum1New3D < cardSum1New3) {
		timeFunction2();
	};

	if (cardSum2 === 0 && cardSum1New3D > 
		cardSum1New3Out) {
		winFunctionD();
	}	else if (cardSum2 > 0 && cardSum1New3D > cardSum2) {
		winFunctionD();
	};*/





	
	stay.removeEventListener('click', timeFunction);
	timeFunction2();
	
};

/*ocassionaly when the dealer runs out of iterations before reaching seventeen
it will automatically start dealing cards when i press start new hand because I
think because I haven't really told it to stop at that point. This should be
fixed when I add a few more iterations. */

const timeFunction = () => {
	if (cardSum1New3Out !== cardNumber3Opt1 + cardNumber4Opt1 + cardNumber5Opt1 + cardSum1) {
		cardSum1New3Out = cardSum1;
	};  
	
	test.innerHTML = `${cardSum1} ${cardSum1New3Out}`;

	dealText.innerHTML = `${cardValue[randValue1DOut]} of ${cardSuit[randSuit1DOut]} and 
		${cardValue[randValue2DOut]} of ${cardSuit[randSuit2DOut]}`;
	
	if (cardSum2D > 0) {
		dealVal.innerHTML = `${cardSum1D} or ${cardSum2D}`
	} else {
		dealVal.innerHTML = cardSum1D;
	};

	
	const playerAce = () => {
		/*Just one more thing to fix, other than maybe two ace scenerios but I haven't yet
		noticed a problem with that, is that whenever the dealer busts it evaluates as a 
		win for the dealer. Every other scenario seems to be working. I was thinking this
		might possibly be for basically the same reason that the cardsum1new3out on the
		origional time function wasn't working and was causing problems. I'll check tomorrow*/

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
			/*CardSum1New3Out is giving a value 1 higher than what it should be for some reason
			and when there's an ace it reads 0 but I guess that just because sum1 isn't inside the
			function that's being read for that instance so I don't think that's the problem
			the problem seems to come when I don't hit. if I go n many times without hitting
			the value of sum1 stays at the value of the first hand that was dealt in that
			time frame that i didn't hit. I think this has to do with it being in the origiona
			hand function. I'm thinking maybe making an out for that as well. idk*/
		
	
};

/*I think the above should operate like a dealer would in a real casino
situation, I haven't played enough hands since I upgraded it to see if the
dealer will correctly choose when to hit on a soft 17*/

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

/*It's working pretty good I just need to add a few more rules to the dealer
side like if it gets a black jack it'll still hit because first value is 
under 17. Then I need to make it compare the player and dealer values and
print a message of who won and then maybe keep a score board. And then add
card pictures and maybe animations and then maybe create more functionalilty
like allowing splits and then possibly a betting system. I want to make this
compleatly functional and I want it to look good*/

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


	/*displaying the cards that are generated*/

	dealText.innerHTML = `Blank and ${cardValue[randValue2D]} of ${cardSuit[randSuit2D]}`;


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

	/*Creating the event listiner for hit which will be removed when the player
	busts or presses stay*/

	
};

const dealerscore = document.querySelector('.dealerscore');
const playerscore = document.querySelector('.playerscore');
const winmessage = document.querySelector('.winmessage');


/*Now that I'm thinking about it the or and statmenet in these two functions
at all is unecesary. If it goes to win function that means you win and if
goes to winfunction d that means dealer wins so I don't really need to put
any of that in there. Just make a third function for draws.*/

const winFunction = () => {
	/*
	if (cardSum1New3Out > cardSum1New3DOut && cardSum1New3Out > cardSum2D || 
		cardSum1New3Out > cardSum1New3DOut && cardSum2D === 0) {
		playerscore.innerHTML ++;
		winmessage.innerHTML = 'You win';
	} else if (cardSum2 > cardSum1New3DOut && cardSum2 > cardSum2D || 
		cardSum2 > cardSum1New3DOut && cardSum2D === 0) {
		playerscore.innerHTML ++;
		winmessage.innerHTML = 'You win';
	} else if (cardSum1New3DOut > 21) {
		playerscore.innerHTML ++;
		winmessage.innerHTML = 'You win';
	} else {
		winmessage.innerHTML = 'Draw';
	};
	*/

	playerscore.innerHTML ++;
	winmessage.innerHTML = 'You Win'
/*I'm thinkign I may have to make the above an inner function that is called
when the buttom part is not true IE when 3d out <= 21*/

/*this might not work completely now that I'm thinking about it*/
/*it's not working at least in the case of a draw but maybe other scenarios
as well. */
/*It's just always saying I win. I feel like there's probably a way to fix it
inside of this but I'm thinking I could create two seperate functions, one
for when the dealer wins and one for when the player wins and just call each
one when it's appropriate.*/
/*It's saying dealer wins occasionaly when I bust now but adds a point to each
*/

};

const winFunctionD = () => {
		/*I guess the below is a little excessive. If cards sum2!==0 then it
		will be higher then it's related cardsume1. so I only really need to
		put if > card sum2 and then just specify the cardsum 2 ===0 scenario*/
		/*
		if (cardSum1New3DOut > cardSum1New3Out && cardSum1New3DOut > cardSum2 ||
			cardSum1New3DOut > cardSum1New3Out && cardSum2 === 0) {
		dealerscore.innerHTML ++;
		winmessage.innerHTML = 'Dealer wins';
	
	} else if (cardSum2D > cardSum1New3Out && cardSum2D > cardSum2 || 
		cardSum2D > cardSum1New3Out && cardSum2 === 0) { 
		dealerscore.innerHTML ++;
		winmessage.innerHTML = 'Dealer wins';

	} else if (cardSum1New3Out > 21) {
		dealerscore.innerHTML ++;
		winmessage.innerHTML = 'Dealer wins';

	} else {
		winmessage.innerHTML = 'Draw';
	};*/
	dealerscore.innerHTML ++;
	winmessage.innerHTML = 'Dealer Wins';

};

const draw = () => {
	winmessage.innerHTML = 'Draw';
};


newHandButton.addEventListener("click", generateHands);
newHandButton.addEventListener('click', genDealerHand);

const test = document.querySelector('.test');






/*I could probably seperate some parts of these functions into smaller funcions
and then just call the functions inside the other functions.*/