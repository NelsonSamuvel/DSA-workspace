const students = ["John", "Nick", "Tom", "Peter", "Clint"];

const findStudent = (students, studentName) => {
  let result = "";
  for (const student of students) {
    if (student.toLowerCase() === studentName.toLowerCase()) {
      result = student;
    }
  }

  return result;
};

const res = findStudent(students, "peter");
if (res) {
  console.log("Student Name: " + res);
} else {
  console.log("No student found");
}
