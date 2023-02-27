const student = {
  name: "Aziz",
  money: 10000,
  study: "Science",
  subject: ["Math", "Physics", "Chemistry"],
  exam: function () {
    return this.name + " is studying Math";
  },
  improveExam: function (subject) {
    this.exam();
    return this.name + " is taking " + subject + " improvement exam";
  },
  treatDey: function (expense) {
    this.money = this.money - expense;
    return this.name + " has " + this.money + " taka left";
  }
};

const result = student.exam();
console.log(result);

const newStudent = {
    name: 'Aziz Chy',
    money: 20000,
}
const newResult = student.exam.call(newStudent);
console.log(newResult);

// borrow method: call
const newStudentMoney = student.treatDey.call(newStudent, 5000);
console.log(newStudentMoney);

// borrow method: apply
const newStudentMoney2 = student.treatDey.apply(newStudent, [8000]);
console.log(newStudentMoney2);

// borrow method: bind
const newStudentMoney3 = student.treatDey.bind(newStudent);
const remainingMoney = newStudentMoney3(1000);
console.log(remainingMoney);


