/**********
 * DATA *
 **********/

////////////// 1 dice
let singleDiePic = document.querySelector("#d6-roll");
singleDiePic.src = "images/start/d6.png";
let singleDieMean = document.querySelector("#d6-rolls-mean");
singleDieMean.innerText = "N/A";

///////////// 2 dice
let doubleDiePic1 = document.querySelector("#double-d6-roll-1");
doubleDiePic1.src = "images/start/d6.png";
let doubleDiePic2 = document.querySelector("#double-d6-roll-2");
doubleDiePic2.src = "images/start/d6.png";
let doubleDieMean = document.querySelector("#double-d6-rolls-mean");
doubleDieMean.innerText = "N/A";

////////////// 12 side dice
let die12Pic = document.querySelector("#d12-roll");
die12Pic.src = "images/start/d12.jpeg";
let die12Mean = document.querySelector("#d12-rolls-mean");
die12Mean.innerText = "N/A";

/////////////// 20 side dice
let die20Pic = document.querySelector("#d20-roll");
die20Pic.src = "images/start/d20.jpg";
let die20Mean = document.querySelector("#d20-rolls-mean");
die20Mean.innerText = "N/A";

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
d20_button.addEventListener("click", rollDie20);

/******************
 * RESET FUNCTION *
 ******************/
function reset() {
  sixes = [];
  doubleSixes = [];
  twelves = [];
  twenties = [];
  ////////////// 1 dice
  let singleDiePic = document.querySelector("#d6-roll");
  singleDiePic.src = "images/start/d6.png";
  let singleDieMean = document.querySelector("#d6-rolls-mean");
  singleDieMean.innerText = "N/A";

  ///////////// 2 dice
  let doubleDiePic1 = document.querySelector("#double-d6-roll-1");
  doubleDiePic1.src = "images/start/d6.png";
  let doubleDiePic2 = document.querySelector("#double-d6-roll-2");
  doubleDiePic2.src = "images/start/d6.png";
  let doubleDieMean = document.querySelector("#double-d6-rolls-mean");
  doubleDieMean.innerText = "N/A";

  ////////////// 12 side dice
  let die12Pic = document.querySelector("#d12-roll");
  die12Pic.src = "images/start/d12.jpeg";
  let die12Mean = document.querySelector("#d12-rolls-mean");
  die12Mean.innerText = "N/A";

  /////////////// 20 side dice
  let die20Pic = document.querySelector("#d20-roll");
  die20Pic.src = "images/start/d20.jpg";
  let die20Mean = document.querySelector("#d20-rolls-mean");
  die20Mean.innerText = "N/A";
}

/****************************
 * CLICK HANDLING FUNCTIONS *
 ****************************/

function rollDieSixes() {
  let randomNum = getRandomNumber(6);
  sixes.push(randomNum);
  singleDieMean.innerText = getMean(sixes);

  switch (randomNum) {
    case 1:
      singleDiePic.src = "images/d6/1.png";
      break;
    case 2:
      singleDiePic.src = "images/d6/2.png";
      break;
    case 3:
      singleDiePic.src = "images/d6/3.png";
      break;
    case 4:
      singleDiePic.src = "images/d6/4.png";
      break;
    case 5:
      singleDiePic.src = "images/d6/5.png";
      break;
    case 6:
      singleDiePic.src = "images/d6/6.png";
      break;
    default:
      break;
  }
}

function rollDoubleSixes() {
  let randomNum1 = getRandomNumber(6);
  let randomNum2 = getRandomNumber(6);

  doubleSixes.push(randomNum1, randomNum2);
  doubleDieMean.innerText = getMean(doubleSixes);

  switch (randomNum1) {
    case 1:
      doubleDiePic1.src = "images/d6/1.png";
      break;
    case 2:
      doubleDiePic1.src = "images/d6/2.png";
      break;
    case 3:
      doubleDiePic1.src = "images/d6/3.png";
      break;
    case 4:
      doubleDiePic1.src = "images/d6/4.png";
      break;
    case 5:
      doubleDiePic1.src = "images/d6/5.png";
      break;
    case 6:
      doubleDiePic1.src = "images/d6/6.png";
      break;
    default:
      break;
  }

  switch (randomNum2) {
    case 1:
      doubleDiePic2.src = "images/d6/1.png";
      break;
    case 2:
      doubleDiePic2.src = "images/d6/2.png";
      break;
    case 3:
      doubleDiePic2.src = "images/d6/3.png";
      break;
    case 4:
      doubleDiePic2.src = "images/d6/4.png";
      break;
    case 5:
      doubleDiePic2.src = "images/d6/5.png";
      break;
    case 6:
      doubleDiePic2.src = "images/d6/6.png";
      break;
    default:
      break;
  }
}

function rollDie12() {
  let randomNum = getRandomNumber(12);
  twelves.push(randomNum);
  die12Mean.innerText = getMean(twelves);

  switch (randomNum) {
    case 1:
      die12Pic.src = "images/numbers/1.png";
      break;
    case 2:
      die12Pic.src = "images/numbers/2.png";
      break;
    case 3:
      die12Pic.src = "images/numbers/3.png";
      break;
    case 4:
      die12Pic.src = "images/numbers/4.png";
      break;
    case 5:
      die12Pic.src = "images/numbers/5.png";
      break;
    case 6:
      die12Pic.src = "images/numbers/6.png";
      break;
    case 7:
      die12Pic.src = "images/numbers/7.png";
      break;
    case 8:
      die12Pic.src = "images/numbers/8.png";
      break;
    case 9:
      die12Pic.src = "images/numbers/9.png";
      break;
    case 10:
      die12Pic.src = "images/numbers/10.png";
      break;
    case 11:
      die12Pic.src = "images/numbers/11.png";
      break;
    case 12:
      die12Pic.src = "images/numbers/12.png";
      break;
    default:
      break;
  }
}

function rollDie20() {
  let randomNum = getRandomNumber(20);
  twenties.push(randomNum);
  die20Mean.innerText = getMean(twenties);

  switch (randomNum) {
    case 1:
      die20Pic.src = "images/numbers/1.png";
      break;
    case 2:
      die20Pic.src = "images/numbers/2.png";
      break;
    case 3:
      die20Pic.src = "images/numbers/3.png";
      break;
    case 4:
      die20Pic.src = "images/numbers/4.png";
      break;
    case 5:
      die20Pic.src = "images/numbers/5.png";
      break;
    case 6:
      die20Pic.src = "images/numbers/6.png";
      break;
    case 7:
      die20Pic.src = "images/numbers/7.png";
      break;
    case 8:
      die20Pic.src = "images/numbers/8.png";
      break;
    case 9:
      die20Pic.src = "images/numbers/9.png";
      break;
    case 10:
      die20Pic.src = "images/numbers/10.png";
      break;
    case 11:
      die20Pic.src = "images/numbers/11.png";
      break;
    case 12:
      die20Pic.src = "images/numbers/12.png";
      break;
    case 13:
      die20Pic.src = "images/numbers/13.png";
      break;
    case 14:
      die20Pic.src = "images/numbers/14.png";
      break;
    case 15:
      die20Pic.src = "images/numbers/15.png";
      break;
    case 16:
      die20Pic.src = "images/numbers/16.png";
      break;
    case 17:
      die20Pic.src = "images/numbers/17.png";
      break;
    case 18:
      die20Pic.src = "images/numbers/18.png";
      break;
    case 19:
      die20Pic.src = "images/numbers/19.png";
      break;
    case 20:
      die20Pic.src = "images/numbers/20.png";
      break;
    default:
      break;
  }
}
/****************
 * MATH SECTION *
 ****************/
