# functional programming

i'm creating this repository to save my studies of the `functional programming paradigm` and document them in this `readme.md` file so that i can assist other people in understanding it in a straightforward manner.

so, to get started, let's dive right in!

in essence, programming paradigms refer to fundamental styles or approaches to programming. they are basically ways of how problems should be approached and how solutions should be structured.

there are several programming paradigms, such as `imperative programming`, `procedural programming`, and `OOP`. however, we are going to focus only on `functional programming`.

## basics

if you are already familiar with other paradigms like `OOP` or `procedural`, where you use variables and mutate them until you get the expected result, you'll see that functional programming is different in a way that instead of mutating states in your application, you define transformations `declaratively` and chain them together to solve your problem.

the main idea in functional programming could be summarized as:

- functions are at the center of your designs:

  - functions are used to model your algorithms but are also treated as values and they can be passed around.
  - in functional programming, values are immutable, and functions don't have side effects and are predictable.

- functional programming is declarative:
  - it means that your code must specify what you want rather than how you want it.
  - we don't use `for` or `while` loops in function design because those situations are coded with recursion definitions. we will look into function recursion calls and how to write loops with them later.

in that way, functional programming promises `more control`, which leads to fewer bugs and higher maintainability and readability in your code.

## but why bother learning and coding functional?

as you'll see, functional codes are easier to reason about. you just read them linearly. when you're reading a functional code, you don't need to keep all the possible paths of running code in your mind.

we can also say that functional programming has less boilerplate code in a way that you are less likely to rewrite code because you're just reusing functions that you've already created, which means `less coding and more happening`.

we can put more responsibility into compilers to check our code, and it raises our confidence in the code as errors appear in compile time and we spend less time writing tests. if the code compiles, it will probably work as expected.

therefore, if you work in software engineering, you will really enjoy this because you can modularize everything and plug things together so easily and it can save you so much time.
