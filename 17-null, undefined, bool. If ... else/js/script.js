/*В переменную lang нужно получить данные от пользователя если пользователь введет “ru” нужно приветствовать его на русском если “ky” на кыргызском если будет другое значение нужно вывести сообщение “Я не знаю такого языка”*/

// let lang = prompt("eng or ky");
// if (lang == "eng") {
//   alert("Hello");
// } else if (lang == "ky") {
//   alert("Салам")
// } else {
//   alert("Error")
// }


/*2.Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.*/

// let checkWord = "abcde";
// if (checkWord[0] == "a") {
//   alert("Yes");
// } else {
//   alert("No");
// }


/*3.Дано число с цифрами, например, 12345. Проверьте, что первая цифра числа 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.*/

// let num = '123';
// num[0] === '1' || num[0] === '2' ||num[0] === '3' ? alert("Yes") : alert("No"); 


/*1.Определяем и выводим на экран информацию о том, четное введенное число или нечетное*/

// let evenNum = prompt("Enter the number");
// if (Number.isInteger( evenNum / 2)) {
//   alert("It's a even num");
// } else {
//   alert("It's a odd num");
// }


/*2.Пользователь вводит название месяца исходя из введенного названия месяца нужно вывести сообщение с названием времени года. 
    
    Например:
    
    **Пользователь:** январь
    
    **Компьютер:** это зима*/

// let userMonth = prompt("Enter the month: ");
// userMonth = userMonth.toLowerCase();
// if (userMonth === "june" || userMonth === "july" || userMonth === "august") {
//   alert("Summer");
// } else if (userMonth === "september" || userMonth === "october" || userMonth === "november") {
//   alert("Autumn");
// } else if (userMonth === "december" || userMonth === "january" || userMonth === "february") {
//   alert("Winter");
// } else if (userMonth === "march" || userMonth === "april" || userMonth === "may") {
//   alert("Spring");
// } else {
//   alert("There is no such month");
// }


/*3. Определяем животное, ассоциированное с введенным годом в китайском гороскопе
    
    Например:
    
    **Пользователь**: 2021
    
    **Компьютер**: Бык*/
   
let year = Number(prompt("Введите год"));

if (year % 12 === 0) {
  Document.write("Обезьяна");
} else if (year % 12 === 1) {
  document.write("Петух");
} else if (year % 12 === 2) {
  document.write("Собака");
} else if (year % 12 === 3) {
  document.write("Свинья");
} else if (year % 12 === 4) {
  document.write("Крыса");
} else if (year % 12 === 5) {
  document.write("Бык");
} else if (year % 12 === 6) {
  document.write("Тигр");
} else if (year % 12 === 7) {
  document.write("Кролик");
} else if (year % 12 === 8) {
  document.write("Дракон");
} else if (year % 12 === 9) {
  document.write("Змея");
} else if (year % 12 === 10) {
  document.write("Лошадь");
} else if (year % 12 === 11) {
  document.write("Коза");
}