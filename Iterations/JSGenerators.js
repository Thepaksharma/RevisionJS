const arr = [1, 2, 3, 4, 5, 6]

function* genFromArray(arr) {
    for (let value of arr) {
        yield value
    }
}

const gen = genFromArray(arr)
console.log(gen.next())