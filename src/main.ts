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

carImport.VIN = "asdadadadsa";
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
