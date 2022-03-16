interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}

interface Teacher extends Employee {
  firstName: string;
  lastName: string;
  subject: string;
  fullName(): string;
  sayHello(): string;
}

let employee: Employee = {
  firstName: "Rafael",
  lastName: "Romano",
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let teacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  subject: "Matemática",
  fullName(): string {
    return this.firstName + " " + this.lastName;
  },
  sayHello(): string {
    return `Olá, eu sou ${this.fullName()} e leciono ${this.subject}`;
  }
}