/* eslint-disable */
import signUpUser from './4-user-promise';
import { uploadPhoto } from './utils';

function handleProfileSignup(firstName, lastName, fileName) {
  const promisesList = [signUpUser(firstName, lastName), uploadPhoto(fileName)];

  return Promise.allSettled(promisesList)
    .then((results) => {
      return results.map((result) => {
        return { status: result.status, value: result.value };
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
