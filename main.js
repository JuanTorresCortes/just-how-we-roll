/**********
 * DATA *
 **********/
let myList = [];
let nodeList = document.querySelectorAll("h2,img");
let nodeToArr = Array.prototype.slice.call(nodeList);
for (const item of nodeList) {
  myList.push(item);
}
myList[0].src = "images/start/d6.png";
myList[1].innerText = "N/A";
myList[2].src = "images/start/d6.png";
myList[3].src = "images/start/d6.png";
myList[4].innerText = "N/A";
myList[5].src = "images/start/d12.jpeg";
myList[6].innerText = "N/A";
myList[7].src = "images/start/d20.jpg";
myList[8].innerText = "N/A";

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
 ********************/

const getRandomNumber = function (max) {
  const rand = Math.random();
  const range = rand * max;
  const result = Math.ceil(range);
  return result;
};

const getMean = function (array) {
  const arrSum = array.reduce(function (acc, num) {
    return acc + num;
  });
  const arrayLength = array.length;
  return arrSum / arrayLength;
};

/*******************
 * YOUR CODE BELOW *
 *******************/

/*******************
 * EVENT LISTENERS *
 *******************/
let resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", reset);

let d6_button = document.querySelector("#d6-button");
d6_button.addEventListener("click", rollDieSixes);

let double_d6_buttons = document.querySelector("#double-d6-buttons");
double_d6_buttons.addEventListener("click", rollDoubleSixes);

let d12_button = document.querySelector("#d12-button");
d12_button.addEventListener("click", rollDie12);

let d20_button = document.querySelector("#d20-button");
d20_button.addEventListener("click", rollDie20)

/******************
 * RESET FUNCTION *
 ******************/
function reset() {
  let myList = [];
  let nodeList = document.querySelectorAll("h2,img");
  let nodeToArr = Array.prototype.slice.call(nodeList);
  for (const item of nodeList) {
    myList.push(item);
  }
  myList[0].src = "images/start/d6.png";
  myList[1].innerText = 0;
  myList[2].src = "images/start/d6.png";
  myList[3].src = "images/start/d6.png";
  myList[4].innerText = 0;
  myList[5].src = "images/start/d12.jpeg";
  myList[6].innerText = 0;
  myList[7].src = "images/start/d20.jpg";
  myList[8].innerText = 0;
}

/****************************
 * CLICK HANDLING FUNCTIONS *
 ****************************/

function rollDieSixes() {
  let randomNum = getRandomNumber(6);
  sixes.push(randomNum);
  myList[1].innerText = getMean(sixes);

  switch (randomNum) {
    case 1:
      myList[0].src = "images/d6/1.png";
      break;
    case 2:
      myList[0].src = "images/d6/2.png";
      break;
    case 3:
      myList[0].src = "images/d6/3.png";
      break;
    case 4:
      myList[0].src = "images/d6/4.png";
      break;
    case 5:
      myList[0].src = "images/d6/5.png";
      break;
    case 6:
      myList[0].src = "images/d6/6.png";
      break;
    default:
      break;
  }
}

function rollDoubleSixes() {
  let randomNum1 = getRandomNumber(6);
  let randomNum2 = getRandomNumber(6);

  doubleSixes.push(randomNum1, randomNum2);
  myList[4].innerText = getMean(doubleSixes);

  switch (randomNum1) {
    case 1:
      myList[2].src = "images/d6/1.png";
      break;
    case 2:
      myList[2].src = "images/d6/2.png";
      break;
    case 3:
      myList[2].src = "images/d6/3.png";
      break;
    case 4:
      myList[2].src = "images/d6/4.png";
      break;
    case 5:
      myList[2].src = "images/d6/5.png";
      break;
    case 6:
      myList[2].src = "images/d6/6.png";
      break;
    default:
      break;
  }

  switch (randomNum2) {
    case 1:
      myList[3].src = "images/d6/1.png";
      break;
    case 2:
      myList[3].src = "images/d6/2.png";
      break;
    case 3:
      myList[3].src = "images/d6/3.png";
      break;
    case 4:
      myList[3].src = "images/d6/4.png";
      break;
    case 5:
      myList[3].src = "images/d6/5.png";
      break;
    case 6:
      myList[3].src = "images/d6/6.png";
      break;
    default:
      break;
  }
}

function rollDie12() {
  let randomNum = getRandomNumber(12);
  twelves.push(randomNum);
  myList[6].innerText = getMean(twelves);

  switch (randomNum) {
    case 1:
      myList[5].src = "images/numbers/1.png";
      break;
    case 2:
      myList[5].src = "images/numbers/2.png";
      break;
    case 3:
      myList[5].src = "images/numbers/3.png";
      break;
    case 4:
      myList[5].src = "images/numbers/4.png";
      break;
    case 5:
      myList[5].src = "images/numbers/5.png";
      break;
    case 6:
      myList[5].src = "images/numbers/6.png";
      break;
    case 7:
      myList[5].src = "images/numbers/7.png";
      break;
    case 8:
      myList[5].src = "images/numbers/8.png";
      break;
    case 9:
      myList[5].src = "images/numbers/9.png";
      break;
    case 10:
      myList[5].src = "images/numbers/10.png";
      break;
    case 11:
      myList[5].src = "images/numbers/11.png";
      break;
    case 12:
      myList[5].src = "images/numbers/12.png";
      break;
    default:
      break;
  }
}

function rollDie20() {
  let randomNum = getRandomNumber(20);
  twenties.push(randomNum);
  myList[8].innerText = getMean(twenties);

  switch (randomNum) {
    case 1:
      myList[7].src = "images/numbers/1.png";
      break;
    case 2:
      myList[7].src = "images/numbers/2.png";
      break;
    case 3:
      myList[7].src = "images/numbers/3.png";
      break;
    case 4:
      myList[7].src = "images/numbers/4.png";
      break;
    case 5:
      myList[7].src = "images/numbers/5.png";
      break;
    case 6:
      myList[7].src = "images/numbers/6.png";
      break;
    case 7:
      myList[7].src = "images/numbers/7.png";
      break;
    case 8:
      myList[7].src = "images/numbers/8.png";
      break;
    case 9:
      myList[7].src = "images/numbers/9.png";
      break;
    case 10:
      myList[7].src = "images/numbers/10.png";
      break;
    case 11:
      myList[7].src = "images/numbers/11.png";
      break;
    case 12:
      myList[7].src = "images/numbers/12.png";
      break;
    case 13:
      myList[7].src = "images/numbers/13.png";
      break;
    case 14:
      myList[7].src = "images/numbers/14.png";
      break;
    case 15:
      myList[7].src = "images/numbers/15.png";
      break;
    case 16:
      myList[7].src = "images/numbers/16.png";
      break;
    case 17:
      myList[7].src = "images/numbers/17.png";
      break;
    case 18:
      myList[7].src = "images/numbers/18.png";
      break;
    case 19:
      myList[7].src = "images/numbers/19.png";
      break;
    case 20:
      myList[7].src = "images/numbers/20.png";
      break;
    default:
      break;
  }
}
/****************
 * MATH SECTION *
 ****************/
