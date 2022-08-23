//STACK BASICS

//DEFINITIONS
// Last in first out

// Example
// Stack of books
// browser back button
//CODE

// Functions 
//push - placing data on a stack
// pop -removing top element of stack
//peek - displaying top element of a stack
//length-determiining how many elements are in a stack

// array obj alreay has all the function


let letters = []

let word = 'racecar'
let rword = ""

for (const s of word) {
  console.log(s)
  letters.push(s)
}

// checking if a word is a parlindrome
// for (const s of word) {
//   console.log(s)
//   letters.push(s)
// }

// letters.forEach((letter)=>{
//     rword += letter
// })


console.log('current letters variable after pushing', letters)

//popping
letters.pop()
console.log('current letters variable after popping', letters)



