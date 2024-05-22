const kodomAli = {
  name: "kodom ali",
  money: 500,
  study: "Math",
  subject: ["english", "bangla", "political science", "Ict"],
  exam: function () {
    return this.name + " is participating in an exam";
  },
  improveExam: function (subjects) {
    this.exam();
    return `${this.name} is takeing improvement on exam ${subjects}`;
  },
  treatDey: function (amount, tips) {
    this.money = this.money - amount - tips;
    return this.money;
  },
};

const exam = kodomAli.exam();
const remaining = kodomAli.treatDey(100, 50);
const subject = kodomAli.improveExam("bangla");
console.log(remaining);

const badam = {
  name: "Kacha Badam",
  money: 1000,
};

const result = kodomAli.exam.call(badam);
const badamMoney = kodomAli.treatDey.call(badam, 50, 50);
const badamMoney2 = kodomAli.treatDey.apply(badam, [100, 50]);
console.log(badamMoney2);
