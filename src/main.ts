enum Role {
  Admin = "admin",
  Student = "student",
  Teacher = "teacher",
}

function handleGreetMessage(role: Role, name: string): string {
  switch (role) {
    case Role.Admin:
      return `Hello Admin ${name}`;

    case Role.Student:
      return `Hello student ${name}`;

    case Role.Teacher:
      return `Hello teacher ${name}`;
  }
}

console.log(handleGreetMessage(Role.Student, "Matfey"));

// Задача 1. Узагальнена функція wrapInArray
// Умова

// Є функція:

// Зараз вона не типізована.

// Завдання

// Зроби функцію узагальненою.
// function wrapInArray<T>(value: T): T[] {
//   return [value];
// }

// console.log(wrapInArray<number>(10));
// console.log(wrapInArray<string>("hello"));

// Задача 2. Узагальнена функція getLastElement
// Умова

// Створи функцію getLastElement, яка:

// приймає масив будь-якого типу

// повертає останній елемент масиву

// Зроби функцію узагальненою.

// function getLastElement<T>(arr: T[]): T {
//   return arr[arr.length - 1];
// }

// console.log(getLastElement<number>([1, 2, 3, 4, 5]));

// Задача 3. Узагальнена функція pair
// Умова

// Створи функцію pair, яка:

// приймає два значення, які можуть бути різного типу

// повертає їх як масив або кортеж [перший, другий]

// Зроби функцію узагальненою

// function pair1<T, X>(first: T, second: X): (T | X)[] {
//   // return [first, second];

//   return [second, first];
// }

// pair1<number, string>(10, "test");

// function pair2<T, X>(first: T, second: X): [T, X] {
//   // return [first, second];
//   return [first, second];
// }

// pair1<number, string>(10, "test");
