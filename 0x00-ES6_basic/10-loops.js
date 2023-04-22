export default function appendToEachArrayValue(array, appendString) {
  const topArray = [];
  for (const idx of array) {
    let value = idx;

    value = appendString + value;
    topArray.push(value);
  }

  return topArray;
}
