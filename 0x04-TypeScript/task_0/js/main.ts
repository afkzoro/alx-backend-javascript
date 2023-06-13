// Define the Student interface
interface Student {
 firstName: string;
 lastName: string;
 age: number;
 location: string;
}

// Create two students
const student1: Student = {
 firstName: "John",
 lastName: "Doe",
 age: 20,
 location: "New York",
};

const student2: Student = {
 firstName: "Jane",
 lastName: "Smith",
 age: 22,
 location: "Los Angeles",
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Render a table and append rows for each student in the array
const table = document.createElement("table");

// Create the table header
const headerRow = table.insertRow();
const headerCell1 = headerRow.insertCell();
const headerCell2 = headerRow.insertCell();
headerCell1.textContent = "First Name";
headerCell2.textContent = "Location";

// Create a row for each student
studentsList.forEach((student) => {
 const row = table.insertRow();
 const cell1 = row.insertCell();
 const cell2 = row.insertCell();
 cell1.textContent = student.firstName;
 cell2.textContent = student.location;
});

// Append the table to the body
document.body.appendChild(table);
