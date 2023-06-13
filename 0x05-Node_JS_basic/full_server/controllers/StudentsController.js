/* eslint-disable */
import { readDatabase } from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase('database.csv')
      .then((studentsPerFields) => {
        response.status(200).send(formatStudentsList(studentsPerFields));
      })
      .catch((error) => {
        response.status(500).send(`Cannot load the database: ${error.message}`);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.query;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase('database.csv')
      .then((studentsPerFields) => {
        const studentsInMajor = studentsPerFields[major] || [];
        const studentList = studentsInMajor.join(', ');

        response.status(200).send(`List: ${studentList}`);
      })
      .catch((error) => {
        response.status(500).send(`Cannot load the database: ${error.message}`);
      });
  }
}

export default StudentsController;

