/* eslint-disable */
import express from 'express';
import routes from './routes';

const app = express();
const port = 1245;
let databaseFilename;

// Retrieve the database filename from command line arguments
if (process.argv.length > 2) {
  databaseFilename = process.argv[2];
}

// Set the database filename as a property on the request object
app.use((req, res, next) => {
  req.databaseFilename = databaseFilename;
  next();
});

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
