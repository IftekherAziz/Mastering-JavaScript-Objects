const student = {
    name: 'Aziz',
    money: 10000,
    study: 'Science',
    subject:['Math', 'Physics', 'Chemistry'],
    exam: function() {
        // console.log(this.name, 'is studying Math'); 
        return this.name + ' is studying Math';
    },
    improveExam: function(subject) {
        this.exam ();
        return this.name + ' is taking ' + subject + ' improvement exam';
    },
    treatDey: function(expense) {
        this.money = this.money - expense;
        return this.name + ' has ' + this.money + ' taka left';
    }

}
const output = student.exam();
// console.log(output);

const output2 = student.improveExam('Physics');
// console.log(output2);

const remaining = student.treatDey(500);
console.log(remaining);

