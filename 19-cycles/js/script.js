// 1. Имеется массив из 20 чисел. Вывести на экран только четные числа из массива

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15, 16, 17, 18, 19, 20, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21];
// for (let i = 0; i < array.length; i++) {
//   if (array[i]%2 == 0) {
//     console.log(`${array[i]} четное число`)
//   } 
// }




// 2.Имеется массив строк с 10 элементами. Вывести на экран самое длинное слово из массива

// let words = ["book", "red", "dog", "horse", "python", "computer", "curtain", "laborghini", "mercedes", "lexus"];
// let max = words[0];
// for (let word of words) {
//   if (word.length > max.length) {
//     max = word;
//   }
// }
// console.log(max);




// 3. Массовое удаление. Имеется массив, который содержит имена 15 пользователей. Необходимо удалить всех пользователей. При удалении каждого пользователя нужно выводить сообщения:
//     «Удаляю пользователя Иван»
//     «Удаляю пользователя Вася»

// let usersName = ["Almaz", "Bektur", "Alymbek", "Meder", "Talant", "Medina", "Bakai", "Shirin", "Altynbek", "Sharip", "Gleb", "Seit", "Samak", "Bekbolsun", "Timur"];
// for (let i = 0; i < usersName.length; i++) {
//   console.log(`Удаляю пользователя: ${usersName[i]}`)
// };




// 1. Строка называется палиндромом, если она пишется одинаково в обоих
// направлениях. Например, палиндромами в английском языке являются
// слова «anna», «civic», «level», «hannah». Напишите программу, запраши-
// вающую у пользователя строку и при помощи цикла определяющую, яв-
// ляется ли она палиндромом.

// let userInput = prompt("Type palindrome: ")
// userInput = userInput.toLowerCase().replace(/\s/g, '');
// let isPalindrome = true;

// for (let i = 0; i < userInput.length / 2 && isPalindrome; i++) {
//   if (userInput[i] !== userInput[userInput.length - i - 1]) {
//     isPalindrome = false;
//   }
// }

// isPalindrome ? document.write("Palindrome") : document.write("Not a palindrome");





// 2. Вывести таблицу умножения от 0 до 10

for (let i = 0; i <= 10; i++) {
  for (let j = 1; j <=10; j++) {
    document.write(j + " * " + i + " = " + (j*i) + "<br>")
  }
}