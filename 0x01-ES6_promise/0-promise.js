function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 1.7) {
      resolve();
    } else {
      reject();
    }
  });
}
