const accountId = 212554
let name = "Parth"
let City = "Agra"
let Home = "Vrindavan"
var password ="68854"
let email = "Rancom@hotmail.com"
let state // agar js ke andar variable declare karke usse define nhi karte h toh javascript usse undefined
// maanti h
console.table({name,Home,accountId,email,password,state})

/* password se pehle yaha humne var keyword ko use kia h lekin aage future me hum var ko use 
nhi karenge kyunki woh bhot old fashioned h also usse se probems bhi create ho sakti h*/

// why use only let and const?
/*
const toh constant define karne ke liye
aur let use karte h scope ki problem ko solve karne ke liye
scope ki problem?
javascript back in the days had a major issue, it does not know the concept of "scopes" in variables ({})
so what problem arises due to this was suppose a user has defined a variable in a file and logged off
now another user logged in and used some conditions and loops in that file now while writing the variables
inside those condtions and loops scopes user 2 has accidently used the same name as 
user 1 used to define some varible now that user1 variable will get changed wherever ther 1 has used it
so in order to solve this major problem we use "let" keyword before declaring a variable to tackle this.
*/