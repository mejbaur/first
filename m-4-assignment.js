// Radian to Degree converter
const radianToDegree = (radian) => {
  let degree = 0;
  degree = (radian * 180) / Math.PI;
  let degreeFixed = degree.toFixed(3);
  let makeNumDegreeFixed = parseFloat(degreeFixed);
  return makeNumDegreeFixed;
};

// const result = radianToDegree(5);
// console.log(result);

// i will give a file name with extension you will show me the resut is file javascript or not return would true and false.
const isJavascript = (fileName) => {
  if (typeof fileName !== "string") {
    return "Please provide file name by string!";
  } else if (fileName.includes(".js")) {
    return true;
  }
  return false;
};

// const result = isJavascript("app.js");
// console.log(result);

// calculate the total oil price that i have to pay
/**
 * desal 1L price ----> 114
 * petrol 1L price ---> 130
 * octen 1L price ----> 135
 */
const oilPrice = (desal, petrol, octen) => {
  let desalPrice = 114;
  let petrolPrice = 130;
  let octenPrice = 135;

  let totalDesalPrice = desalPrice * desal;
  let totalPetrolPrice = petrolPrice * petrol;
  let totalOctenPrice = octenPrice * octen;

  let iHaveToPay = totalDesalPrice + totalPetrolPrice + totalOctenPrice;
  return iHaveToPay;
};

// const result = oilPrice(2, 2, 2);
// console.log(result);

// busfare with pubic bus
/**
 * reserved bus ---> 50
 * microbus -----> 11
 * finally rest people will go by public buss
 * public bus fare ---> 250
 */
const publicBusFare = (people) => {
  if (people < 50) {
    return "sorry you don't have enoguh people!";
  }
  let bus = 50;
  let microBus = 11;
  let publicBusFare = 250;
  let busRemaining = people - bus;
  let restPeople = busRemaining - microBus;

  let totalPublicBusFare = publicBusFare * restPeople;
  return totalPublicBusFare;
};

// const result = publicBusFare(50);
// console.log(result);

// you nedd to take a function that name would be isBestFriend then we will give two parameters that be two object you have to compare both object first name property must have second object friend property same then you will return true otherwise return false
const isBestFriend = (obj1, obj2) => {
  if (obj1.name.includes(obj2.friend) && obj2.name.includes(obj1.friend)) {
    return true;
  }
  return false;
};

let firstFriend = { name: "sagor", friend: "samiul" };
let secondFriend = { name: "samiul", friend: "sagor" };

// const result = isBestFriend(firstFriend, secondFriend);
// console.log(result);
