// Type Alias
type Hero = {
  name: string,
  age: number
}

let hero = {
  name: 'Thor',
  age: 1500
}

function createHero(hero: Hero): Hero {
  const { name, age } = hero
  return { name, age }
}

// Optional properties
type HeroId = `${string}-${string}-${string}-${string}-${string}` // Template union types

type NewHero = {
  readonly id?: HeroId // commas are optionals (,)
  name: string
  age: number
  isActive?: boolean
}

function createNewHero(hero: NewHero): NewHero {
  const { name, age } = hero
  return {
      id: crypto.randomUUID(),
      name,
      age,
      isActive: true
  }
}

// Type indexing - Reuse some parts of a type
type HeroProperties = {
  isActive: boolean
  address: {
      planet: string
      city: string
  }
}

const addressHero: HeroProperties['address'] = {
  planet: 'Earth',
  city: 'Madrid'
}

// Type from function return
function createAddress() {
  return {
    planet: 'Earth',
    city: 'Madrid'
  }
}

type Address = ReturnType<typeof createAddress>