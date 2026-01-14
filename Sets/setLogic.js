// union()
const a = new Set([1, 2, 3, 4])
const b = new Set([ 5, 6,])
const union = new Set([...a, ...b])
console.log(union)

// intersection()
const intersection = new Set([...a].filter(x => b.has(x)))
console.log(intersection)

// difference()
const difference = new Set([...a].filter(x => !b.has(x)))
const difference2 = new Set([...b].filter(x => !a.has(x)))
console.log(difference)
console.log(difference2)


// symmetricDifference()
const symmetricDifference = new Set([...[...a].filter(x => !b.has(x)),
...[...b].filter(x => !a.has(x))])
console.log("Symmetric Difference", symmetricDifference)


// isSubsetOf() - A values are present in B or not
const isSubsetOf = ([...a].every(x => b.has(x)))
console.log(isSubsetOf)


// isSupersetOf() - B elements are in a or not
const isSupersetOf = [...b].every(x => b.has(x))
console.log(isSupersetOf)


// isDisjointFrom() - some beaciuse we need atleast one common
const isDisjointFrom = [...a].some(x => b.has(x))
console.log(isDisjointFrom)

