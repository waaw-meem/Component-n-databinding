export class MyCustomType {
    constructor(public name: string, public age: number) {}
  
    displayInfo(): string {
      return `${this.name} is ${this.age} years old.`;
    }
  }
  