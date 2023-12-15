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
