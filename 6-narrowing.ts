// Example 1
const displayLength = (object: string | number) => {
  // return object.length -> Error
  if (typeof object === 'string') {
    return object.length
  }

  return object.toString().length // In this point, TS knows object is a number.
}

displayLength('1')

// Example 2
interface Mario {
  company: string,
  name: string,
  jump: () => void
}

interface Sonic {
  company: string,
  name: string,
  run: () => void
}

type Character = Mario | Sonic

function play(character: Character) {
  // console.log(character.run()) -> Error because TS think it could be company or name (mix between both)
  // Idea 1: Change in Mario interface company: string by company 'Nintendo' and
  // ask if (character.company === 'Nintendo') { console.log(character.jump()) }
}