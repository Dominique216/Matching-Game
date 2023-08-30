

let card = document.querySelectorAll('.card')
card.forEach(ele => ele.classList.add("front"))

// let isBackShowing = false;


let numberofCardsClicked = 0;

card.forEach(ele => ele.addEventListener("click", function(e){
        e.preventDefault();
        // isBackShowing = true;
        numberofCardsClicked++

        if(numberofCardsClicked <= 2) {
           ele.classList.remove("animation2")
            ele.classList.add("animation")
            ele.classList.remove("front")
            ele.classList.add("back") 
        }
        
    
        
        // console.log(isBackShowing)
    
        // const turnCardBackAround = (el) => {
        //     el.classList.add("front");
        //     el.classList.remove("back");
        // }
    
        // setTimeout(turnCardBackAround(ele), 5000)
        // const turnCardBackAround = (oneCard) => {
        //     console.log("works")
        //     oneCard.classList.remove("front")
        //     oneCard.classList.add("back")
        // }
    
        // setTimeout(turnCardBackAround(ele), 1000)
    
        if(numberofCardsClicked == 2) {
           setTimeout(() => {
            numberofCardsClicked = 0
            card.forEach(ele => {
                ele.classList.remove("animation")
                ele.classList.add("animation2")
                ele.classList.remove("back")
                ele.classList.add("front") 
            })
            // ele.classList.add("animation2")
            // ele.classList.remove("back")
            // ele.classList.add("front")
            // console.log("works")
            }, 2000); 
        }
    // e.preventDefault();
    // // isBackShowing = true;

    // ele.classList.add("animation")
    // ele.classList.remove("front")
    // ele.classList.add("back")

    // numberofCardsClicked++
    // // console.log(isBackShowing)

    // // const turnCardBackAround = (el) => {
    // //     el.classList.add("front");
    // //     el.classList.remove("back");
    // // }

    // // setTimeout(turnCardBackAround(ele), 5000)
    // // const turnCardBackAround = (oneCard) => {
    // //     console.log("works")
    // //     oneCard.classList.remove("front")
    // //     oneCard.classList.add("back")
    // // }

    // // setTimeout(turnCardBackAround(ele), 1000)

    // if(numberofCardsClicked > 1) {
    //    setTimeout(() => {
    //     card.forEach(ele => {
    //         ele.classList.add("animation2")
    //         ele.classList.remove("back")
    //         ele.classList.add("front") 
    //     })
    //     // ele.classList.add("animation2")
    //     // ele.classList.remove("back")
    //     // ele.classList.add("front")
    //     // console.log("works")
    //     }, 2000); 
    // }
    
}));
console.log(numberofCardsClicked)
// if(numberofCardsClicked > 1) {
//     setTimeout((ele) => {
//         ele.classList.add("animation2")
//         ele.classList.remove("back")
//         ele.classList.add("front")
//         console.log("works")
//     }, 2000);
// }
// const turnCardBackAround = () => {
//     ele.classList.add("front")
//     ele.classList.remove("back")
// }
    



// console.log(isBackShowing)

// create 6 variables one - six to keep track of how many times a number exists 

// for each card (give them each an individual id)
    // generate a random number 1-6
    // if that number already exsits two times, then regenerate a number (recursion?)

    // then have an if statement saying if num == one, then add classlist .whatever shape...

// still need to figure out the display issues on the shapes (so maybe try a display of none until the card is clicked)

// let card1 = document.getElementById('card1');
// let card2 = document.getElementById('card1');
// let card3 = document.getElementById('card1');
// let card4 = document.getElementById('card1');
// let card5 = document.getElementById('card1');
// let card6 = document.getElementById('card1');
// let card7 = document.getElementById('card1');
// let card8 = document.getElementById('card1');
// let card9 = document.getElementById('card1');
// let card10 = document.getElementById('card1');
// let card11 = document.getElementById('card1');
// let card12 = document.getElementById('card1');

// let numArr = []

// for(let i = 0; i < card.length; i++) {
//     // card.forEach(ele => let num = Math.floor(Math.random()*6))

//     let num
// }

// console.log(card.length)


// create empty array 1 and empty array 2 (will make empty again wht the game is over)
// create a get random num function : will make sure each number(1-6) is only assinged twice. 
    // let num = random number1-6
    // if num does not exists in the array1, pushi nto array one 
        // return num 
    // if num does not  exsists in array2, push into array two
        // return num 
    // if num num exsists in noth array1 and array2, call function again 
        // return function again 


// create 12 variables cardnum1-12 => call the get random number funciton here 

// create like a switch statement that is like if cardnum = 1, then add "..." to classlist to 

// let cardOneNum = Math.floor(Math.random() * (12-1) + 1);
// let cardTwoNum = Math.floor(Math.random() * (12-1) + 1);
// let cardThreeNum = Math.floor(Math.random() * (12-1) + 1);
// let cardFourNum = Math.floor(Math.random() * (12-1) + 1);
// let cardFiveNum = Math.floor(Math.random() * (12-1) + 1);
// let cardSixNum = Math.floor(Math.random() * (12-1) + 1);
// let cardSevenNum = Math.floor(Math.random() * (12-1) + 1);
// let cardEightNum = Math.floor(Math.random() * (12-1) + 1);
// let cardNineNum = Math.floor(Math.random() * (12-1) + 1);
// let cardTenNum = Math.floor(Math.random() * (12-1) + 1);
// let cardElevenNum = Math.floor(Math.random() * (12-1) + 1);
// let cardTwelveNum = Math.floor(Math.random() * (12-1) + 1);




// console.log("1: " + cardOneNum)
// console.log("2: " + cardTwoNum)
// console.log("3: " + cardThreeNum)
// console.log("4: " + cardFourNum)
// console.log("5: " + cardFiveNum)
// console.log("6: " + cardSixNum)
// console.log("7: " + cardSevenNum)
// console.log("8: " + cardEightNum)
// console.log("9: " + cardNineNum)
// console.log("10: " + cardTenNum)
// console.log("11: " + cardElevenNum)
// console.log("12: " + cardTwelveNum)


// gereate shuffled array of the numbers 1-12
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
//     ranNums = [],
//     i = nums.length,
//     j = 0;

// while (i--) {
//     j = Math.floor(Math.random() * (i+1));
//     ranNums.push(nums[j]);
//     nums.splice(j,1);
// }

// console.log(ranNums)

// // assigns each card a number
// let cardOneNum = ranNums[0]
// let cardTwoNum = ranNums[1]
// let cardThreeNum = ranNums[2]
// let cardFourNum = ranNums[3]
// let cardFiveNum = ranNums[4]
// let cardSixNum = ranNums[5]
// let cardSevenNum = ranNums[6]
// let cardEightNum = ranNums[7]
// let cardNineNum = ranNums[8]
// let cardTenNum = ranNums[9]
// let cardElevenNum = ranNums[10]
// let cardTwelveNum = ranNums[11]


// let numIsOne = () => {

// }


// switch(cardOneNum) {
//     case 1:
        
// }




// console.log("1: " + cardOneNum)
// console.log("2: " + cardTwoNum)
// console.log("3: " + cardThreeNum)
// console.log("4: " + cardFourNum)
// console.log("5: " + cardFiveNum)
// console.log("6: " + cardSixNum)
// console.log("7: " + cardSevenNum)
// console.log("8: " + cardEightNum)
// console.log("9: " + cardNineNum)
// console.log("10: " + cardTenNum)
// console.log("11: " + cardElevenNum)
// console.log("12: " + cardTwelveNum)
