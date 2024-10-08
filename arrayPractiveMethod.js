const students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 90 },
  { name: "Charlie", age: 21, grade: 78 },
  { name: "Diana", age: 23, grade: 95 },
];
students.forEach((student) => console.log(student.name, student.grade));
// 1. Log each student’s name and grade
const topStudents = students.filter((asd) => asd.grade > 80);
console.log(topStudents);

const youngStudents = students.filter((young) => young.age <= 21);
console.log(youngStudents);

const topStudentsNames = students.filter(
  (topStudents) => topStudents.grade > 80
);
topStudents.forEach((student) => console.log(student.name));

youngStudents.forEach((student) => console.log(student.name));
