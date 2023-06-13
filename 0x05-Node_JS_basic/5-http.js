/* eslint-disable */
const http = require("http");
const countStudents = require("./3-read_file_async");

const app = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello Holberton School!");
  } else if (method === "GET" && url === "/students") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");

    // Replace "database.csv" with the actual path to the database file
    const databasePath = "database.csv";

    countStudents(databasePath)
      .then(() => {
        res.write("This is the list of our students");
        res.end();
      })
      .catch((error) => {
        console.error(error.message);
        res.statusCode = 500;
        res.end("Internal Server Error");
      });
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Not Found");
  }
});

app.listen(1245, () => {
  console.log("Server is running on http://localhost:1245");
});

module.exports = app;
