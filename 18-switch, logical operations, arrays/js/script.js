// 1.Разработайте программу, запрашивающую у пользователя букву латинского алфавита. Если введенная буква входит в следующий список (a, e, i, o или u), необходимо вывести сообщение о том, что эта буква гласная. Если была введена буква y, программа должна написать, что эта буква может быть как гласной, так и согласной. Во всех других случаях должно выводиться сообщение о том, что введена согласная буква.

// let userLetter = prompt("Enter a, e, i, o, u and y: ");
// switch(userLetter){
//   case "a":
//     console.log("This is vowel");
//     break;
//   case "e":
//     console.log("This is vowel");
//     break;
//   case "i":
//     console.log("This is vowel");
//     break;
//   case "o":
//     console.log("This is vowel");
//     break;
//   case "u":
//     console.log("This is vowel");
//     break;
//   case "y":
//     console.log("This is vowel and consonant");
//     break;
//   default:
//     console.log("This is consonant");
// }




//2. Напишите программу, запрашивающую у пользователя три целых числа и выводящую их в упорядоченном виде – по возрастанию.

// let sortNumber = [23, 1, 3, 6, 2, 55, 22, 19, 223, 414, 122, 232]
// sortNumber.sort((a, b) => a - b);
// console.log(sortNumber);




// 3.  Создайте программу, в которой пользователь будет вводить уровень шума в децибелах. Если введенное им значение будет в точности совпадать с одним из значений в приведенной таблице, необходимо вывести, чему соответствует указанный уровень громкости. Если значение попадет между уровнями в таблице, нужно сообщить, между какими именно. Также программа должна выдавать корректные сообщения, в случае если введенное пользователем значение окажется ниже минимального или больше максимального.

// let userEnterDb = +prompt("Введите уровень шума в децибелах: ");
// if (userEnterDb < "40") {
//   console.log("Very quiet");
// } else if (userEnterDb === 40) {
//   console.log("Quiet room");
// } else if (userEnterDb > "40" && userEnterDb < "70") {
//   console.log("Between room and alarm clock")
// } else if (userEnterDb === 70) {
//   console.log("Alarm");
// } else if (userEnterDb > "70" && userEnterDb < "106") {
//   console.log("Betweem alarm and gas lawn mower"); 
// } else if (userEnterDb === 106) {
//   console.log("Gas lawn mower");  
// } else if (userEnterDb > "106" && userEnterDb < "130") {
//   console.log("Between gas lawn mower and jackhammer") 
// } else if (userEnterDb === 130) {
//   console.log("Jackhammer");
// } else if (userEnterDb > 130) {
//   console.log("Very loud");
// } 




// 2.Напишите программу, которая будет запрашивать у пользователя номинал банкноты и отображать на экране имя деятеля, портрет которого размещен на соответствующем денежном знаке. Если банкноты введенного номинала не существует, должно выводиться сообщение об ошибке.

// let enterUserBanknote = prompt("Enter any banknote: $");
// switch (enterUserBanknote) {
//   case "1":
//     console.log("Джордж Вашингтон");
//     break;
//   case "2":
//     console.log("Томас Джефферсон");
//     break;
//   case "5":
//     console.log("Авраам Линкольн");
//     break;
//   case "10":
//     console.log("Александр Гамильтон");
//     break;
//   case "20":
//     console.log("Эндрю Джексон");
//     break;
//   case "50":
//     console.log("Улисс Грант");
//     break;
//   case "100":
//     console.log("Бенджамин Франклин");
//     break;
//   default:
//     console.log("Такого банкота не существует!");
// } 




// 3. Разработайте программу, принимающую на вход дату и выводящую на экран дату, следующую за ней. Например, если пользователь введет дату, соответствующую 18 ноября 2019 года, на экран должен быть выведен следующий день, то есть 19 ноября 2019 года. Если входная дата будет представлять 30 ноября, то на выходе мы должны получить 1 декабря. И наконец, если ввести последний день года – 31 декабря 2019-го, пользователь должен увидеть на экране дату 1 января 2020-го. Дату пользователь должен вводить в три этапа: год, месяц и день. Убедитесь, что ваша программа корректно обрабатывает високосные годы.

let userDay = 29;
let userMonth = "february";
let userYear = 2020;

let outputDate;
let outputMonth;
let outputYear = userYear;

switch (userMonth) {
  case "february":
    if (userYear % 4 === 0 && userDay === 29) {
      outputDate = 1;
      outputMonth = "march";
    } else if (userYear % 4 !== 0 && userDay === 28) {
      outputDate = 1;
      outputMonth = "march";
    } else {
      outputDate = userDay + 1;
      outputMonth = userMonth;
    }
    break;
  case "january":
    if (userDay === 31) {
      outputDate = 1;
      outputMonth = "february";
    } else {
      outputDate = userDay + 1;
      outputMonth = userMonth;
    }
    break;
  case "march":
    if (userDay === 31) {
      outputDate = 1;
      outputMonth = "april";
    } else {
      outputDate = userDay + 1;
      outputMonth = userMonth;
    }
    break;
  case "july":
    if (userDay === 31) {
      outputDate = 1;
      outputMonth = "august";
    } else {
      outputDate = userDay + 1;
      outputMonth = userMonth;
    }
    break;
  case "august":
    if (userDay === 31) {
      outputDate = 1;
      outputMonth = "september";
    } else {
      outputDate = userDay + 1;
      outputMonth = userMonth;
    }
    break;
  case "october":
    if (userDay === 31) {
      outputDate = 1;
      outputMonth = "november";
    } else {
      outputDate = userDay + 1;
      outputMonth = userMonth;
    }
    break;
  case "december":
    if (userDay === 31) {
      outputDate = 1;
      outputMonth = "january";
      outputYear = userYear + 1;
    } else {
      outputDate = userDay + 1;
      outputMonth = userMonth;
    }
    break;
  default:
    outputDate = userDay + 1;
    outputMonth = userMonth;
    break;
}

let message = `Следующая дата: ${outputDate} ${outputMonth} ${outputYear}`;

document.write(message);