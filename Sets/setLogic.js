// union()
const a = new Set([1, 2, 3, 4])
const b = new Set([5, 6,])
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


const value = [1, 2, 3, 4, 5, 6, 6]
const check = new Set(value)
console.log(check)
console.log(...check)






//Revision
const ab = new Set([1, 2, 3, 4])
const cd = new Set([5, 6, 7, 8])
const union1 = new Set([...ab, ...cd])
console.log(union1)

//intersection
const intersection1 = new Set([...ab].filter(x => cd.has(x)))
console.log(intersection1)

// difference()
const difference1 = new Set([...ab].filter(x => !cd.has(x)))
console.log(difference1)

const difference3 = new Set([...cd].filter(x => !ab.has(x)))
console.log(difference3)

// SymmetricDifference
const symmetricDifference1 = new Set([
    ...[...ab].filter(x => !cd.has(x)),
    ...[...cd].filter(x => !ab.has(x))]
)
console.log(symmetricDifference1)

// isSubsetOf() - A values are present in B or not
const isSubsetOf1 = [...ab].every(x => cd.has(x))
console.log(isSubsetOf1)

// isSupersetOf() - B elements are in a or not
const isSupersetOf1 = [...cd].every(x => ab.has(x))
console.log(isSupersetOf1)

// isDisjointFrom() - some because we need atleast one common
const isDisjointFrom1 = [...ab].some(x => cd.has(x))
console.log(isDisjointFrom1)
