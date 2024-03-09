// there are two types of memory 1) stack and 2) heap
// stack for primitive datatypes and follows call by value approach
// heap for non-primitive datatypes and follows call by refrence approach
//------------------example of stack---------------------------------------------------
let animal = "tiger"
let mammal = animal
 mammal = "lion"
console.log(animal);
console.log(mammal);
/* here original value of animal is tiger and it is not changed however stack memory have issues
a copy of animal variable and we have changed that to lion but the original value is still intact because
we have changed things in a copy given by stack
*/

//------------------------------Example of heap------------------------------------------------------------
let object1 = {
 name : "Marty",
 email: "martyinmadagascar123@hotmail.com"
}
console.log(object1.email);

let object2 = object1 

object2.email = "kowaskimadagascar@hotmail.com"

console.log(object1.email);

/* as you have seen the changes we have done in object 2 does reflect on object1 because non primitive 
datatypes uses heap and heap gives the address of the element and when you change something while
accessing the address of that element that means you are changing in original value as well because 
of the address (reference) so that's heap for ya ;)

*/

let function1 = {
     a : 5
};

let function2 = {
   b : 9
   c : console.log(b)
};

function2 = function1
