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
