/* eslint-disable */
const fs = require("fs");

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, "utf8");
    const lines = data.split("\n");
    const students = lines.filter((line) => line.trim() !== "" && line.includes(","));
    const fields = new Map();

    for (const student of students) {
      const [firstname, lastname, age, field] = student.split(",");
      if (fields.has(field)) {
        fields.get(field).push(firstname);
      } else {
        fields.set(field, [firstname]);
      }
    }

    const numberOfStudents = students.length;
    console.log(`Number of students: ${numberOfStudents}`);

    for (const [field, students] of fields.entries()) {
      const numberOfStudentsInField = students.length;
      const studentList = students.join(", ");
      console.log(`Number of students in ${field}: ${numberOfStudentsInField}. List: ${studentList}`);
    }
  } catch (error) {
    throw new Error("Cannot load the database");
  }
}

module.exports = countStudents;
