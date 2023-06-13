// Create two students
var student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York",
};
var student2 = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles",
};
// Create an array of students
var studentsList = [student1, student2];
// Render a table and append rows for each student in the array
var table = document.createElement("table");
// Create the table header
var headerRow = table.insertRow();
var headerCell1 = headerRow.insertCell();
var headerCell2 = headerRow.insertCell();
headerCell1.textContent = "First Name";
headerCell2.textContent = "Location";
// Create a row for each student
studentsList.forEach(function (student) {
    var row = table.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});
// Append the table to the body
document.body.appendChild(table);
