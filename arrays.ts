const array: number[] = [1, 2, 3, 4, 5];

const array2: number[] = [6, 7, 8];
const array3: number[] = [9, 10];

const concatenatedArray = array.concat(array2, array3); //  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const everyResult = array.every((element) => element > 0); //  true
const filteredArray = array.filter((element) => element % 2 === 0); //  [2, 4]
const foundElement = array.find((element) => element > 3); //  4
const foundIndex = array.findIndex((element) => element > 3); //  3
array.forEach((element) => console.log(element)); // Prints 1, 2, 3, 4, 5
const includesResult = array.includes(3); //  true
const indexOfResult = array.indexOf(3); //  2
const joinedString = array.join(", "); //  "1, 2, 3, 4, 5"
const lastIndexOfResult = array.lastIndexOf(3); //  2
const mappedArray = array.map((element) => element * 2); //  [2, 4, 6, 8, 10]
const poppedElement = array.pop(); //  5
const pushedLength = array.push(6, 7); //  7
const reducedValue = array.reduce((acc, element) => acc + element, 0); //  15
const reducedRightValue = array.reduceRight((acc, element) => acc - element, 0); //  -5
const reversedArray = array.reverse(); //  [5, 4, 3, 2, 1]
const shiftedElement = array.shift(); //  1
const slicedArray = array.slice(1, 3); //  [4, 3]
const someResult = array.some((element) => element > 3); //  true
const sortedArray = array.sort((a, b) => a - b); //  [1, 2, 3, 4, 5]
const splicedArray = array.splice(1, 2, 6, 7); //  [2, 3], array becomes [1, 6, 7, 4, 5]
const arrayToString = array.toString(); //  "1,6,7,4,5"
const unshiftedLength = array.unshift(0); //  6
