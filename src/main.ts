// let a: string = "hello";
// let b: number = 15;
// let c: boolean = true;

// // let x: null = null;
// // let y: undefined = undefined;

// let age: any;

// age = 15;
// // age.toLowerCase();

// let name: unknown;
// name = 15;

// if (typeof name === "string") {
//   name.toLowerCase();
// }

// interface Car {
//   readonly VIN: string;
//   engine: string;
//   color: string;
//   weight?: number;
//   number: string;
// }

// const car: Car = {
//   VIN: "EH3432h342jJ32kk",
//   engine: "v8",
//   color: "red",
//   weight: 2000,
//   number: "AX8472AA",
// };

// const carImport: Car = {
//   VIN: "EH3432h3das21jJd22kk",
//   engine: "v12",
//   color: "green",
//   number: "PL3676XC",
// };

// // carImport.VIN = "asdadadadsa";
// carImport.color = "blue";

// interface User {
//   name: string;
//   email: string;
// }

// let user: null | User = null;

// user = {
//   name: "Matfey",
//   email: "mmmmm@gmail.com",
// };

// type Status = "pending" | "rejected" | "fullfield";

// let status: Status = "pending";

// status = "pending";

// status = "rejected";

// /// ARR

// const arr: number[] = [1, 2, 3];

// // const arr1: Array<number> = [1, 2, 3];

// const person: (string | number)[] = ["Alona", 35];

// type Arr = string | number | boolean | null;

// const arr1: Arr[] = ["Alex", true, 24, null];

// ///

// interface User2 {
//   name: string;
//   age: number;
// }

// interface Dog {
//   color: string;
//   breed: string;
// }

// type ObjArr = User2 | Dog;

// const arr2: ObjArr[] = [
//   { name: "Ivan", age: 21 },
//   { color: "black", breed: "buldog" },
// ];

// /// interface + interface

// interface Animal {
//   name: string;
//   color: string;
// }

// interface Animal {
//   breed: string;
// }

// const anilmal: Animal = {
//   name: "Dog",
//   color: "black",
//   breed: "shepard",
// };

// // extends
// interface AnimalMax extends Animal {
//   size: string;
// }

// const animal2: AnimalMax = {
//   name: "Dog",
//   color: "black",
//   breed: "shepard",
//   size: "M",
// };

// /// Functions

// //* 1. Просте додавання чисел
// // Умова:
// // Напиши функцію add, яка приймає два числа та повертає їх суму.

// function add(a: number, b: number): number {
//   return a + b;
// }

// add(2, 3);

// //* 2. Привітання користувача

// // Умова:
// // Функція greetUser приймає ім’я (string) і логічне значення isMorning (boolean).
// // Повертає рядок "Good morning, {name}" якщо isMorning === true, і "Hello, {name}" якщо false.

// function greetUser(name: string, isMorning: boolean): string {
//   return isMorning ? `Good morning, ${name}` : `Hello ${name}`;
// }

// greetUser("Alex", true);

// //* 3. Перевірка числа

// // Умова:
// // Функція isPositive приймає будь-яке значення (unknown) і повертає boolean:

// // true якщо це число > 0,

// // false якщо число ≤ 0 або не число.

// function isPositive(value: unknown): boolean {
//   if (typeof value !== "number") {
//     return false;
//   }
//   return value > 0;
// }

// isPositive(0);
// isPositive("Alex");

// //
// //* 4. Об’єкт користувача

// // Умова:
// // Створи інтерфейс User з полями:

// // name: string

// // age: number

// // email?: string (optional)

// //  Функція getUserSummary приймає об’єкт User та повертає рядок "Name: {name}, Age: {age}, Email: {email}".
// //  Якщо email немає — виводимо "Name: {name}, Age: {age},  Email: N/A".

// interface User3 {
//   name: string;
//   age: number;
//   email?: string;
// }

// function getUserSummary({ name, age, email }: User3): string {
//   // if (email !== undefined) {
//   //   return `Name: ${name}, Age: ${age}, Email: ${email}`;
//   // }
//   const emailPart = email !== undefined ? email : "N/A";
//   return `Name: ${name}, Age: ${age}, Email: ${emailPart}`;
// }

// console.log(
//   getUserSummary({
//     name: "Alex",
//     age: 24,
//     email: "alex@gmail.com",
//   }),
// );

// console.log(
//   getUserSummary({
//     name: "Alex",
//     age: 24,
//   }),
// );

// // 5. Масив чисел

// // Умова:
// // Функція sumArray приймає масив чисел number[] і повертає їхню суму.

// function sumArray(numArr: number[]): number {
//   return numArr.reduce((acc, num) => acc + num, 0);
// }

// console.log(sumArray([1, 2, 3, 4, 5]));

// 6. Масив рядків або чисел

// Умова:
// Функція joinArray приймає масив, елементи якого можуть бути string або number і повертає рядок з усіх елементів, розділених комою.

// function joinArray(arr: (string | number)[]): string {
//   return arr.join(", ");
// }

// console.log(joinArray([1, 2, 4, 6, "sada", "asdas"]));

// / 7. Фільтр користувачів за віком

// // Умова:

// interface User {
//   name: string;
//   age: number;
//   isAdmin?: boolean;
// }

// Функція filterAdults приймає масив User[] і повертає масив користувачів віком ≥ 18.

// function filterAdults(user: User[]): User[] {
//   return user.filter((user) => user.age >= 18);
// }

// console.log(filterAdults([{ name: "qweq", age: 17, isAdmin: true }]));

// 8. Об’єднання union типів

// Умова:
// Функція formatValue приймає параметр value: string | number | boolean і повертає рядок:

// якщо boolean — "true"/"false",

// якщо number — "Number: {value}",

// якщо string — "String: {value}".

// type Value = string | number | boolean;

// function formatValue(value: Value): string {
//   if (typeof value === "number") {
//     return `Number: ${value}`;
//   }
//   if (typeof value === "string") {
//     return `String: ${value}`;
//   }
//   return String(value);
// }

// console.log(formatValue(12));
// console.log(formatValue("qweqwe"));
// console.log(formatValue(true));

// 9. Масив невідомого типу

// Умова:
// Функція countNumbers приймає масив unknown[] і повертає кількість чисел у масиві.

// function countNumbers(arr: unknown[]): number {
//   return arr.filter((value) => typeof value === "number").length;
// }

// console.log(countNumbers([1, 2, 3, 4, "qwe", "qwe", "sfd"]));

// 12. Масив unknown з перевірками

// Умова:
// Функція extractNumbersAndStrings приймає unknown[] і повертає { numbers: number[], strings: string[] }.
