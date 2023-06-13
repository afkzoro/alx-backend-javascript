/* eslint-disable */
import fs from 'fs';

const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        reject(error);
      } else {
        const lines = data.trim().split('\n').slice(1);
        const studentsByField = {};

        for (const line of lines) {
          const [firstname, lastname, age, field] = line.split(',');
          if (field in studentsByField) {
            studentsByField[field].push(firstname);
          } else {
            studentsByField[field] = [firstname];
          }
        }

        resolve(studentsByField);
      }
    });
  });
};

export { readDatabase };
