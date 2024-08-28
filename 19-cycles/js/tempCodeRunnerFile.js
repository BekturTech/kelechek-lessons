
let words = ["book", "red", "dog", "horse", "python", "computer", "curtain", "laborghini", "mercedes", "lexus"];
let max = words[0];
for (let word of words) {
  if (word.length > max.length) {
    max = word;
  }
}
console.log(max);
