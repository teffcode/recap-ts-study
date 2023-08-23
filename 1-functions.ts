// Object param - Way 1
function greeting1({ name, age }: { name: string, age: number }) {
  console.log(`Hi, ${name}. You are ${age} years old.`) 
}
greeting1({ name: 'Teff', age: 15 })

// Object param - Way 2
function greeting2(person: { name: string, age: number }) {
  const { name, age } = person
  console.log(`Hi, ${name}. You are ${age} years old.`) 
}
greeting2({ name: 'Teff', age: 15 })

// Return type of a function
function greeting3(person: { name: string, age: number }): string {
  const { name, age } = person
  console.log(`Hi, ${name}. You are ${age} years old.`)
  return name
}

// Return type of an arrow function - Way 1
const sum = (a: number, b: number): number => {
  return a + b
}

// Return type of an arrow function - Way 2
const substraction: (a: number, b: number) => number = (a, b) => {
  return a - b
}

// never - no explicit return
function throwError(message: string): never {
  throw new Error(message)
}

// Inference in implicit functions
const avengers = ['Spidey', 'Hulk', 'Avengers']

avengers.forEach(avenger => { // Implicit function
  console.log(avenger.toUpperCase()) // TS knows avenger is a string
})
