/* eslint-disable */
const fs = require("fs");

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (error, data) => {
      if (error) {
        reject(new Error("Cannot load the database"));
      } else {
        const lines = data.split("\n").filter((line, index) => index !== 0 && line.trim() !== "" && line.includes(","));
        const fields = new Map();

        for (const line of lines) {
          const [firstname, lastname, age, field] = line.split(",");
          if (fields.has(field)) {
            fields.get(field).push(firstname);
          } else {
            fields.set(field, [firstname]);
          }
        }

        const numberOfStudents = lines.length;
        console.log(`Number of students: ${numberOfStudents}`);

        for (const [field, students] of fields.entries()) {
          const numberOfStudentsInField = students.length;
          const studentList = students.join(", ");
          console.log(`Number of students in ${field}: ${numberOfStudentsInField}. List: ${studentList}`);
        }

        resolve();
      }
    });
  });
}

module.exports = countStudents;
