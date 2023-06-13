/* eslint-disable */
const express = require("express");
const countStudents = require("./3-read_file_async");

const app = express();
const port = 1245;

app.get("/", (req, res) => {
  res.send("Hello Holberton School!\n");
});

app.get("/students", (req, res) => {

  const databasePath = "database.csv";

  countStudents(databasePath)
    .then((output) => {
     const responseText = `This is the list of our students:\n${output}`;
     console.log(responseText); // Optional: Print the response to the console
     res.send(responseText);
    })
    .catch((error) => {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
