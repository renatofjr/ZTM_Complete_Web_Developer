// ES2020!
// BigInt
// Nullish Coalescing Operator
// Optional Chaining Operator

let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6
    }
}

let andrei_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: 0
    }
}

let weight3 = andrei_pokemon?.pikachu?.weight
console.log(weight3)

let power = andrei_pokemon?.pikachu?.power ?? 'no power'
console.log(power)