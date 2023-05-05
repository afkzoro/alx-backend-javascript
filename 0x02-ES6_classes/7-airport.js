/* eslint-disable */
export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
   return `Airport [${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
  }

  get code() {
    return this._code;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
