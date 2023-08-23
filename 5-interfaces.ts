// Interfaces - Objects & Classes
interface Person {
  name: string
  age: number
  greeting: () => void
}

let person: Person = {
  name: 'Thor',
  age: 1500,
  greeting: () => {
    console.log('Hi')
  }
}