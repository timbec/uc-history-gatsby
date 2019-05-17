Destructuring basically means unpacking. It allows easier access to properties in objects and arrays.

###The OFFICIAL description is: 
The destructuring assignment syntax is a JS expression that makes it possible to unpakc values from arrays, or properties from objects, into distinct variables. 

###Offical example: 
Arrays:
`
var a, b, rest; 
[a, b] = [10, 20]; 

console.log(a);
//10

console.log(b);
// 20

[a, b, ...rest] = [10, 20, 30, 40, 50]; 
console.log(rest); 
// [30, 40, 50]
`
Objects: 
`
({ a, b } = { a: 10, b: 20 });
console.log(a); //10
console.log(b); //20 

({a, b, ...rest} = {a: 10, b: 20, c:30, d: 40 }); 
console.log(a); 
console.log(b); 
console.log(rest); //{c: 30, d: 40}
`

### See other examples at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

`
const user = {
  firstname: 'Robin',
  lastname: 'Wieruch',
};

// ES5
var firstname = user.firstname;
var lastname = user.lastname;

console.log(firstname + ' ' + lastname);
// output: Robin Weiruch 

//ES6 
const { firstname, lastname } = user; 

console.log(firstname + lastname); 
// output: Robin Weiruch
`
For readability, use multilines when you destructure an object. 
`
const {
    firstname, 
    lastname
} = user; 
`

Arrays can be scanned as well: 
`
const users = [ 'Robin', 'TechLead', 'Dan']; 

const [
    UserOne, 
    UserTwo, 
    UserThree
] = users; 

console.log(userOne, userTwo, userThree );
`

By contrast (and illustration between ES5 and ES6): 
`
//ES5 
var searchTerm = this.state.searchTerm; 
var list = this.state.list; 

// ES6
const { searchTerm, list } = this.state; 
`