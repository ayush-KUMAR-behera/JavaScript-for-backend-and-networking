// function

function greet(time) {
    if(time<12){
        console.log("Good Morning");
    }else if(time<18){
        console.log("Good Afte Noon");
    }else if(time<22){
        console.log("Goood evening");
    }else{
        console.log("Good Night");
    }
}

greet();

// Anonymus Function
/* function(){
    console.log("Anonymus function don't have any name");    
} */

// Named function--> a function have name
function add(a,b){
    console.log(a+b);
}
add(5,9);// 14 -> a,b--> a--5,b--9 -> a+b--> 5+9--> 14
add(5,9,2);//14 a=5,b=9 2-> a+b-> 5+9-> 14
add(5);//NAN --> a=5 ,b=NAN a+b-> 5+NAN--> NAN
// default value
function add2(a=0,b=0){
    console.log(a+b);
}
console.log(5);// 5-> a=0,b=0,a=5 -> a+b=5+0 ->5

// return 
function mul(a){
    return a*a;
}
let value=mul(5);
console.log(value);// 25


// function expresion --> hideing a function inside a variable
let phone=function call(name) {
    console.log("Call to:"+name);
}

phone("ayush");

// Arrow Function
const wish=()=>{
    console.log("Wish u a healty life");   
}
wish();

const square=(num)=>{
    return num*num;
}

let sq=square(10);
console.log(sq);// 100


// function scope
let today="RathYatra";
function  jully() {
    console.log(today);
}
jully(); // RathYatra

function  night() {
    let timw=11;
    console.log("good night at:"+timw);
    
}
// console.log(time); // Reference error


//  PRACTICE
// 1
function  birthDay(name) {
    console.log("Wish you a very happy birthday:"+name);
}

birthDay("Dhoni");
//2 
function  ADD(a=0,b=0) {
    console.log(a+b);
}
ADD(4,5);//9
//3
function multiply(a=1,b=1){
    console.log(a*b);
}
multiply(2,3);//6
//4

function  isEven(num) {
    if(num%2==0){
        return true;
    }else{
        return false;
    }
}

console.log(isEven(5));// false
console.log(isEven(6));// true

// 5
function findLargest(a=0,b=0) {
    if(a>b){
        return a;
    }else{
        return b;
    }
}

console.log(findLargest(10,9));//10
// 6
const q=(num)=>num*num*num;
console.log(q(2));// 8
// 7
const checkVote=(age)=>{
    if(age>=18){
        console.log("Eligible");
    }else{
        console.log("Not Eligible");
    }
}

checkVote(22);// Eligible
checkVote(16); // notEligible
// 8
let a=['java','springboot','sql','docker'];
const print=(x)=>{
    for(let i=0;i<x.length;i++){
        console.log(x[i]);
        
    }
}
print(a);
//9
const findGrade=(mark)=>{
    if(mark>90){
        console.log("A");
    }else if(mark>75){
        console.log("B");
    }else if(mark>60){
        console.log("C");
    }else if(mark>=33){
        console.log("D");
    }else{
        console.log("FAIL");
    }
}

findGrade(9);
// 10
const calculateBill=(price,quantity)=>{
        return price*quantity;
    }



console.log(calculateBill(100,2));// 200

