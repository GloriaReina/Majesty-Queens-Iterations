/*
    Define a function with a single parameter. When the function
    is invoked, an argument is required.
*/
/*const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`  // This function returns a string
}

const athena= hailTheQueen(1,athena)
const reina = hailTheQueen(2,reina)*/




//queen colony exercise
const queens = []

const createQueen = (queenId,queenName) => {
    const queenObject = {
        id:queenId,
        name:queenName
    }

    queens.push(queenObject)
}

createQueen(1, "Trinity Terry")
createQueen(2, "Katherine G")
createQueen(45,'reine')
console.log(queens)


// queen iteration exercise

const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`  // This function returns a string
}

for (const queenObject of queens) {
    const hailMessage= hailTheQueen(queenObject.name)
    console.log(hailMessage)
}
