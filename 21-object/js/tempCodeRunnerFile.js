const names = ["John", "Jane", "Bob", "Samantha", "Michael"];
const nameObjects = [];

for (let i = 0; i < names.length; i++) {
  const name = names[i];
  const nameObject = { name: name };
  nameObjects.push(nameObject);
}
console.log(nameObjects);

