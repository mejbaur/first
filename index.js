const fruits = [
  "Banana",
  "Orange",
  "Lemon",
  "Apple",
  "Mango",
  "Banana",
  "Apple",
];

const points = [40, 100, 1, 5, 25, 10];

const mans = [
  { fname: "sagor", lname: "Islam", age: 18 },
  { fname: "sagor", lname: "Islam", age: 19 },
  { fname: "sagor", lname: "Islam", age: 20 },
];

let iterator = points.values();

for (val of iterator) {
  console.log(val);
}
