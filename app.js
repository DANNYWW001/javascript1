if (true) {
  console.log("Hello world");
}

const age = 25;
if (age >= 18) {
  console.log("YOU ARE ELIGIBLE TO VOTE");
}

const password = "dhurtydgy";
if (password.length >= 9) {
  console.log("Password is strong");
}

if (false) {
  console.log("hello class");
} else {
  console.log("goodbye class");
}

if (password.length >= 9) {
  console.log("password is strong");
} else {
  console.log("password is weak");
}

let balance = 200000;
let amount = 300000;

if (amount <= balance) {
  console.log("transaction succeful");
} else {
  console.log("insufficeint funds");
}

const userPin = 7000;
const enteredPin = 7008;

if (enteredPin === userPin) {
  console.log("PIN IS CORRECT");
} else {
  console.log("INCCORRECT PIN");
}

const email = "lekandaniel@gmail.com";
if (email.includes("@")) {
  console.log("VALID EMAIL");
} else {
  console.log("INVALID EMAIL");
}

let score = 60;
const passMark = 50;

if (score >= passMark) {
  console.log("PASSED");
} else {
  console.log("FAILED");
}

let number = -5;

if (number > 0) {
  console.log("POSITIVE");
} else {
  console.log("NEGATIVE");
}

const num1 = 50;
const num2 = 5786757;

if (num1 > num2) {
  console.log(`${num1} is greater than ${num2}`);
} else {
  console.log(`${num2} is greater than ${num1}`);
}

let numbr = 849;

if (numbr % 2 === 0) {
    console.log("even");
}else {
    console.log("odd");
}

const purchaseAmount = 30

if (purchaseAmount > 100) {
    console.log("ELIGIBLE");
}else {
    console.log("NOT ELIGIBLE");
}

let teamaScore1 = 54;
let teamaScore2 = 56;
let teamaScore3 = 78;

let teambScore1 = 67;
let teambScore2 = 60;
let teambScore3 = 82;

let totalA = teamaScore1 + teamaScore2 + teamaScore3

let average1 = totalA / 3
console.log(average1);


let totalB = teambScore1 + teambScore2 + teambScore3

let average2 = totalB / 3
console.log(average2);

const TeamA = "Team A"
const averageA = 62.67;

console.log(`${TeamA} has an average score of ${averageA}`);

const TeamB = "Team B";
let averageB = 69.67;

console.log(`${TeamB} has an average score of ${averageB}`);

if (averageA > averageB) {
    console.log("Team A wins");
}else {
    console.log("Team B wins");
}

let timeOfDay = 13;
if (timeOfDay > 10 && timeOfDay < 16) {
    console.log("You should be in class");
}else {
    console.log("Be at home");
}

  