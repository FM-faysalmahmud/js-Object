const bottle = { color: "Yellow", price: 100, isCleaned: true, capacity: 1 };
const keys = Object.keys(bottle);
const values = Object.values(bottle);
const pair = Object.entries(bottle);
delete bottle.isCleaned;
console.log(bottle);
// console.log(keys);
// console.log(pair);
