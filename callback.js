function greeting(greetingHandler, name) {
  greetingHandler(name);
}

function greetingHandler(name) {
  console.log("hello world", name);
}

function greetingEvening(name) {
  console.log("Good Evening", name);
}

function greetingAfterNoon(time) {
  console.log("Good Afternoon", time);
}
greeting(greetingHandler, "Tom Hanks");
greeting(greetingHandler, "Tom Brady");
greeting(greetingHandler, "Tom Cruise");
greeting(greetingEvening, "Tom Soliman");
greeting(greetingAfterNoon, 12.27);

// const name = greeting("faysal");
// console.log(name);
