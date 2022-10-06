function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
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

console.log(picker(names));
