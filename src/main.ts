let a: string = "hello";
let b: number = 15;
let c: boolean = true;

// let x: null = null;
// let y: undefined = undefined;

let age: any;

age = 15;
age.toLowerCase();

let name: unknown;
name = 15;

if (typeof name === "string") {
  name.toLowerCase();
}

interface Car {
  readonly VIN: string;
  engine: string;
  color: string;
  weight?: number;
  number: string;
}

const car: Car = {
  VIN: "EH3432h342jJ32kk",
  engine: "v8",
  color: "red",
  weight: 2000,
  number: "AX8472AA",
};

const carImport: Car = {
  VIN: "EH3432h3das21jJd22kk",
  engine: "v12",
  color: "green",
  number: "PL3676XC",
};

// carImport.VIN = "asdadadadsa";
carImport.color = "blue";

interface User {
  name: string;
  email: string;
}

let user: null | User = null;

user = {
  name: "Matfey",
  email: "mmmmm@gmail.com",
};

type Status = "pending" | "rejected" | "fullfield";

let status: Status = "pending";

status = "pending";

status = "rejected";

/// ARR

const arr: number[] = [1, 2, 3];

// const arr1: Array<number> = [1, 2, 3];

const person: (string | number)[] = ["Alona", 35];

type Arr = string | number | boolean | null;

const arr1: Arr[] = ["Alex", true, 24, null];

///

interface User2 {
  name: string;
  age: number;
}

interface Dog {
  color: string;
  breed: string;
}

type ObjArr = User2 | Dog;

const arr2: ObjArr[] = [
  { name: "Ivan", age: 21 },
  { color: "black", breed: "buldog" },
];

/// interface + interface

interface Animal {
  name: string;
  color: string;
}

interface Animal {
  breed: string;
}

const anilmal: Animal = {
  name: "Dog",
  color: "black",
  breed: "shepard",
};

// extends
interface AnimalMax extends Animal {
  size: string;
}

const animal2: AnimalMax = {
  name: "Dog",
  color: "black",
  breed: "shepard",
  size: "M",
};
