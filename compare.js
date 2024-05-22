// const third = second;
// if (third === second) {
//   console.log("same");
// } else {
//   console.log("different");
// }

const first = { a: 1, b: 2, c: 3, g: 9 };
const second = { a: 1, b: 2, c: 3, g: 9 };

function compareObject(first, second) {
  const firstString = Object.keys(first);
  const secondString = Object.keys(second);
  if (firstString.length === secondString.length) {
    for (const key of firstString) {
      if (first[key] !== second[key]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

const isSame = compareObject(first, second);
console.log(isSame);
