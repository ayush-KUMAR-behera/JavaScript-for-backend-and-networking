// Template Literals

/*
//Before ES6
const name="Ayush";
const age=22;
console.log("My name is"+name+" and age:"+age);
//ES6
console.log(`My name is: ${name} and age is:${age}`);
let a=10;
let b=20;
console.log(`Sum: ${a+b}`);
*/

// Multi-line Strings

/*
// old JS
console.log("hello\nworld");
// Modern
console.log(`
    Hello
    Stay
    Focused
    `);
*/

//Default parameter

/*
function greet1(name){
    console.log(`Hello: ${name}`);
}
greet1(); // Hello: undefined
function greet2(name="User") {
    console.log(`Hello: ${name}`);
}
greet2(); // Hello: User
*/

// Arrow function advanced

/*
const add1=(a,b)=>{
    return a+b;
};

const add2=(a,b)=>a+b;

console.log(add1(10,20));//30
console.log(add2(10,20));//30

const sq=x=>x*x;
console.log(sq(10));//100
*/

// Enhanced Object Literals
/*
const name="Godhi";
const age=75;
const role="chor";

const user1={
    name:name,
    age:age,
    role:role
};
console.log(user1);

// Modern

const user2={
    name,
    age,
    role
}
console.log(user2);
*/

// Object Methods
/*
const user1={
    name:"Ayush",
    greet(){
        console.log(`Hello: ${this.name}`);
    }
}
user1.greet();
*/

// OPtional Chaining(?.)
/*
const student={
    name:"Ayush"
};

// console.log(student.address.city); //error address doesn't exist
// console.log(student.addres?.city); //undefined
const user={
    address:{
        city:"Bbsr"
    }
}
// console.log(user.address?.city); //bbsr
console.log(user.address?.pin);  // undefined
*/

// Nullish Coalescing ( ? ? )

/*
let username=null;
console.log(username||"Guest"); // Guest
username=null;
console.log(username??"Jhon"); // Jhon
username="Alex";
console.log(username??"Demo");// Alex


console.log(0||100); //100
console.log(100||0);//100

console.log(0??100); //0
console.log(100??0); //100
*/

// Modules
import {add, sub} from "./math.js";

console.log(add(10,5)); // 15
console.log(sub(10,5)); // 5

/*
  Interview Question

  Q1 Hello Ayush
  Q2 Guest
  Q3 36
  Q4 undefined bcz of optional chaining
  Q5 0
  Q6 Java

*/





