//1. Создать массив из 15 объектов с постами для сайта блога с ключами title, и author. Необходимо перебрать массив и вывести название поста в теге h3, и автора в теге p

// const posts = [
//   { title: "First Post", author: "John Doe" },
//   { title: "Second Post", author: "Jane Smith" },
//   { title: "Third Post", author: "Bob Johnson" },
//   { title: "Fourth Post", author: "Samantha Williams" },
//   { title: "Fifth Post", author: "Michael Brown" },
//   { title: "Sixth Post", author: "Emily Davis" },
//   { title: "Seventh Post", author: "Matthew Miller" },
//   { title: "Eighth Post", author: "Olivia Wilson" },
//   { title: "Ninth Post", author: "David Anderson" },
//   { title: "Tenth Post", author: "Jessica Thompson" },
//   { title: "Eleventh Post", author: "William Moore" },
//   { title: "Twelfth Post", author: "Ashley Taylor" },
//   { title: "Thirteenth Post", author: "Michael Anderson" },
//   { title: "Fourteenth Post", author: "Sarah Thomas" },
//   { title: "Fifteenth Post", author: "Brandon Jackson" }
// ];

// for (let i = 0; i < posts.length; i++) {
//   document.write(`<h3>${posts[i].title}:</h3>` + `<p>${posts[i].title}</p>`)
// };







// 2. Имеется массив имен, необходимо перебрать массив и все имена из массива нужно перенести в массив объектов и записать под ключом name.

// const names = ["John", "Jane", "Bob", "Samantha", "Michael"];
// const nameObjects = [];

// for (let i = 0; i < names.length; i++) {
//   const name = names[i];
//   const nameObject = { name: name };
//   nameObjects.push(nameObject);
// }
// console.log(nameObjects);








// 3. Имеется массив объектов с фильмами. У объектов имеются ключи: title (название фильма), director (режиссёр) и duration (длительность в минутах). Необходимо вывести 3 фильма с наиболее длинным хронометражом.

const movies = [
  { title: "The Shawshank Redemption", director: "Frank Darabont", duration: 142 },
  { title: "The Godfather", director: "Francis Ford Coppola", duration: 175 },
  { title: "The Dark Knight", director: "Christopher Nolan", duration: 152 },
  { title: "Pulp Fiction", director: "Quentin Tarantino", duration: 154 },
  { title: "The Lord of the Rings: The Return of the King", director: "Peter Jackson", duration: 201 },
  { title: "The Good, the Bad and the Ugly", director: "Sergio Leone", duration: 161 },
  { title: "Fight Club", director: "David Fincher", duration: 139 },
  { title: "Forrest Gump", director: "Robert Zemeckis", duration: 142 },
  { title: "Inception", director: "Christopher Nolan", duration: 148 },
  { title: "Star Wars: Episode V - The Empire Strikes Back", director: "Irvin Kershner", duration: 124 },
];

const longestMovies = movies.sort((a, b) => b.duration - a.duration).slice(0, 3);

for (let i = 0; i < longestMovies.length; i++) {
console.log(`Title: ${longestMovies[i].title}`);
console.log(`Director: ${longestMovies[i].director}`);
console.log(`Duration: ${longestMovies[i].duration} minutes\n`);
}
