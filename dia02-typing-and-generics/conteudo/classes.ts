interface Person{
  name: string;
  birthDate: Date; //o tipo Date está presente no TypeScript assim como no JavaScript
  eyeColor: EyeColor; //  na cor dos olhos usamos uma Enum com valores pré definidos
  speak(): void;
  eat(): void;
  walk(): string;
}

enum EyeColor {
  Black = "Pretos",
  Blue = "Azuis",
  Green = "Verdes",
  Brown = "Castanhos",
};

// usamos a palavra reservada class para definir uma classe

class Person {
  // aprenderemos mais sobre o construtor no próximo bloco
  // considere-o como uma função utilizada para construir um objeto a partir da classe
  // nele recebemos todos os dados necessários para construir um objeto de pessoa

  constructor(name: string, birthDate: Date, eyeColor: EyeColor) {
    // usamos o this para acessar as propriedades da instância da classe
    // ele representa a própria instância que estamos criando
    // atribuimos o valor do parâmetro recebido a propriedade da instância da classe
    this.name = name;
    this.birthDate = birthDate;
    this.eyeColor = eyeColor;
  }

  speak(): void {
    console.log(`${this.name} está falando`);
  }

  eat(): void {
    console.log(`${this.name} está comendo`);
  };

  walk(): string {
    return `${this.name} está caminhando`
  }
}

const person1 = new Person("Jane Doe", new Date("1986-01-01"), EyeColor.Blue);
const person2 = new Person("Jon Doe", new Date("1980-08-05"), EyeColor.Black);

console.log(person1);
console.log(person1.walk())



