/*I'm trying to think of ways to add functionality into this webpage. My initial 
idea was to add ability to send emails but I guess that involves back end stuff.
I was thinking of trying to come up with some small game just to show case my java stuff
Or maybe I could incoprporate some of the stuff I've done in the js excercises 
before. Like Maybe I could try to add a section on here that creates random dna bases
of a new species but add some more ways of analyzing it and making it on the 
actual webpage. Also maybe I could just try to make a basic calculator or something
I was thinking of some type of game maybe I could make using the keyboard comands
Like how you can make a ball rise or fall. Maybe I could make something like a 
wack a mole game where an object bounces from different areas on the screen and when
it turns a certain color you have to click on it really quick or something. I wonder
if I could make a basic side scroller game where you have to jump over obsticles or something
and if you hit an object it restarts. IDK if I have the skill set to do that 
but maybe. Maybe I could make a black jack game. Maybe not actually with cards
visually but I could make ann array of numbers and JQKA and an array of each sute
and then I could have a computer that followes the same rules that dealer at a casino
have to follow-I guess if it's black jack the sute doesn't exactly matter but just to-
keep each card having no more than four replications- and then give you the option to
hit or hold etc. Or maybe try to make other card games. I actually think I could
do that. I think I could probably do most of theses actually but I kind of have
an idea already for how that one would work. I think I'll try to do all of them actually
at some point. Maybe not all right away. And I want to continue learning so I don't
want to take all of my programming time on it but it could go towards an actual portfolio
if I do it well. I don't have much experience yet with actually putting my java
code on to my web page so that'll probably take me a little bit but it'll be good
practice. I actually might be able to make actuall pictures of the cards show up
to though now that I'm thinking about it. I could just basically have a directory
of linked images for all the different card types and if my generated value equled
[2, diamonds] I could retrieve the image for the 2 of diamonds and then have that 
displayed on the web page. */

const cardValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
const cardSuit = ['diamonds', 'hearts', 'spades', 'clubs'];


const newHandButton = document.querySelector("'#newhand");
const hit = document.querySelector('.hit');
const stay = document.querySelector('.stay');

const dealerHand = document.querySelector('.dealer-hand');
const playerHand = document.querySelector('#playerhand');


/*IDK if I should genrate the value for the index outside the function or inside
and if I should generate a seperate one for the player and dealer hand to make sure
it's differnt every time. I'll have to go back over similar things i've done. 
also I can't think at the moment how I will prevent the same combination of value and
suit from showing up. Maybe just say if yada = yada iterate again or something idk*/


const generateHands = () => {
	
	document.querySelector("#newtext").innerHTML = "ypahphiop" ;
	

}


newHandButton.addEventListener("click", generateHands());
hit.addEventListener('click',);
stay.addEventListener('click',);

document.querySelector('#newtext').innerHTML = 'asdfkl;slakdj';

let newcolor = document.querySelector(".projects");



document.querySelector(".projects").style.backgroundColor = "black"


let faceNumber1 = 0;
let faceNumber2 = 0;

let aNumber1Opt1 = 0;
let aNumber1Opt2 = 0;
let aNumber2Opt1 = 0;
let aNumber2Opt2 = 0;

const facetonumber = () => {
	if (cardValue[randValue1]==='Jack' || cardValue[randValue1]==='Queen' 
		|| cardValue[randValue1]==='King') {
		faceNumber1 = 10;
	} else if (cardValue[randValue1]==='Ace') {
		aNumber1Opt1 = 1;
		aNumber1Opt2 = 11;
	};

	if (cardValue[randValue2]==='Jack' || cardValue[randValue2]==='Queen' || 
		cardValue[randValue2]==='King') {
		faceNumber2 = 10;
	} else if (cardValue[randValue1]==='Ace') {
		aNumber2Opt1 = 1;
		aNumber2Opt2 = 11;
	};


};

if (cardValue[randValue1]==='Jack' || cardValue[randValue1]==='Queen' 
		|| cardValue[randValue1]==='King' && cardValue[randValue2]==='Jack' || cardValue[randValue2]==='Queen' || 
		cardValue[randValue2]==='King')


	else if (cardValue[randValue1]==='Ace') {
		aNumber1Opt1 = 1;
		aNumber1Opt2 = 11;
	};


	else if (cardValue[randValue1]==='Ace') {
		aNumber2Opt1 = 1;
		aNumber2Opt2 = 11;




} else if (cardValue[randValue1]==='Jack' || cardValue[randValue1]==='Queen' 
		|| cardValue[randValue1]==='King' && cardValue[randValue2] <= 10) {
		cardVal.innerHTML = cardNumber1+cardValue[randValue2];
	} else if (cardValue[randValue1] <= 10 && cardValue[randValue2]==='Jack' || cardValue[randValue2]==='Queen' || 
		cardValue[randValue2]==='King') {
		cardVal.innerHTML = cardNumber2+cardValue[randValue1];
	};
	/*IDK why i started doing this line of code. It was an idea i had before I changed
	facenumber to just card number and but an else statement. I need to do this sort of thing
	though with the ace values*/

	if (cardValue[randValue1]==='Ace' && cardValue[randValue2]==='Ace') {
		cardVal.innerHTML = cardNumber1Opt1+cardNumber2opt1 "or" cardNumber1Opt1+cardNumber2opt2;
	}

	else if (cardValue[randValue2]==='Ace') {
		cardNumber2Opt1 = 1;
		cardNumber2Opt2 = 11;
else if (cardValue[randValue1]==='Ace') {
		cardNumber1Opt1 = 1;
		cardNumber1Opt2 = 11;

		if (cardValue[randValue1]==='Ace' && cardValue[randValue2]==='Ace')
	cardVal.innerHTML = `${cardNumber1Opt1 + cardNumber2Opt1} or ${cardNumber1Opt2 + cardNumber2Opt1}`;



const generateHands = () => {
	const randValue1 = Math.floor(Math.random()*13);
	const randSuit1 = Math.floor(Math.random()*4);
	const randValue2 = Math.floor(Math.random()*13);
	const randSuit2 = Math.floor(Math.random()*4);

	randValue1Out = randValue1
	randSuit1Out = randSuit1
	randValue2Out = randValue2
	randSuit2Out = randSuit2

			if (cardValue[randValue1]==='Jack' || cardValue[randValue1]==='Queen' 
		|| cardValue[randValue1]==='King') {
		cardNumber1Opt1 = 10;
	} else if (cardValue[randValue1]==='Ace') {
			cardNumber1Opt1 = 1;
			cardNumber1Opt2 = 11;
	} else {
		cardNumber1Opt1 = cardValue[randValue1];
	};

		if (cardValue[randValue2]==='Jack' || cardValue[randValue2]==='Queen' || 
		cardValue[randValue2]==='King') {
		cardNumber2Opt1 = 10;
	} else if (cardValue[randValue2]==='Ace') {
			cardNumber2Opt1 = 1;
			cardNumber2Opt2 = 11;
	} else {
		cardNumber2Opt1 = cardValue[randValue2];
	};

	newText.innerHTML = `${cardValue[randValue1]} of ${cardSuit[randSuit1]} and 
	${cardValue[randValue2]} of ${cardSuit[randSuit2]}`;

		if (cardValue[randValue1]==='Ace' && cardValue[randValue2]==='Ace') {
		cardSum1 = cardNumber1Opt1+cardNumber2Opt1;
		cardSum2 = cardNumber1Opt2+cardNumber2Opt1;
		cardVal.innerHTML = `${cardSum1} or ${cardSum2}`;
	 /*I wonder if I could combine the first else if into the if. IDK
	if it'll work like that but i'm thinking I could do the and statment or just the
		singular statement for randValue1===ace, maybe with a !==ace and statement
	for randValue2 in the else if part. They both have the same return value which
		is why I'm thinking it should work. I've just never done something quite like
	that*/
	} else if (cardValue[randValue1]==='Ace') {
		cardSum1 = cardNumber1Opt1 + cardNumber2Opt1;
		cardSum2 = cardNumber1Opt2 + cardNumber2Opt1;
	} else if (cardValue[randValue2]==='Ace') {
		cardSum1 = cardNumber1Opt1 + cardNumber2Opt1;
		cardSum2 = cardNumber1Opt1 + cardNumber2Opt2;
	} else {
		cardSum1 = cardNumber1Opt1 + cardNumber2Opt1;
	};

	/*I had the innerHTML for cardval specified on every if statment above but then
	realised I could seperate them using the below cause the deciding factor is if
	sum2>0. I'm going to copy the code exactly how it is but I'm thinking now I
	don't think I even need the above if statment. Just sum1 = both opt 1 and sume2
	= both opt 2 regardless because if neither are aces it'll just add zero regardless
	to sum2.*/

	if (cardSum2 > 0) {
		cardVal.innerHTML = `${cardSum1} or ${cardSum2}`;
	} else {
		cardVal.innerHTML = cardSum1;
	};
	
};










const generateHands = () => {
	const randValue1 = Math.floor(Math.random()*13);
	const randSuit1 = Math.floor(Math.random()*4);
	const randValue2 = Math.floor(Math.random()*13);
	const randSuit2 = Math.floor(Math.random()*4);

	randValue1Out = randValue1
	randSuit1Out = randSuit1
	randValue2Out = randValue2
	randSuit2Out = randSuit2

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

	newText.innerHTML = `${cardValue[randValue1]} of ${cardSuit[randSuit1]} and 
	${cardValue[randValue2]} of ${cardSuit[randSuit2]}`;

	cardSum1 = cardNumber1Opt1 + cardNumber2Opt1;
	cardSum2 = cardNumber1Opt2 + cardNumber2Opt2;


	/*I had the innerHTML for cardval specified on every if statment above but then
	realised I could seperate them using the below cause the deciding factor is if
	sum2>0. I'm going to copy the code exactly how it is but I'm thinking now I
	don't think I even need the above if statment. Just sum1 = both opt 1 and sume2
	= both opt 2 regardless because if neither are aces it'll just add zero regardless
	to sum2.*/

	if (cardSum2 > 0) {
		cardVal.innerHTML = `${cardSum1} or ${cardSum2}`;
	} else {
		cardVal.innerHTML = cardSum1;
	};
	
};



	cardSum1 += cardNumber3Opt1;
	cardSum2 += cardNumber3Opt2;
 



	if (cardSum2 > 0) {
		cardVal.innerHTML = `${cardSum1} or ${cardSum2}`;
	} else {
		cardVal.innerHTML = cardSum1;
	};



	else if (clickCount===2) {
	const randValue4 = Math.floor(Math.random()*13);
	const randSuit4 = Math.floor(Math.random()*4);
	};




	/*I'm trying to think of ways to add functionality into this webpage. My initial 
idea was to add ability to send emails but I guess that involves back end stuff.
I was thinking of trying to come up with some small game just to show case my java stuff
Or maybe I could incoprporate some of the stuff I've done in the js excercises 
before. Like Maybe I could try to add a section on here that creates random dna bases
of a new species but add some more ways of analyzing it and making it on the 
actual webpage. Also maybe I could just try to make a basic calculator or something
I was thinking of some type of game maybe I could make using the keyboard comands
Like how you can make a ball rise or fall. Maybe I could make something like a 
wack a mole game where an object bounces from different areas on the screen and when
it turns a certain color you have to click on it really quick or something. I wonder
if I could make a basic side scroller game where you have to jump over obsticles or something
and if you hit an object it restarts. IDK if I have the skill set to do that 
but maybe. Maybe I could make a black jack game. Maybe not actually with cards
visually but I could make ann array of numbers and JQKA and an array of each sute
and then I could have a computer that followes the same rules that dealer at a casino
have to follow-I guess if it's black jack the sute doesn't exactly matter but just to-
keep each card having no more than four replications- and then give you the option to
hit or hold etc. Or maybe try to make other card games. I actually think I could
do that. I think I could probably do most of theses actually but I kind of have
an idea already for how that one would work. I think I'll try to do all of them actually
at some point. Maybe not all right away. And I want to continue learning so I don't
want to take all of my programming time on it but it could go towards an actual portfolio
if I do it well. I don't have much experience yet with actually putting my java
code on to my web page so that'll probably take me a little bit but it'll be good
practice. I actually might be able to make actuall pictures of the cards show up
to though now that I'm thinking about it. I could just basically have a directory
of linked images for all the different card types and if my generated value equled
[2, diamonds] I could retrieve the image for the 2 of diamonds and then have that 
displayed on the web page. */

const cardValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
const cardSuit = ['diamonds', 'hearts', 'spades', 'clubs'];


const newHandButton = document.querySelector("#newhand");
const hit = document.querySelector('.hit');
const stay = document.querySelector('.stay');

const dealerHand = document.querySelector('.dealer-hand');
const playerHand = document.querySelector('#playerhand');


/*IDK if I should genrate the value for the index outside the function or inside
and if I should generate a seperate one for the player and dealer hand to make sure
it's differnt every time. I'll have to go back over similar things i've done. 
also I can't think at the moment how I will prevent the same combination of value and
suit from showing up. Maybe just say if yada = yada iterate again or something idk. Another
thing I could do, all though it's not as cool lawl, and also not as flexible. Is I could
just make one array that has 52 elements that are each card. and then make a math random
statemenet that won't repeat values.*/




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



const newText = document.querySelector('#newtext');
const cardVal = document.querySelector('.cardvalue');

const bust = document.querySelector('.bust');




	let randValue1Out = 0;
	let randSuit1Out = 0;
	let randValue2Out = 0;
	let randSuit2Out = 0;

	let cardSum1 = 0;
	let cardSum2 = 0;


/*random thought I wonder if there's some trickiness you could do if you have
four values on the left like below where you could past all the values on the
right and it would past down for each left side instead of just pushing
the bottom 3 left sides down*/
	let valueArr = [];
	let suitArr = [];
	let clickCount = 0;



	const addCard = () => {
	clickCount ++;	


	const randValue3 = Math.floor(Math.random()*13);
	const randSuit3 = Math.floor(Math.random()*4);

	const randValue4 = Math.floor(Math.random()*13);
	const randSuit4 = Math.floor(Math.random()*4);

	/*I feel like there might be a more simple solution, something that only
	iterates the random value once or something. Something already designed for
	this type of thing. But I think the array below will work if I clear it when
	a new round starts*/




	


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
			/*might not need the opt two on number 3*/
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
			/*might not need the opt two on number 3*/
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
			/*might not need the opt two on number 3*/
	} else if (clickCount===3) {
		cardNumber5Opt1 = cardValue[randValue3];
		valueArr.push(cardValue[randValue3]);
		suitArr.push(cardSuit[randSuit3]);
	};



	/*for some reason when I try nest this al in another if statement that
	only creates the value for cardnumber3 when the click count is one the numbers
	completely stop adding corectly. They give all kinds of crazy values */

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

	cardSum1New1 = cardSum1 + cardNumber3Opt1;
	cardSum1New2 = cardSum1New1 + cardNumber4Opt1;
	cardSum1New3 = cardSum1New2 + cardNumber5Opt1;
	/*I sometime later will see if I can make this happen without creating 
	a new variable for each click*/
	

	if (cardNumber3Opt1 === 1) {
		cardSum2 = cardSum1New1 + cardNumber3Opt2;
	} else if (cardNumber3Opt1 === 1 && cardSum2 > 0) {
		cardSum2 += cardNumber3Opt2;
	} else if (cardNumber3Opt1 !== 1 && cardSum2 > 0) {
		cardSum2 += cardNumber3Opt1;
	};



	if (cardNumber4Opt1 === 1) {
		cardSum2 = cardSum1New2 + cardNumber4Opt2;
	} else if (cardNumber4Opt1 === 1 && cardSum2 > 0) {
		cardSum2 += cardNumber4Opt2;
	} else if (cardNumber4Opt1 !== 1 && cardSum2 > 0) {
		cardSum2 += cardNumber4Opt1;
	};


	if (cardNumber5Opt1 === 1) {
		cardSum2 = cardSum1New3 + cardNumber5Opt2;
	} else if (cardNumber5Opt1 === 1 && cardSum2 > 0) {
		cardSum2 += cardNumber5Opt2;
	} else if (cardNumber4Opt1 !== 1 && cardSum2 > 0) {
		cardSum2 += cardNumber5Opt1;
	};


	/*this doesn't work when the initial value has an ace in it... I fixed it, I 
	just have to label the clicks now and add an extra value for each click until
	cardsum1 >21 and then not allow any more clicks. I feel like there may be a
	better way to set this whole thing up but I'm going to finish it like this
	before I consider any other possibilities... IDK though. */
	/*If I make a randvalue4 and use that on the 4th cards, I'm not sure if the card
	generted for randvalue will stay the same. And then after all this there's still
	the issue of not repeating cards that I have to fix*/
	/*IDK if it would work but I was thinking of making a random value array and
	then pushing the rand value into it. IDK though if it would maintain each number
	pushed into it everytime the button was pushed. Then i could use randarra[0] as my
	randval3 number and so forth. Another idea is to put the random values here outside
	but idk if when I press new hand if it will reset each rand value or not.*/
 	if (cardSum2 > 21) {
 		cardSum2 = 0;
 	};

 	/*I still need to deal with two or three ace scenarios cause the above
 	code only displays the lowes value because 11 + 11 is 22. my code doesn't
 	account for that. if there are two aces one will always have to be 1 so
 	the valuexopt2 will have to be able to give 1 in that case. or i create an opt 3
 	and define when that has a value*/



	if (cardSum2 > 0 && clickCount===1) {
		cardVal.innerHTML = `${cardSum1New1} or ${cardSum2}`;
	} else if (clickCount===1) {
		cardVal.innerHTML = cardSum1New1;
	};

	/*for some reason two times this displayed the sum2 when there was no ace
	unless I missed something. It doesn't seem to be doing it. Either I didn't 
	notice an ace or this was something really subtle that either won't come up
	often or I inadvertently fixed without realising lol I need to make an auto
	clicking code that will click through like 1000 or more times to check lol*/


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
	/*I'll make this not say holy shit if i actually use it for a portfolio later
	but for now I like holy shit lawl.*/

	if (cardSum1New1 > 21 || cardSum1New2 > 21 || cardSum1New3 > 21) {
		bust.innerHTML = 'Bust';
		hit.removeEventListener("click", addCard);
	};

	/*The chances of you getting more than 5 or 6 cards and not busting seem 
	very small but it's technically possible for you to have 11 cards and not
	be over 21 so idk how many of these I should add*/
	/*I definitly need to add a few more cause i've encountered a few games 
	where i ran out of hits before bustin. Also when getting an ace on the
	last couple of hits it didn't seem to work as expected in one scenario
	i got 19 or 19 so I'll need to figure out whats causing that*/

};

const generateHands = () => {
	const randValue1 = Math.floor(Math.random()*13);
	const randSuit1 = Math.floor(Math.random()*4);
	const randValue2 = Math.floor(Math.random()*13);
	const randSuit2 = Math.floor(Math.random()*4);

	randValue1Out = randValue1
	randSuit1Out = randSuit1
	randValue2Out = randValue2
	randSuit2Out = randSuit2

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

	newText.innerHTML = `${cardValue[randValue1]} of ${cardSuit[randSuit1]} and 
	${cardValue[randValue2]} of ${cardSuit[randSuit2]}`;

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


	/*I had the innerHTML for cardval specified on every if statment above but then
	realised I could seperate them using the below cause the deciding factor is if
	sum2>0. I'm going to copy the code exactly how it is but I'm thinking now I
	don't think I even need the above if statment. Just sum1 = both opt 1 and sume2
	= both opt 2 regardless because if neither are aces it'll just add zero regardless
	to sum2.*/

	if (cardSum2 > 0) {
		cardVal.innerHTML = `${cardSum1} or ${cardSum2}`;
	} else {
		cardVal.innerHTML = cardSum1;
	};
	valueArr = [];
	suitArr = [];
	clickCount = 0;
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

	hit.addEventListener("click", addCard);
	
};

/*The above creates a problem in my css where different values shift the placement
of other elements around. This is because it's long enough that it's going
outside the container and effecting the flex placement so I'll need to fix 
that*/
const test = document.querySelector('.test');




/*I already have the buttons separate so I'm going to keep going like this 
for now but I was thinking I could maybe just have the new hand button
turn into the hit button aster the first time it's pressed and then I could
do anything from one function*/
/*I could either make cardvalue 2 not show when it's over 21 or leave it and
then just make it so when the player presses stay it pick the highest value
that isn't over 21. Which I should do anyway but i'll probably also remove value
2 completely from the display when it's over 21*/



newHandButton.addEventListener("click", generateHands);





let newcolor = document.querySelector(".projects");



document.querySelector(".projects").style.backgroundColor = "black"

/*After fixing the couple problems in the player hand and adding a stay button
I'll just need to make the dealer deal 2 cards initially and then follow the
instructions that a casino would after the player presses stay. Then just turn
all the card statement's into pictures of cards and fix the CSS skewing as
the text get's bigger and it'll be done. Oh also I should probably find a way
to make the cards never repeat themselves. At least within a given game before
dealing a new hand. Or I could possibly try to make it act like a real deck that
goes through all 52 cards (or act like 2 or 3 decks like in a casino) and then
'reshuffles' after you get down to a certain limit. Then if i really want to get fancy I could
try to make actual chips and a betting system and then if I want to get even more
fancy I could make animations of the cards being dealt*/

/*not counting the comments this has about 290 or so lines of code, Thats with
the space between snippits. it'll probably be 400-600 or so by the time i'm done
idk though just a guess we'll see*/




/*it's completely insane but one mistake inside the newhandbutton query selector 
effected the functionalility of every piece of code on this file. It had the semi colon
after and wasn't related to any of the other pieces of code on here. That seems insane
to me tbh lawl. I guess though normally I work with a debugger in the codecademy that
tells me when there's syntax errors so I guess I shouldn't be surprised*/
/*my first thought as to how to make the event listener pick a new random on every
click is to maybe use a loop and then say if a click event happens iterate and then
do math random on each but idk if that'll work*/
/* I just had the function in the event listner with the () which If I'm thinking right
actually just gives the return value of the function and doesn't really excecute the function
or something like that. I remember having something similar happen although if i'm
thinking it was with object methods specifically but I think it's basically the same concept
that's why it was returning on page load and not doing anything when I pressed the
button i just need to practice consistantly to get everything memorized. doing
all these js programs for the portfolio page should help.*/
/*I read something about using innerHTML being bad practice and you should use
append child or something. I should look that up and keep that in mind because
using best practices will help me get a job in the future. */
/*another cool thing to do after I get to the point where the cards are actualy shown
as pictures would be to create custom animations of the cards actually being
dealt out from the deck*/


const hitcountnumber = document.querySelector('.hitcount');

hitcountnumber.innerHTML = hitCount;



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

	if (hitCount===1) {
		dealText.innerHTML = `${cardValue[randValue1OutD]} of ${cardSuit[randSuit1OutD]} and 
		${cardValue[randValue2OutD]} of ${cardSuit[randSuit2OutD]} and 
		${valueArrD[0]} of ${suitArrD[0]}`;
	};


	if (hitCount===2) {
		dealText.innerHTML = `${cardValue[randValue1OutD]} of ${cardSuit[randSuit1OutD]} and 
		${cardValue[randValue2OutD]} of ${cardSuit[randSuit2OutD]} and 
		${valueArrD[0]} of ${suitArrD[0]} and ${valueArrD[1]} of ${suitArrD[1]}`;
	};

	if (hitCount===3) {
		dealText.innerHTML = `${cardValue[randValue1OutD]} of ${cardSuit[randSuit1OutD]} and 
		${cardValue[randValue2OutD]} of ${cardSuit[randSuit2OutD]} and 
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

	/*Stopping anymore hits after bust, needs to also do this when the stay
	button is pressed*/


	if (cardSum1New1D > 21 || cardSum1New2D > 21 || cardSum1New3D > 21) {
		dealBust.innerHTML = 'Bust';
		
	};

	else {
	dealText.innerHTML = `${cardValue[randValue1DOut]} of ${cardSuit[randSuit1DOut]} and 
		${cardValue[randValue2DOut]} of ${cardSuit[randSuit2DOut]}`;
	dealVal.innerHTML = cardSum1D;
};




else if (cardSum1New3Out > 17 || cardSum2 > 17 && cardSum2D <= 17) {
		setTimeout(genDealerHand2, 2000);
	};

	if (cardSum1New3DOut >= 17 && cardSum1New3DOut > cardSum1New3Out ||
		cardSum1New3DOut >= 17 && cardSum1New3DOut > cardSum2) {
		winFunctionD();
	} else if (cardSum1New3DOut >= 17 && cardSum1New3DOut < cardSum1New3Out ||
		cardSum1New3DOut >= 17 && cardSum1New3DOut < cardSum2) {
		winFunction();
	};



	/*
	if (cardSum2D === 0 && cardSum1D < 17) {
		setTimeout(genDealerHand2, 2000);
	};*/








/*
	if (cardSum1D > cardSum1New3Out && cardSum2 === 0 || cardSum2D > 
		cardSum1New3Out && cardSum2 === 0) {
		winFunctionD();
	} else if (cardSum1D > cardSum2 && cardSum2 > 0 || cardSum2D > 
		cardSum2 && cardSum2 > 0) {
		winFunctionD();
	};
*/

/*Just one last thing I need to specify when there is a draw and the dealer
is above or at 17*/

/*

const dealerbelow = () => {
	if (cardSum2D === 0 && cardSum1D < 17) {
		setTimeout(genDealerHand2, 2000);
	};

/* commenting out for now cause I don't think I need this
	const winorlose = () => {
			/*I should be able to delete the and statement on all the 
			win or lose functions i'm going to wait though

			const winOrLoseNoAce = () => {
				if (cardSum1D < cardSum1New3Out && cardSum2 === 0) {
					winFunction();
				} else if (cardSum1D > cardSum1New3Out && cardSum2 === 0) {
					winFunctionD();
				} else if (cardSum2 === 0 && cardSum1D === cardSum1New3Out) {
					draw();
				};

				if (cardSum1D < cardSum2 && cardSum2 > 0) {
					winFunction();
				} else if (cardSum1D > cardSum2 && cardSum2 > 0) {
					winFunctionD();
				} else if (cardSum2 > 0 && cardSum1D === cardSum2) {
					draw();
				};		
			};
		
			const winOrLoseAce = () => {
				if (cardSum1D < cardSum2 && cardSum2 > 0) {
					winFunction();
				} else if (cardSum1D > cardSum2 && cardSum2 > 0) {
					winFunctionD();
				} else if (cardSum2 > 0 && cardSum1D === cardSum2) {
					draw();
				};
			};

		if (cardSum2 === 0) {
			winOrLoseNoAce();
		} else if (cardSum2 > 0) {
			winOrLoseAce();
		};

	};
	/*I guess the dealer never hits above 17 regardless so this is unecesary
	
	if (cardSum2D===0 && cardSum1D >= 17) {
		winorlose();
	};*/

/*
	const softseventeen = () => {
		if (cardSum2D <= 17) {
			setTimeout(genDealerHand2, 2000);
		};
	};

	if (cardSum2D <= 17 && cardSum2D < cardSum2) {
		softseventeen();
	};

	if (cardSum2D <= 17 && cardSum2D < cardSum1New3Out) {
		softseventeen();
	}

	if (cardSum2D >= cardSum1New3Out && cardSum2 === 0) {
		winFunctionD();
	} else if (cardSum2 > 0 && cardSum2D > cardSum2) {
		winFunctionD();
		};
	};

	if (cardSum1D < cardSum1New3 && cardSum2 === 0 && cardSum2D === 0) {
		dealerbelow();
	} else if ( cardSum1D < cardSum2 && cardSum2 > 0 && cardSum2D ===0) {
		dealerbelow();
	};

	if (cardSum2D < cardSum1New3 && cardSum2 === 0 && cardSum2D > 0) {
		dealerbelow();
	} else if ( cardSum2D < cardSum2 && cardSum2 > 0 && cardSum2D > 0) {
		dealerbelow();
	};
	/* The above won't quite work cause sometimes it's below sum2 and above
	sum1. I'll fix it tomorrow but I almost got all the odds and ends worked 
	out I think*/

	/*Also sometimes it randomely says dealer wins even when he still has cards
	to hit so I'll think about that tomorrow*/

	/*I need to add the second part of this to be applied in the genhand2
	to start time function2*/

	/*All the ands and ors in the functions I had here before weren't working.
	I was sort of thinking they may not work. I might have to seperate them
	and create like four different if statements for each long statement I had
	I think It works in some situations. If it's this or this and this or that,
	I think that works. IDK, but if it's like this or this and this... and then
	also that. That doesn't work. I'll have to see for sure cause it might be
	that none of them really work.*/


	if hit isn't pushed cardsumnew wont change i'm looking at card sum 1 from inside
	the hit button which is why it shows the same unless i press hit. This is also why
the sumnew was showing the same as the old functions because I'm not actually getting a new valueArr
for cardSum1New1 unless it goes threw the hit function. So I'm going to try and find a work
around. I'm wondering if some of my older if statements that weren't all nested would've 
worked proberly as well.