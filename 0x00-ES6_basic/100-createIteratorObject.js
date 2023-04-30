export default function createIteratorObject(report) {
  for (const key in report) {
    return report[key].forEach(element => element);
  }
}
