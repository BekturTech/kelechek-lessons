let userName1 = prompt("Write your name");
document.write(`Hello, ${userName1.trim()}!` + "<br>");

let chempionTeam = prompt("Write your favourite soccer team");
document.write(`${chempionTeam.toLocaleUpperCase()} it's chempion` + "<br>");

let cardNumber = prompt("Write your credit card");
document.write(`${cardNumber.substring(11, 15)} last number of your card` + "<br>");



let userName = "iVAN";
document.write(userName.replace("iVAN", "Ivan") + "<br>");

let userCoast = "$120";
document.write(`${userCoast.slice(1, 4)}` + "<br>");

let aiQuestion1 = prompt("Hello, I am AI, what's your name?");
let aiQuestion2 = prompt(`Nice to meet you, ${aiQuestion1}. How old are you?`);
let aiQuestion3 = alert(`Wow!, you are ${aiQuestion2}`);

let userPutUserCard = prompt("Type you'r credit card");
document.write(`You'r card ${userPutUserCard.replace(userPutUserCard.slice(0, -4), "***********")}`);

