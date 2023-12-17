# functional programming exploration 💻

welcome to my dedicated repository, where i embark on a comprehensive journey into the realm of the `functional programming paradigm`. within this `readme.md` file, i endeavor to meticulously document my learning process, with the aim of facilitating a clear understanding of functional programming for fellow enthusiasts.

let's delve straight into the heart of it!

programming paradigms serve as foundational styles or methodologies in the world of programming. they furnish us with guidelines on how to approach problems and structure solutions effectively.

while there exist various programming paradigms such as `imperative programming`, `procedural programming`, and `OOP`, our primary focus within this repository is the intriguing and powerful world of `functional programming`.

## grasping the fundamentals 👷

if you're well-versed in paradigms like `OOP` or `procedural`, where variables undergo mutation to attain desired outcomes, brace yourself for a paradigm shift with functional programming. in this paradigm, rather than altering states in your application, you declaratively define transformations and seamlessly chain them together to unravel complex problems.

let's distill the core tenets of functional programming:

### functions at the helm:

- **functions as algorithmic models:**
  - functions take center stage in shaping your algorithms, doubling as values that can be passed around.
  - in the realm of functional programming, values remain immutable, and functions abstain from triggering side effects, ensuring predictability.

### the declarative essence:

- **expressing intent rather than procedure:**
  - code in functional programming articulates what you want to achieve, not how to achieve it.
  - bid farewell to traditional `for` or `while` loops; in function design, we prefer the elegance of recursion definitions, a topic we'll explore in-depth later.

functional programming endows you with **more control**, ushering in fewer bugs and elevating the maintainability and readability of your code. Step into a world where the paradigm not only transforms your coding style but also enhances the precision and elegance of your solutions.

### unlocking the power of functional coding 📚

delving into functional programming offers a myriad of compelling reasons to broaden your coding horizons. here's why immersing yourself in functional code is a journey worth taking:

**1. enhanced readability:**

- functional code fosters clarity by allowing linear reading, eliminating the need to juggle multiple paths of execution. you can traverse the logic effortlessly, making it easier to reason about the code's behavior.

**2. Streamlined development:**

- bid farewell to boilerplate code! functional programming encourages code reuse, ensuring that once you've crafted a function, you can seamlessly integrate it elsewhere. the result? "less coding and more happening" — a mantra that embodies efficiency and productivity.

**3. compiler confidence:**

- functional programming aligns with the reliability of compilers. by leaning on them to scrutinize your code, errors are caught at compile time, saving you the hassle of extensive testing. a compiled code that sails through is a strong indicator that it will likely function as anticipated.

**4. time Savings for engineers:**

- for the discerning software engineer, functional programming proves to be a time-saving ally. its emphasis on modularization and the effortless assembly of components means you spend less time wrestling with intricate details and more time bringing your vision to life.

embark on the journey of functional programming, where the code not only speaks to machines but also resonates with the efficiency and elegance that modern development demands.

## nurturing functions in the functional realm 🔗

given that functions form the bedrock of our paradigm, it's crucial to handle them with care. here are some guiding principles:

**1. deterministic design:**

- functions should be `deterministic`, ensuring consistent output for the same input with every invocation. predictability becomes a cornerstone of functional programming.

**2. Side effect abstinence:**

- functions should steer clear of `side effects`, refraining from reading or writing external entities. actions like internet requests or database interactions should find their place outside the function body to maintain code integrity.

**3. embrace immutability:**

- operate within the realm of `immutability`. the golden rule is to eschew the mutation of values or variables, opting instead for the creation of new values through transformations. immutability reinforces the significance of types, emphasizing the preservation of variable types through functions.

**4. harnessing high-order functionality:**

- dive into the world of `high-order` functions, where functions take center stage as first-class citizens. this means they can be passed as arguments, returned as values, and even stored in variables. particularly useful in dealing with data collections, high-order functions like `map`, `filter`, and `reduce` empower concise and powerful transformations with minimal code.

**5. unary function elegance:**

- embrace the concept of `unary functions` in functional programming. functions should exclusively accept `a single input`. when faced with multiple inputs, explore alternative solutions or consolidate them into a single object, streamlining the function's simplicity and clarity.

in essence, the goal is to elevate our functions to the purity standard. a `pure function` epitomizes the ideals of functional programming—devoid of side effects, deterministic in nature, and ensuring totality in its execution. as we adhere to these principles, our functions become robust, predictable, and integral components of a functional codebase.

### unraveling the mysteries of iteration in functional programming 🔄

in the realm of functional programming, the conventional tools of explicit, mutable state, and control structures like `for` or `while` loops are set aside. instead, iteration takes on a more elegant form through the utilization of higher-order functions such as `map`, `filter`, and `reduce`. let's explore this paradigm shift by examining the common task of summing numbers in an array.

**imperative approach:**

```typescript
function sumAllImperative(array: number[]) {
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }

  return result;
}
```

this imperative approach is straightforward—initialize a `result` variable, traverse the array, and accumulate values. now, contrast this with the functional approach:

**functional approach:**

```typescript
function sumAllFunctional(array: number[]) {
  return array.reduce((acc, curr) => acc + curr, 0);
}
```

notice the simplicity and cleanliness. no need for explicit variables and hard-coded loops; functional programming leverages built-in methods for a concise solution.

an alternative method to tackle iteration is through recursion, a technique aligning with functional programming's emphasis on immutability and avoidance of mutable states. this approach aligns with the functional programming principle of declaring transformations explicitly, rather than detailing procedural steps.

**recursion approach:**

```typescript
function sumAllRecursion(array: number[]) {
  if (array.length === 0) {
    return 0;
  }

  return array[0] + sumAllRecursion(array.slice(1));
}
```

in this example, a base case is established for an empty array, returning 0, while the recursive case computes the sum of the first array element and the result of the function applied to the rest of the array.

while recursion enhances code simplicity, its use demands careful consideration. rapid growth in function calls may lead to memory inefficiency. although recursion is optimal for certain problems, it's not a universal solution. each approach in functional programming reflects a conscious choice toward clarity, expressiveness, and adherence to the paradigm's principles.

## unleashing the power of built-in methods in javascript! 🪛

in the vast landscape of javascript, built-in methods like `map()`, `reduce()`, `filter()`, and `forEach()` stand as formidable tools for embracing functional programming paradigms. these methods prove to be invaluable assets, enabling us to execute operations on arrays without the cumbersome burden of mutating the original data. this aligns seamlessly with the cardinal principle of immutability, a cornerstone in the world of functional programming.

the beauty of these methods lies in their ability to abstract away the intricate details of iteration, elevating our code to a more declarative, concise, and comprehensible form. mastering these built-in methods is not merely a skill; it's a necessity. they not only turbocharge our productivity but also foster the creation of cleaner, more maintainable code.

these methods have become staples in modern javascript development, often superseding traditional for-loops due to their inherently functional nature. as you embark on your coding journey, familiarizing yourself with these tools becomes a key factor in not just surviving but thriving in the dynamic landscape of contemporary javascript development. embrace the power, elegance, and efficiency that these built-in methods bring to your functional programming arsenal! 🚀

checkout the list of the most important built-in methods in javascript:

### strings 📝

- `charAt(index)`: returns the character at the specified index. time complexity is O(1).
- `concat(string2, string3, ..., stringX)`: joins two or more strings, and returns a new joined strings. time complexity is O(n), where n is the total length of all the strings.
- `includes(searchvalue, start)`: checks whether a string contains the specified string/characters. time complexity is O(n), where n is the length of the string.
- `indexOf(searchvalue, start): `returns the position of the first found occurrence of a specified value in a string. time complexity is O(n), where n is the length of the string.
- `lastIndexOf(searchvalue, start)`: Returns the position of the last found occurrence of a specified value in a string. time complexity is O(n), where n is the length of the string.
- `replace(searchvalue, newvalue)`: Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced. time complexity is O(n), where n is the length of the string.
- `slice(start, end)`: extracts a part of a string and returns a new string. time complexity is O(n), where n is the length of the substring.
- `split(separator, limit)`: Splits a string into an array of substrings. time complexity is O(n), where n is the length of the string.
- `substring(start, end)`: extracts the characters from a string, between two specified indices, and returns the new sub string. time complexity is O(n), where n is the length of the substring.
- `toLowerCase()`: converts a string to lowercase letters. time complexity is O(n), where n is the length of the string.
- `toUpperCase()`: converts a string to uppercase letters. time complexity is O(n), where n is the length of the string.
- `trim()`: Removes whitespace from both ends of a string. time complexity is O(n), where n is the length of the string.

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

- `concat(array2, array3, ..., arrayX)`: joins two or more arrays, and returns a new joined array. time complexity is O(n), where n is the total length of all the arrays.
- `every(callback)`: checks if all elements in an array pass a test specified by a callback function. time complexity is O(n), where n is the length of the array.
- `filter(callback)`: creates a new array with all elements that pass the test specified by a callback function. time complexity is O(n), where n is the length of the array.
- `find(callback)`: Returns the first element in an array that passes a test specified by a callback function. time complexity is O(n), where n is the length of the array.
- `findIndex(callback)`: Returns the index of the first element in an array that passes a test specified by a callback function. time complexity is O(n), where n is the length of the array.
- `forEach(callback)`: calls a callback function for each element in an array. time complexity is O(n), where n is the length of the array.
- `includes(searchElement, start)`: checks if an array contains a specified element. time complexity is O(n), where n is the length of the array.
- `indexOf(searchElement, start)`: Returns the first index at which a specified element is found in an array. time complexity is O(n), where n is the length of the array.
- `join(separator)`: joins all elements of an array into a string. time complexity is O(n), where n is the length of the array.
- `lastIndexOf(searchElement, start)`: Returns the last index at which a specified element is found in an array. time complexity is O(n), where n is the length of the array.
- `map(callback)`: creates a new array with the results of calling a callback function on every element in the array. time complexity is O(n), where n is the length of the array.
- `pop()`: Removes the last element from an array and returns that element. time complexity is O(1).
- `push(element1, element2, ..., elementX)`: adds one or more elements to the end of an array and returns the new length of the array. time complexity is O(1).
- `reduce(callback, initialValue)`: applies a callback function against an accumulator and each element in the array (from left to right) to reduce it to a single value. time complexity is O(n), where n is the length of the array.
- `reduceRight(callback, initialValue)`: applies a callback function against an accumulator and each element in the array (from right to left) to reduce it to a single value. time complexity is O(n), where n is the length of the array.
- `reverse()`: Reverses the order of the elements in an array. time complexity is O(n), where n is the length of the array.
- `shift()`: Removes the first element from an array and returns that element. time complexity is O(n), where n is the length of the array.
- `slice(start, end)`: extracts a section of an array and returns a new array. time complexity is O(n), where n is the length of the subarray.
- `some(callback)`: checks if at least one element in an array passes a test specified by a callback function. time complexity is O(n), where n is the length of the array.
- `sort(compareFunction)`: Sorts the elements of an array in place and returns the sorted array. time complexity is O(n log n), where n is the length of the array.
- `splice(start, deleteCount, item1, item2, ..., itemX)`: changes the contents of an array by removing or replacing existing elements and/or adding new elements. time complexity is O(n), where n is the length of the array.
- `toString()`: converts an array to a string and returns the result. time complexity is O(n), where n is the length of the array.
- `unshift(element1, element2, ..., elementX)`: adds one or more elements to the beginning of an array and returns the new length of the array. time complexity is O(n), where n is the length of the array.

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
array.forEach((element) => console.log(element)); // prints 1, 2, 3, 4, 5
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

- `Object.keys(obj)`: returns an array of a given object's own enumerable property names. time complexity is O(n), where n is the number of properties in the object.
- `Object.values(obj)`: returns an array of a given object's own enumerable property values. time complexity is O(n), where n is the number of properties in the object.
- `Object.entries(obj)`: returns an array of a given object's own enumerable property key-value pairs. time complexity is O(n), where n is the number of properties in the object.
- `Object.assign(target, source1, source2, ..., sourceX)`: copies the values of all enumerable properties from one or more source objects to a target object. time complexity is O(n), where n is the number of properties in the source objects.
- `Object.freeze(obj)`: freezes an object, preventing new properties from being added to it and existing properties from being modified or deleted. time complexity is O(n), where n is the number of properties in the object.
- `Object.seal(obj)`: Seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. time complexity is O(n), where n is the number of properties in the object.
- `Object.isFrozen(obj)`: determines if an object is frozen. time complexity is O(1).
- `Object.isSealed(obj)`: determines if an object is sealed. time complexity is O(1).
- `Object.keys(obj)`: returns an array of a given object's own enumerable property names. time complexity is O(n), where n is the number of properties in the object.
- `Object.values(obj)`: returns an array of a given object's own enumerable property values. time complexity is O(n), where n is the number of properties in the object.
- `Object.entries(obj)`: returns an array of a given object's own enumerable property key-value pairs. time complexity is O(n), where n is the number of properties in the object.
- `Object.assign(target, source1, source2, ..., sourceX)`: copies the values of all enumerable properties from one or more source objects to a target object. time complexity is O(n), where n is the number of properties in the source objects.
- `Object.freeze(obj)`: freezes an object, preventing new properties from being added to it and existing properties from being modified or deleted. time complexity is O(n), where n is the number of properties in the object.
- `Object.seal(obj)`: Seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. time complexity is O(n), where n is the number of properties in the object.
- `Object.isFrozen(obj)`: determines if an object is frozen. time complexity is O(1).
- `Object.isSealed(obj)`: determines if an object is sealed. time complexity is O(1).

```typescript
type ObjectType = { name: string; age: number };
const object: ObjectType = { name: "john", age: 30 };

const target = {};
const source = { name: "jane", age: 25 };

const keys = Object.keys(object); // ["name", "age"]
const values = Object.values(object); // ["john", 30]
const entries = Object.entries(object); // [["name", "john"], ["age", 30]]
Object.assign(target, object, source); // target: { name: "jane", age: 25 }
Object.freeze(object); // object becomes immutable
Object.seal(object); // object becomes immutable and non-extensible
const isFrozen = Object.isFrozen(object); // trueconst isSealed = Object.isSealed(object); // true
```

## culmination: embracing the power of functional programming 🔚

in summary, functional programming emerges as a potent paradigm, empowering developers to craft code that is not only `clean`, `modular`, and `maintainable` but also inherently robust. through a steadfast commitment to principles such as immutability, pure functions, and the utilization of higher-order functions, functional programming fosters an environment where code becomes more understandable and less susceptible to bugs.

the array and object methods explored in this article stand as indispensable tools within the functional programming toolbox. offering efficient data manipulation and transformation capabilities, these methods streamline the process of working with arrays and objects in a functional style.

by comprehending and harnessing these methods, developers can fully exploit the advantages inherent in the functional programming paradigm. whether dealing with arrays or objects, these methods extend a spectrum of functionalities, enabling the creation of code that is not just efficient but also expressively elegant.

functional programming, indeed, is a valuable skill for any developer. mastery of these array and object methods marks a pivotal stride toward becoming a proficient functional programmer.

and with that, we conclude our exploration into the realm of functional programming. thank you for joining in! 👋👋
