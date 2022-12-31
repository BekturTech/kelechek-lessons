// let roomLength = prompt("Length: ");
// let roomWidth = prompt("Height: ");
// let sumSquare = roomLength * roomWidth;
// document.write(`Square room: ${ sumSquare.toFixed()}` + "<br>");


// let gardenLength = prompt("Length in feet: ");
// let gardenWidth = prompt("Width in feet: ");
// let garderSquare = gardenLength * gardenWidth * 43560;
// document.write(`Garder square in acres is: ${garderSquare}` + "<br>");


// let littleBottle = prompt("Bottle < 1 liter = 0.10$: ");
// let bigBottle = prompt("Bottle > 1 liter = 0.25$: ");
// let bottleSum = littleBottle * 0.10 + bigBottle * 0.25;
// document.write(`You will get: ${bottleSum.toFixed(2)}$` + "<br>");


// let userOrder = prompt("Sum of your order: ");
// let userTips = userOrder * 18 / 100;
// let userTax = userTips * 5 / 100;
// document.write(`Tips: ${userTips} <br> Tax: ${userTax} <br> Total: ${userOrder - userTips - userTax.toFixed(2)}$` + "<br>");


// let userNumber = prompt("Type any number: ");
// let sum = (userNumber * (userNumber + 1)) / 2;;
// document.write(sum) + "<br>";


// let souvenir = prompt("How much souvenir you have? 1 souvenir = 75g: ");
// let bauble = prompt("How much bauble you have? 1 bauble = 122g: ");
// let sumToys = (souvenir * 75 + bauble * 122) / 1000;
// document.write(`Total weight ${sumToys}kg`) + "<br>";


let userDeposit = + prompt("You're deposit: ");
let fisrtYear = (userDeposit * 4 / 100 + userDeposit);
let secondYear = (fisrtYear * 4 / 100) + fisrtYear;
let thirdtYear = (secondYear * 4 / 100) + secondYear;
document.write(`You're deposit: ${userDeposit}$<br> You're deposit after 1 year: ${fisrtYear.toFixed(2)}$<br> You're deposit after 2 years ${secondYear.toFixed(2)}$<br> You're deposit after 3 years ${thirdtYear.toFixed(2)}$` + "<br>");



// let a = prompt("Type first number: ");
// let b = prompt("Type second number: ");
// document.write(a + b + "<br>");
// document.write(a - b + "<br>");
// document.write(a * b + "<br>");
// document.write(a / b + "<br>");
// document.write(a % b + "<br>");
// document.write(a ** b + "<br>");