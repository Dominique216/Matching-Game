

//selects all the cards fron the html
let card = document.querySelectorAll('.card')

// add the class of front to all cards a=upon start so that the striped side is showing
card.forEach(ele => ele.classList.add("front"))


// gereate shuffled array of the numbers 1-12
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    ranNums = [],
    i = nums.length,
    j = 0;

while (i--) {
    j = Math.floor(Math.random() * (i+1));
    ranNums.push(nums[j]);
    nums.splice(j,1);
}

console.log(ranNums)

// assigns each card a number
let cardOneNum = ranNums[0];
let cardTwoNum = ranNums[1];
let cardThreeNum = ranNums[2];
let cardFourNum = ranNums[3];
let cardFiveNum = ranNums[4];
let cardSixNum = ranNums[5];
let cardSevenNum = ranNums[6];
let cardEightNum = ranNums[7];
let cardNineNum = ranNums[8];
let cardTenNum = ranNums[9];
let cardElevenNum = ranNums[10];
let cardTwelveNum = ranNums[11];

let card1 = document.getElementById("card1")
let card2 = document.getElementById("card2")
let card3 = document.getElementById("card3")
let card4 = document.getElementById("card4")
let card5 = document.getElementById("card5")
let card6 = document.getElementById("card6")
let card7 = document.getElementById("card7")
let card8 = document.getElementById("card8")
let card9 = document.getElementById("card9")
let card10 = document.getElementById("card10")
let card11 = document.getElementById("card11")
let card12 = document.getElementById("card12")


let numIsOneOrTwo = (cardnum) => {
    let icon = document.createElement("i")
    icon.classList.add("devicon-html5-plain-wordmark")
    icon.classList.add("hidden")
    cardnum.appendChild(icon)
    // console.log(cardnum)
}
let numIsThreeOrFour = (cardnum) => {
    let icon = document.createElement("i")
    icon.classList.add("devicon-css3-plain-wordmark")
    icon.classList.add("hidden")
    cardnum.appendChild(icon)
    // console.log(cardnum)
}
let numIsFiveorSix = (cardnum) => {
    let icon = document.createElement("i")
    icon.classList.add("devicon-javascript-plain")
    icon.classList.add("hidden")
    cardnum.appendChild(icon)
    // console.log(cardnum)
}
let numIsSevenorEight = (cardnum) => {
    let icon = document.createElement("i")
    icon.classList.add("devicon-java-plain-wordmark")
    icon.classList.add("hidden")
    cardnum.appendChild(icon)
    // console.log(cardnum)
}
let numIsNineorTen = (cardnum) => {
    let icon = document.createElement("i")
    icon.classList.add("devicon-python-plain-wordmark")
    icon.classList.add("hidden")
    cardnum.appendChild(icon)
    // console.log(cardnum)
}
let numIsElevenOrTwelve = (cardnum) => {
    let icon = document.createElement("i")
    icon.classList.add("devicon-react-plain-wordmark")
    icon.classList.add("hidden")
    cardnum.appendChild(icon)
    // console.log(cardnum)
}



let cardArr = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12]
let cardNumArr = [cardOneNum, cardTwoNum, cardThreeNum, cardFourNum, cardFiveNum, cardSixNum, cardSevenNum, cardEightNum, cardNineNum, cardTenNum, cardElevenNum, cardTwelveNum]



for(let i = 0; i < cardNumArr.length; i++) {
//     console.log(cardNumArr[i])
switch(cardNumArr[i]) {
    case 1:
    case 2:
        numIsOneOrTwo(cardArr[i]);
        break;
    case 3:
    case 4:
        numIsThreeOrFour(cardArr[i]);
        break;
    case 5:
    case 6:
        numIsFiveorSix(cardArr[i]);
        break;
    case 7:
    case 8:
        numIsSevenorEight(cardArr[i]);
        break;
    case 9:
    case 10:
        numIsNineorTen(cardArr[i]);
        break;
    case 11:
    case 12:
        numIsElevenOrTwelve(cardArr[i]);
        break;
    }
}

// selects al lof the hidden icons to be matched
let hiddenImgs = document.querySelectorAll(".hidden")

// keeps track of how many cards have been selected
let numberofCardsClicked = 0;


// // function listens for a click on the card and turns it over
card.forEach((ele, i)=> ele.addEventListener("click", function(e){

    console.log(ele)
    e.preventDefault();

    //adds up the number of cards clicked
    numberofCardsClicked++

    // if the numebr of cards clicked is less than 2:
        // add the front of card to back of card animation (and remove the other one)
        // add the back side css (and remove the front css)
        // remove the hidden diplay of the icons 

    if(numberofCardsClicked <= 2) {
        ele.classList.remove("animation2")
        ele.classList.add("animation")
        ele.classList.remove("front")
        ele.classList.add("back")
        hiddenImgs[i].classList.remove("hidden")

    }
        
    
    if(numberofCardsClicked == 2) {
        setTimeout(() => {
        numberofCardsClicked = 0
        card.forEach(ele => { 
            if(ele.classList.contains("back")) {
               ele.classList.remove("animation")
                ele.classList.add("animation2")
                ele.classList.remove("back")
                ele.classList.add("front") 
                hiddenImgs.forEach(img => img.classList.add("hidden")) 
            }    
        })}, 2000); 
    } 
}));

// NEED TO CREATE A CORRECT PAIR FUCTION THAT:
    // 1. WILL CHECK IF TOW OF THE SAME CARD WAS CHOSEN (maybe look at the icons, or the cardnums associate that that card)
    // 2. WILL MAYBE TO A GREEN COLOR ON CORRECT PAIR, THEN JUST HAVE THE BACK SHOWING, OS MAKE IT THE SAME OCLOR AS THE BACKGROUND AND "DISSAPEAR"; (should def have a fun littile naimaiton)

// NEED TO CREATE A WIN GAME FUNCTION WHEN ALL PAIRS ARE MATCH 
    // 1. WIL ALREAT YOU THAT YOU WON
    // 2. WILL GIVE YOU THE OPTION TO PLAY AGAIN

// NEED OT CREATE A SORCE KEEPER OF SOME SORT(MAYBE A TIMER??)
    // if i do a timer i'll need to create a start game button to start the timer when the plyer is ready to begin. 
