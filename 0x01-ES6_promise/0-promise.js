async function getResponseFromAPI() {
  const abc = 3;
  try {
    await abc;
  } catch (error) {
    console.log("abc doesn't exist", error);
  }
}
