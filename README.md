# functional programming

this repository is dedicated to my studies on the `functional programming paradigm`. i aim to document my learning journey in this `readme.md` file, hoping to assist others in understanding functional programming in a straightforward manner.

let's dive right in!

programming paradigms are fundamental styles or approaches to programming. they provide guidelines on how problems should be approached and solutions structured.

there are several programming paradigms, such as `imperative programming`, `procedural programming`, and `OOP`. however, our focus here is `functional programming`.

## basics

if you're already familiar with paradigms like `OOP` or `procedural`, where variables are used and mutated to achieve the desired result, you'll find functional programming to be quite different. instead of mutating states in your application, in functional programming, you define transformations `declaratively` and chain them together to solve your problem.

the core principles of functional programming can be summarized as:

- functions are central to your designs:

  - functions are used to model your algorithms and are also treated as values that can be passed around.
  - in functional programming, values are immutable, and functions don't have side effects, making them predictable.

- functional programming is declarative:

  - your code should specify what you want to achieve rather than how to achieve it.
  - we avoid using `for` or `while` loops in function design because those situations are handled with recursion definitions. we will delve into function recursion calls and how to write loops with them later.

functional programming offers `more control`, leading to fewer bugs and enhancing maintainability and readability of your code.

## why learn and code functionally?

functional codes are easier to reason about. you read them linearly, without needing to keep track of all possible paths of execution.

functional programming reduces boilerplate code. you're less likely to rewrite code because you're reusing functions that you've already created, which means `less coding and more happening`.

we can rely more on compilers to check our code, boosting our confidence as errors appear at compile time, reducing the time spent writing tests. if the code compiles, it will likely work as expected.

if you're a software engineer, you'll appreciate this as it allows for easy modularization and plugging together of components, saving you significant time.

## functions 🔗

since functions are the core of our paradigm, we need to handle them carefully. here are some rules:

- functions need to be `deterministic`. this means that a function should return the same output for the same input every time it's called.
- functions should not have `side effects`. they should not read or write anything outside of their body. this means we don't want to make internet requests or read/write to a database within functions. code dealing with side effects should be isolated in the body of the code.
- functions should operate with `immutability`. we should never mutate any values or variables, we should only create new values from old ones through transformations.
- in functional programming, functions exclusively accept `a single input`. therefore, when faced with multiple inputs for a function, it is advisable to consider alternative solutions for the problem or assess whether the inputs can be consolidated into a single object. this concept is commonly referred to as a `unary function`.

in essence, we want our functions to be as pure as possible! a `pure function` is a function that has no side effects, is deterministic, and total.

## loops 🔄

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
