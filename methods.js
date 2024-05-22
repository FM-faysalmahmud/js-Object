const student = {
  name: "Kodom Ali",
  money: 5000,
  study: "Computer Science",
  subjects: ["Operating System", "Java", "Compiler Design"],
  exam: function () {
    return this.name + " is a participating exam";
  },
  improveExam: function (subject) {
    this.exam();
    return `${this.name}is takeing improvement exam on ${subject}`;
  },
  treatDey: function (amount, tips) {
    this.money = this.money - amount - tips;
    return this.money;
  },
};

const output = student.exam();
const reExam = student.improveExam("java");
const remaining = student.treatDey(1000, 100);
console.log(reExam);
