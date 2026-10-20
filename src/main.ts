enum Role {
  Admin = 'admin',
  Student = 'student',
  Teacher = 'teacher',
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

console.log(handleGreetMessage(Role.Student, 'Matfey'));

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

// Задача 4. Узагальнена функція firstOrDefault
// Умова

// Створи функцію firstOrDefault, яка:

// приймає масив будь-якого типу

// повертає перший елемент масиву або null, якщо масив порожній

// зроби функцію узагальненою

// function firstOrDefault<T>(arr: T[]): T | null {
//   // solution 1
//   // if (arr.length === 0) {
//   //   return null;
//   // }
//   // return arr[0];
//   // solution 2
//   return arr[0] ?? null;
// }
// console.log(firstOrDefault<number>([]));

// console.log(firstOrDefault<number>([6, 3, 4]));

// Задача 5. Узагальнена функція maxBy
// Умова

// Створи функцію maxBy, яка:
// приймає масив об’єктів будь-якого типу
// приймає функцію selector, яка з об’єкта повертає число
// повертає об’єкт, для якого selector дає найбільше число
// Зроби функцію узагальненою.

// Приклад використання:

interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: 'Ivan', age: 25 },
  { name: 'Anna', age: 30 },
  { name: 'Oleg', age: 20 },
];

function maxBy<T>(arr: T[], selector: (item: T) => number): T {
  return arr.reduce((max, item) =>
    selector(item) > selector(max) ? item : max
  );
}

const oldest = maxBy<User>(users, user => user.age); // { name: "Anna", age: 30 }
console.log(oldest);

interface Product {
  name: string;
  price: number;
}

const products: Product[] = [
  { name: 'Laptop', price: 1000 },
  { name: 'Phone', price: 800 },
];
console.log(maxBy<Product>(products, p => p.price));
