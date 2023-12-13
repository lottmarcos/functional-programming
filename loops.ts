// Imperative Approach
function sumAllImperative(array: number[]) {
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }

  return result;
}

// Recursion Approach
function sumAllRecursion(array: number[]) {
  if (array.length === 0) {
    return 0;
  }

  return array[0] + sumAllRecursion(array.slice(1));
}

// Functional Approach
function sumAllFunctional(array: number[]) {
  return array.reduce((acc, curr) => acc + curr, 0);
}
