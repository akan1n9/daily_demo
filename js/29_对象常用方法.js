// Object.assign()
const target = { a: 1, b: 2 }
const source = { b: 3, c: 4 }

const result = Object.assign(target, source)

console.log(target)  //  { a: 1, b: 3, c: 4 }

console.log(result)  // { a: 1, b: 3, c: 4 }

console.log(target === result) // true

// Object.create()
