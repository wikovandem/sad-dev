const numbers = [5, 2, 9, 1, 8];
numbers.sort((a, b) => a - b);
console.log(numbers);

const fruits = ['banana', 'orange', 'apple', 'pineapple'];
fruits.sort();
console.log(fruits);

const people = [
  { name: 'John', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 }
];
people.sort((a, b) => a.age - b.age);
console.log(people);
