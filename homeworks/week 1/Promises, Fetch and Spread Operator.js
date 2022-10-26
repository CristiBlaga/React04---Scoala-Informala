// Promises:

function getList() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Toyota", "Volvo"]), 1000);
  });
}

const promise = getList();

promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

function delayDouble(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(2 * number), 1000);
  });
}

delayDouble(5)
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

//Applying the async/await syntax on top of promises:

function delayDouble(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(2 * number), 1000);
  });
}

async function run() {
  const value = await delayDouble(5);
  console.log(value);
}

run();

//I found an API that gives you the current location of the International Space Station:

getISS();

async function getISS() {
  const response = await fetch(
    "https://api.wheretheiss.at/v1/satellites/25544"
  );
  const data = await response.json();
  console.log(data);
}

//Also found a free weather API. This link will bring hourly info about Stockholm's weather conditions:

fetch(
  "https://api.open-meteo.com/v1/forecast?latitude=59.3328&longitude=18.0645&hourly=temperature_2m"
)
  .then((response) => response.json())
  .then((data) => console.log(data));

//Spread and rest operators:
//Arrays:
const alphabet = ["A", "B", "C", "D", "E"];
const numbers = ["1", "2", "3", "4", "5"];

const [a, , c, ...remaining] = alphabet;

console.log(a);
console.log(c);
console.log(remaining);

const newArray = [...alphabet, ...numbers];
console.log(newArray);

//Objects:
const personOne = {
  name: "Andrei",
  age: 30,
  address: {
    city: "Brasov",
    street: "Trandafirilor",
  },
};

const personTwo = {
  name: "Maria",
  age: 29,
};

const personThree = { ...personOne, ...personTwo };

console.log(personThree);
