// enum Role {
//   Admin = 'admin',
//   Student = 'student',
//   Teacher = 'teacher',
// }

// function handleGreetMessage(role: Role, name: string): string {
//   switch (role) {
//     case Role.Admin:
//       return `Hello Admin ${name}`;

//     case Role.Student:
//       return `Hello student ${name}`;

//     case Role.Teacher:
//       return `Hello teacher ${name}`;
//   }
// }

// console.log(handleGreetMessage(Role.Student, 'Matfey'));

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

// interface User {
//   name: string;
//   age: number;
// }

// const users: User[] = [
//   { name: 'Ivan', age: 25 },
//   { name: 'Anna', age: 30 },
//   { name: 'Oleg', age: 20 },
// ];

// function maxBy<T>(arr: T[], selector: (item: T) => number): T {
//   return arr.reduce((max, item) =>
//     selector(item) > selector(max) ? item : max
//   );
// }

// const oldest = maxBy<User>(users, user => user.age); // { name: "Anna", age: 30 }
// console.log(oldest);

// interface Product {
//   name: string;
//   price: number;
// }

// const products: Product[] = [
//   { name: 'Laptop', price: 1000 },
//   { name: 'Phone', price: 800 },
// ];
// console.log(maxBy<Product>(products, p => p.price));

// interface Responce<T> {
//   status: number;
//   message: string;
//   data: T;
// }

// interface User {
//   name: string;
// }

// // interface UsersResponce {
// //   status: number;
// //   message: string;
// //   data: User[];
// // }

// const usersResponce: Responce<User[]> = {
//   status: 200,
//   message: 'success',
//   data: [
//     {
//       name: 'Leon',
//     },
//     {
//       name: 'Kate',
//     },
//   ],
// };

// // interface UserResponce {
// //   status: number;
// //   message: string;
// //   data: User;
// // }

// const userResponce: Responce<User> = {
//   status: 200,
//   message: 'success',
//   data: {
//     name: 'Selestian',
//   },
// };

// Задача 7. Узагальнена функція delay з Promise
// Умова

// Створи функцію delay, яка:
// приймає значення будь-якого типу
// приймає час у мілісекундах
// повертає Promise, який після затримки повертає передане значення
// зроби функцію узагальненою

// function delay<T>(value: T, time: number): Promise<T> {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(value), time);
//   });
// }

// delay('Hello1', 2000).then(res => console.log(res));

// Задача 8. Узагальнена функція fetchData з Axios
// Умова

// Створи функцію fetchData, яка:
// приймає URL
// робить GET-запит через axios
// повертає масив об’єктів певного типу, який визначається узагальненням

// interface User{
//   name: "Anton";
// }

// async function fetchData<T>(url: string): Promise<T[]> {
//   const res = await axios.get<T[]>(url);
//   return res.data;
// }

// fetchData<User>('site.com/users').then(data => console.log(data));

// Задача 9. Узагальнена функція zip
// Умова
// Створи функцію zip, яка:

// приймає два масиви різного типу
// повертає масив кортежів

// якщо масиви різної довжини, ігнорує зайві елементи
// зроби функцію узагальненою

// const numbers = [1, 2, 3];
// const strings = ["a", "b"];
// // const zipped = zip(numbers, strings); // [[1,"a"], [2,"b"]]

// function zip<T, D>(arr1: T[], arr2: D[]): [T, D][] {
//   const length = Math.min(arr1.length, arr2.length);
//   const result: [T, D][] = [];
//   for (let i = 0; i < length; i += 1) {
//     result.push([arr1[i], arr2[i]]);
//   }

//   return result;
// }

// console.log(zip<number, string>(numbers, strings));

//! Задача 10. Узагальнені функції saveToStorage і loadFromStorage
// Умова
// Створи дві функції:
// 1) saveToStorage
// приймає ключ
// приймає значення будь-якого типу
// зберігає його у localStorage у форматі JSON
// 2) loadFromStorage
// приймає ключ
// повертає значення
// Зроби обидві функції узагальненими.

function saveToStorage<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadFromStorage<T>(key: string): T | null {
  const value = localStorage.getItem(key);
  const result = value !== null ? JSON.parse(value) : null;
  return result;
}

saveToStorage<string>("key", "value");
loadFromStorage<string>("key");
