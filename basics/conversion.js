let score = "54"
console.log(typeof(score))
// conversion
let valueNumber = Number(score)
console.log(typeof(valueNumber))
console.log(valueNumber)

let score1 = "54abc"
console.log(typeof(score1))
// conversion
let valueNumber1 = Number(score1)
console.log(typeof(valueNumber1))
console.log(valueNumber1)

let score2 = null
console.log(typeof(score2))
// conversion
let valueNumber2 = Number(score2)
console.log(typeof(valueNumber2))
console.log(valueNumber2)

let score3 = "Parth"
console.log(typeof(score3))
// conversion
let valueNumber3 = Number(score3)
console.log(typeof(valueNumber3))
console.log(valueNumber3)

let score4
console.log(typeof(score4))
// conversion
let valueNumber4 = Number(score4)
console.log(typeof(valueNumber4))
console.log(valueNumber4)

let score5 = true
console.log(typeof(score5))
// conversion
let valueNumber5 = Number(score5)
console.log(typeof(valueNumber5))
console.log(valueNumber5)

let score6 = false
console.log(typeof(score6))
// conversion
let valueNumber6 = Number(score6)
console.log(typeof(valueNumber6))
console.log(valueNumber6)

//"54" converts to 54
//"54abc" converts to NaN
//null converts to 0
//"Parth" converts to 54
// undefined converts to NaN
// true converts to 1
// false converts to 0