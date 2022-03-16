// boolean: true ou false
let yes: boolean = true;
let no: boolean = false;

// number: int, float, hex, octal, binary, etc... Todos os valores numéricos aceitos no JavaScript
let int: number = 11;
let float = 123.456;
let hex: number = 0xb; // número onze em hexadecimal
let octal = 0o13; // número onze em octal
let binary = 0b1011; // número onze em binário

// string: "string", "string", `string`
let hello = "Hello"
let world = "World"
let message: string = `${hello}, ${world}!`

// void: sem retorno, utilizado em funções
function sayHelloWorld(): void {
  console.log("Hello World!");
}

// null e undefined: respectivamente nulo e indefinido
const valueNull = null
const valueUndefined = undefined