// write a arrow function that will take a array of elements that take will your friends name and you have to check the single firend lenth even then push a new array and return new array
const friends = ["Sagor", "Samiul", "Shiam", "Monowar", "khairul"];

const evenFriend = (friends) => {
  const newFriends = [];
  for (const friend of friends) {
    if (friend.length % 2 == 0) {
      newFriends.push(friend);
    }
  }
  return newFriends;
};

const newFriend = evenFriend(friends);

// write a arrow function and that will take a array of numbers elements and square single number and then all square number sum and return sum number average
const average = (numbers) => {
  const sqrNum = [];
  let sum = 0;
  let average;
  let averageNum = numbers.length;
  for (const number of numbers) {
    const square = Math.pow(number, number);
    sqrNum.push(square);
  }

  for (const sqr of sqrNum) {
    sum = sum + sqr;
  }
  average = sum / averageNum;
  return average.toFixed(2);
};

const numbers = [1, 2, 3];

const averageNumber = average(numbers);

// declare a arrow function that will be take two array of numbers elements and combine that two array elements in the new array and check maximum value from new array and return the maximum result
const maximumNum = (array1, array2) => {
  const newArray = [...array1, ...array2];
  const maxNum = Math.max(...newArray);
  return maxNum;
};

const numbers1 = [10, 20, 30, 40, 50];
const numbers2 = [60, 70, 80, 90, 10];

const maximumNumber = maximumNum(numbers1, numbers2);

const obj = [];

console.log(obj?.[0]);
