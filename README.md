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

in essence, we want our functions to be as pure as possible! a `pure function` is a function that has no side effects, is deterministic, and total.
