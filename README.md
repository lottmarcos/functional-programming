# functional programming 💻

this repository is dedicated to my studies on the `functional programming paradigm`. i aim to document my learning journey in this `readme.md` file, hoping to assist others in understanding functional programming in a straightforward manner.

let's dive right in!

programming paradigms are fundamental styles or approaches to programming. they provide guidelines on how problems should be approached and solutions structured.

there are several programming paradigms, such as `imperative programming`, `procedural programming`, and `OOP`. however, our focus here is `functional programming`.

## basics 👷

if you're already familiar with paradigms like `OOP` or `procedural`, where variables are used and mutated to achieve the desired result, you'll find functional programming to be quite different. instead of mutating states in your application, in functional programming, you define transformations `declaratively` and chain them together to solve your problem.

the core principles of functional programming can be summarized as:

- functions are central to your designs:

  - functions are used to model your algorithms and are also treated as values that can be passed around.
  - in functional programming, values are immutable, and functions don't have side effects, making them predictable.

- functional programming is declarative:

  - your code should specify what you want to achieve rather than how to achieve it.
  - we avoid using `for` or `while` loops in function design because those situations are handled with recursion definitions. we will delve into function recursion calls and how to write loops with them later.

functional programming offers `more control`, leading to fewer bugs and enhancing maintainability and readability of your code.

### why learn and code functionally? 📚

functional codes are easier to reason about. you read them linearly, without needing to keep track of all possible paths of execution.

functional programming reduces boilerplate code. you're less likely to rewrite code because you're reusing functions that you've already created, which means `less coding and more happening`.

we can rely more on compilers to check our code, boosting our confidence as errors appear at compile time, reducing the time spent writing tests. if the code compiles, it will likely work as expected.

if you're a software engineer, you'll appreciate this as it allows for easy modularization and plugging together of components, saving you significant time.

## functions 🔗

since functions are the core of our paradigm, we need to handle them carefully. here are some rules:

- functions need to be `deterministic`. this means that a function should return the same output for the same input every time it's called.
- functions should not have `side effects`. they should not read or write anything outside of their body. this means we don't want to make internet requests or read/write to a database within functions. code dealing with side effects should be isolated in the body of the code.
- functions should operate with `immutability`. we should never mutate any values or variables, we should only create new values from old ones through transformations. moreover, immutability reinforces the importance of typs, since we don't want to mutate the values or variables type through functions either!
- in functional programming we commonly use `high-order` functions. they allow us to treat functions as first-class citizens, meaning we can pass them as arguments to other functions, return them as values, and even store them in variables. One common use case for high-order functions is when dealing with collections of data. We can pass a function as an argument to a higher-order function like `map`, `filter`, or `reduce`, and apply that function to each element of the collection. This allows us to perform complex transformations or filtering operations with just a few lines of code.
- in functional programming, functions exclusively accept `a single input`. therefore, when faced with multiple inputs for a function, it is advisable to consider alternative solutions for the problem or assess whether the inputs can be consolidated into a single object. this concept is commonly referred to as a `unary function`.

in essence, we want our functions to be as pure as possible! a `pure function` is a function that has no side effects, is deterministic, and total.

### loops 🔄

it was said that we don't use `for` or `while` loops in functional programming but it wasn't clear how we deal to iteration instead.

in functional programming, the emphasis is on avoiding explicit, mutable state and control structures like `for` or `while` loops. Instead, iteration is typically achieved through higher-order functions like `map`, `filter`, and `reduce`. Let's consider the problem of summing all numbers in an array using imperative programming as a reference:

```typescript
// Imperative Approach
function sumAllImperative(array: number[]) {
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }

  return result;
}
```

it makes sense, right? we create a `result` variable and we run througout the array and add the value to the result variable and then we return this variable.

now, let's look to the functional programming approach:

```typescript
// Functional Approach
function sumAllFunctional(array: number[]) {
  return array.reduce((acc, curr) => acc + curr, 0);
}
```

see how much simpler and cleaner this is! there's no need to create variables and hard-coded loops, we simply leverage our built-in methods for assistance.

an alternative method to address this problem is through recursion. by employing recursion, functional programming underscores the concept of immutability and steers clear of mutable state, rendering the code more predictable and easier to comprehend.
this approach to iteration aligns with the functional programming principle of declaring transformations explicitly, rather than detailing the procedural steps to accomplish them.

```typescript
// Recursion Approach
function sumAllRecursion(array: number[]) {
  if (array.length === 0) {
    return 0;
  }

  return array[0] + sumAllRecursion(array.slice(1));
}
```

in this instance, we've established the base case for when the array is empty, returning 0, and the recursive case, returning the sum of the first item in the array and the function applied to the rest of the array.

while recursion can enhance code simplicity, it demands careful consideration. rapid growth in the number of function calls can quickly lead to memory inefficiency. while recursion is the optimal solution for some problems, it's not universally applicable.

## built-in methods in javascript! 🪛

built-in methods in javascript, such as `map()`, `reduce()`, `filter()`, and `forEach()`, are powerful tools for functional programming. they allow us to perform operations on arrays without mutating the original data, aligning with the principle of immutability in functional programming.

these methods abstract away the details of iteration, making our code more declarative, concise, and easier to understand. learning these built-in methods is crucial as they not only enhance our productivity but also help us write cleaner and more maintainable code. they are widely used in modern javascript development and are often preferred over traditional for-loops due to their functional nature.

checkout the list of the most important built-in methods in javascript:

### strings 📝

- `charAt(index)`: Returns the character at the specified index. Time complexity is O(1).
- `concat(string2, string3, ..., stringX)`: Joins two or more strings, and returns a new joined strings. Time complexity is O(n), where n is the total length of all the strings.
- `includes(searchvalue, start)`: Checks whether a string contains the specified string/characters. Time complexity is O(n), where n is the length of the string.
- `indexOf(searchvalue, start): `Returns the position of the first found occurrence of a specified value in a string. Time complexity is O(n), where n is the length of the string.
- `lastIndexOf(searchvalue, start)`: Returns the position of the last found occurrence of a specified value in a string. Time complexity is O(n), where n is the length of the string.
- `replace(searchvalue, newvalue)`: Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced. Time complexity is O(n), where n is the length of the string.
- `slice(start, end)`: Extracts a part of a string and returns a new string. Time complexity is O(n), where n is the length of the substring.
- `split(separator, limit)`: Splits a string into an array of substrings. Time complexity is O(n), where n is the length of the string.
- `substring(start, end)`: Extracts the characters from a string, between two specified indices, and returns the new sub string. Time complexity is O(n), where n is the length of the substring.
- `toLowerCase()`: Converts a string to lowercase letters. Time complexity is O(n), where n is the length of the string.
- `toUpperCase()`: Converts a string to uppercase letters. Time complexity is O(n), where n is the length of the string.
- `trim()`: Removes whitespace from both ends of a string. Time complexity is O(n), where n is the length of the string.

```typescript
const string: string = "Hello World";

const charAtIndex: string = string.charAt(4); // 'o'
const concatenatedString: string = string.concat("!", " Welcome"); // 'Hello World! Welcome'
const includesValue: boolean = string.includes("World"); // true
const indexOfValue: number = string.indexOf("o"); // 4
const lastIndexOfValue: number = string.lastIndexOf("o"); // 7
const replacedString: string = string.replace("World", "Universe"); // 'Hello Universe'
const slicedString: string = string.slice(6, 11); // 'World'
const splittedArray: string[] = string.split(" "); // ['Hello', 'World']
const subString: string = string.substring(6, 11); // 'World'
const lowerCaseString: string = string.toLowerCase(); // 'hello world'
const upperCaseString: string = string.toUpperCase(); // 'HELLO WORLD'
const trimmedString: string = string.trim(); // 'Hello World'
```

### arrays 📚

- `concat(array2, array3, ..., arrayX)`: Joins two or more arrays, and returns a new joined array. Time complexity is O(n), where n is the total length of all the arrays.
- `every(callback)`: Checks if all elements in an array pass a test specified by a callback function. Time complexity is O(n), where n is the length of the array.
- `filter(callback)`: Creates a new array with all elements that pass the test specified by a callback function. Time complexity is O(n), where n is the length of the array.
- `find(callback)`: Returns the first element in an array that passes a test specified by a callback function. Time complexity is O(n), where n is the length of the array.
- `findIndex(callback)`: Returns the index of the first element in an array that passes a test specified by a callback function. Time complexity is O(n), where n is the length of the array.
- `forEach(callback)`: Calls a callback function for each element in an array. Time complexity is O(n), where n is the length of the array.
- `includes(searchElement, start)`: Checks if an array contains a specified element. Time complexity is O(n), where n is the length of the array.
- `indexOf(searchElement, start)`: Returns the first index at which a specified element is found in an array. Time complexity is O(n), where n is the length of the array.
- `join(separator)`: Joins all elements of an array into a string. Time complexity is O(n), where n is the length of the array.
- `lastIndexOf(searchElement, start)`: Returns the last index at which a specified element is found in an array. Time complexity is O(n), where n is the length of the array.
- `map(callback)`: Creates a new array with the results of calling a callback function on every element in the array. Time complexity is O(n), where n is the length of the array.
- `pop()`: Removes the last element from an array and returns that element. Time complexity is O(1).
- `push(element1, element2, ..., elementX)`: Adds one or more elements to the end of an array and returns the new length of the array. Time complexity is O(1).
- `reduce(callback, initialValue)`: Applies a callback function against an accumulator and each element in the array (from left to right) to reduce it to a single value. Time complexity is O(n), where n is the length of the array.
- `reduceRight(callback, initialValue)`: Applies a callback function against an accumulator and each element in the array (from right to left) to reduce it to a single value. Time complexity is O(n), where n is the length of the array.
- `reverse()`: Reverses the order of the elements in an array. Time complexity is O(n), where n is the length of the array.
- `shift()`: Removes the first element from an array and returns that element. Time complexity is O(n), where n is the length of the array.
- `slice(start, end)`: Extracts a section of an array and returns a new array. Time complexity is O(n), where n is the length of the subarray.
- `some(callback)`: Checks if at least one element in an array passes a test specified by a callback function. Time complexity is O(n), where n is the length of the array.
- `sort(compareFunction)`: Sorts the elements of an array in place and returns the sorted array. Time complexity is O(n log n), where n is the length of the array.
- `splice(start, deleteCount, item1, item2, ..., itemX)`: Changes the contents of an array by removing or replacing existing elements and/or adding new elements. Time complexity is O(n), where n is the length of the array.
- `toString()`: Converts an array to a string and returns the result. Time complexity is O(n), where n is the length of the array.
- `unshift(element1, element2, ..., elementX)`: Adds one or more elements to the beginning of an array and returns the new length of the array. Time complexity is O(n), where n is the length of the array.

```typescript
const array: number[] = [1, 2, 3, 4, 5];

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
```

### objects 🧱

- `Object.keys(obj)`: Returns an array of a given object's own enumerable property names. Time complexity is O(n), where n is the number of properties in the object.
- `Object.values(obj)`: Returns an array of a given object's own enumerable property values. Time complexity is O(n), where n is the number of properties in the object.
- `Object.entries(obj)`: Returns an array of a given object's own enumerable property key-value pairs. Time complexity is O(n), where n is the number of properties in the object.
- `Object.assign(target, source1, source2, ..., sourceX)`: Copies the values of all enumerable properties from one or more source objects to a target object. Time complexity is O(n), where n is the number of properties in the source objects.
- `Object.freeze(obj)`: Freezes an object, preventing new properties from being added to it and existing properties from being modified or deleted. Time complexity is O(n), where n is the number of properties in the object.
- `Object.seal(obj)`: Seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Time complexity is O(n), where n is the number of properties in the object.
- `Object.isFrozen(obj)`: Determines if an object is frozen. Time complexity is O(1).
- `Object.isSealed(obj)`: Determines if an object is sealed. Time complexity is O(1).
- `Object.keys(obj)`: Returns an array of a given object's own enumerable property names. Time complexity is O(n), where n is the number of properties in the object.
- `Object.values(obj)`: Returns an array of a given object's own enumerable property values. Time complexity is O(n), where n is the number of properties in the object.
- `Object.entries(obj)`: Returns an array of a given object's own enumerable property key-value pairs. Time complexity is O(n), where n is the number of properties in the object.
- `Object.assign(target, source1, source2, ..., sourceX)`: Copies the values of all enumerable properties from one or more source objects to a target object. Time complexity is O(n), where n is the number of properties in the source objects.
- `Object.freeze(obj)`: Freezes an object, preventing new properties from being added to it and existing properties from being modified or deleted. Time complexity is O(n), where n is the number of properties in the object.
- `Object.seal(obj)`: Seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Time complexity is O(n), where n is the number of properties in the object.
- `Object.isFrozen(obj)`: Determines if an object is frozen. Time complexity is O(1).
- `Object.isSealed(obj)`: Determines if an object is sealed. Time complexity is O(1).

```typescript
type ObjectType = { name: string; age: number };
const object: ObjectType = { name: "John", age: 30 };

const target = {};
const source = { name: "Jane", age: 25 };

const keys = Object.keys(object); // ["name", "age"]
const values = Object.values(object); // ["John", 30]
const entries = Object.entries(object); // [["name", "John"], ["age", 30]]
Object.assign(target, object, source); // target: { name: "Jane", age: 25 }
Object.freeze(object); // object becomes immutable
Object.seal(object); // object becomes immutable and non-extensible
const isFrozen = Object.isFrozen(object); // trueconst isSealed = Object.isSealed(object); // true
```

## conclusion 🔚

in conclusion, functional programming provides a powerful paradigm for writing `clean`, `modular`, and `maintainable code`. by focusing on immutable, pure functions, and higher-order functions, functional programming enables developers to write code that is easier to reason about and less prone to bugs.

the array and object methods discussed in this article are essential tools in functional programming. they allow for efficient manipulation and transformation of data, making it easier to work with arrays and objects in a functional style.

by understanding and utilizing these methods, developers can take full advantage of the functional programming paradigm and unlock the benefits it offers. whether you're working with arrays or objects, these methods provide a wide range of functionality to help you write more expressive and efficient code.

functional programming is a valuable skill for any developer, and mastering these array and object methods is a crucial step towards becoming a proficient functional programmer.

and that's all folks! thanks!! 👋👋
