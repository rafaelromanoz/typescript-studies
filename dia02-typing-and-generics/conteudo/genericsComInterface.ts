interface ProcessIdentity<T, U> {
  (value: T, message: U): T;
}

function processIdentity<T, U>(value: T, message: U): T {
  console.log(message);
  return value
}

let processor: ProcessIdentity<number, string> = processIdentity;
let returnNumber = processor(100, "Olá");
let returnString = processor("Olá", 100); // Type check error: Argument of type "string" is not assignable to parameter of type "number".

class ProcessIdentity<T, U> {
  _value: T;
  _message: U;
  constructor(value: T, message: U) {
    this._value = value;
    this._message = message;
  }
  getIdentity(): T {
    console.log(this._message);
    return this._value
  }
}

let processor = new ProcessIdentity<number, string>(100, "Olá");
processor.getIdentity();  // imprime "Olá" e retorna 100