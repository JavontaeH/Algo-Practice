function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
// function that returns the first occurance of the array generated twice.
const picker = (arr) => {
  let chosen = [];
  let picked = false;
  while (picked !== true) {
    let name = arr[getRandomInt(arr.length - 1)];
    if (chosen.find((char) => char === name) !== undefined) {
      picked === true;
      return name;
    } else {
      chosen.push(name);
    }
  }
};

let names = [
  "nago",
  "ky",
  "chipp",
  "millia",
  "test",
  "sol",
  "chaos",
  "baiken",
  "leo",
  "axl",
  "ram",
  "gold",
  "brisket",
];
console.log(picker(names));
