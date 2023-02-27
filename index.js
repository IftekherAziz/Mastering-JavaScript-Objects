// this is a global exucution context
// console.log(this);

const kodomAli = {
  name: "Kodom Ali",
  money: 10000,
  study: "Science",
  subject: ["Math", "Physics", "Chemistry"],
  exam: function () {
    console.log(this);
    return this.name + " is studying Math";
  },
  examArrow: () => {
    console.log(this);
    return this.name + " is studying Physics";
  },
  examNested: () => {
    const arrow = () => {
    console.log(this);
    };
    arrow();
  },
  improveExam: function (subject) {
    this.exam();
    return this.name + " is taking " + subject + " improvement exam";
  },
  treatDey: function (expense) {
    this.money = this.money - expense;
    return this.name + " has " + this.money + " taka left";
  },
};
kodomAli.exam();
kodomAli.examArrow();
kodomAli.examNested();

const badamAli = {
  name: "Badam Ali",
  money: 20000,
};

badamAli.exam = kodomAli.exam;
badamAli.exam();

function clickHandler() {
  console.log('Inside click handler',this);
}

const button = document.getElementById("btn-click").addEventListener('click',function(){
    console.log('Inside Button listener',this);
});

