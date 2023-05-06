/* eslint-disable */
const weakMap = new WeakMap();

export default function queryAPI(endpoint) {
  let count = weakMap.get(endpoint) || 0;
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }

  count++;
  weakMap.set(endpoint, count);

  // API call implementation goes here
  // ...

  return `API called for endpoint: ${JSON.stringify(endpoint)}`;
}
