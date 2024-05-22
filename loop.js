const numbers = [12, 54, 23, 56, 58, 45];
for (const number of numbers) {
  // console.log(number);
}

const bottle = { color: "Yellow", price: 100, isCleaned: true, capacity: 1 };
// const key = Object.keys(bottle);
// for (const keys of key) {
//    console.log(keys);
//   console.log(key, bottle[keys]);
// }
// console.log(key);

// for (const key in bottle) {
//   console.log(key, bottle[key]);
// }

const keys = Object.entries(bottle);
// console.log(keys);
for (const [key, value] of Object.entries(bottle)) {
  console.log(key, value);
}
