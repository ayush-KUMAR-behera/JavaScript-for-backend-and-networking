/*
let name="Ayush";
let age=19;
let isEmployeed=false;
let getJob;
let future=null;
let mob=8080879807n;
let a=["jndcj","noiufdoi","osodban","oabnb"]
console.log(typeof(typeof a));
const emp={
    name:"Ayush",
    age:22,
    role:"JavaDev",
    yop:2026,
    skils:['Java','SpringBoot',"Security","Docker"],
    address:{
        city:"BBSR",
        State:"ODISHA"
    }
}
console.log(emp.skils);
console.log(emp.skils[1]);
let arr=["Selfrespect","Disipline","Angry"];
// push--> add at last pop-> del at last, unshift--> add at first, shift--> delete at first
console.log(arr.pop());
console.log(arr);
arr.push("Patience");
console.log(arr);
arr.unshift('FellStuck');
console.log(arr);
console.log(arr.shift());
console.log(arr);

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
let j=1;
while(j<=5){
    console.log("Yes, I can get a job") ;
    j++;
}
let k=19;
do{
    console.log("I get a job as javaDev");
}while(k<10);

let arr=[95,64,59,70,86,82];
// arr.slice
let res1=arr.slice(0,3);
console.log(res1);//95,64,59
console.log(arr);//95,64,59,70,86,82

let res2=arr.splice(0,3);
console.log(res2);//95,64,59
console.log(arr);//70,86,82

for(let a of arr){
    console.log(a);
}

let Ayush=["Don't fear","Confidence","Good Communicator"];
//for each
Ayush.forEach((z)=>{
    console.log(z);
})

//implicity conversiobn
console.log("10"+10);//1010
console.log("10"-9);//1
console.log(9-"10");//-1
console.log("2"+2);//22
console.log(+"2"+2);//4 implicity conversion
console.log(+"2"+2-1);//3
console.log(typeof +"2"-1);//NAN
console.log(typeof (+"2"+2));

// Explicit type conversion
let a=String(true);
console.log(a);//true
console.log(typeof a);//String
let b=Number("123");
console.log(typeof b);

let age=Number(prompt("Enter your Age:"));
if(age>=18){
    document.writeln("<h1>Your Eligible for Voting</h1>");
}else{
    document.writeln("<h1>You are not eligible for voting</h1>");
}

const obj={
    name:"Ayush",
    age:22,
    add:{
        city:"bbsr"
    }
}
for(let o in obj){
    console.log(obj[o]);
    
}
const arr=[12,8,6,4.5];
for(let a in arr){
    // console.log(a);//0,1,2,3
    console.log(arr[a]);
    
}

// Function 
// 1 Named Function -> function have name
function greet(){
    console.log("Always stay in ur peace");
}
greet();
function addition(a,b){
    console.log(`a=${a} and b=${b}, sum=${a+b}`)
}
addition(9,6);

// Anonymus Function--> a fun don't have name
function(){
    console.log("Nameless Function");   
}

// Function expersion --> store function with in a variable
let a=function(){
    console.log("Function A");
} 
a();

// Arrow function->(ES6) without function keyword we call a function
let x=(()=>console.log("Function X")
);
x();
let mul=((a,b)=>a*b);
console.log(mul(5,3));//15
// Function with return
function square(num){
    console.log("Before return");
    return num*num;
    console.log("After return");// not execute after rtn
}
const res=square(4);//Before Return
console.log(res);//16

//Default parameter
function add(a=0,b=0){
    console.log(a+b);
}
add();//0
add(5);//5+0=5
add(5,5);//5+5=10
add(5,5,5);//10

//hosting
console.log(a);
var a;
console.log(a);

hello()
function hello(){
    console.log("Hello");
    
}

//Nested Function-> a function inside another function

function parent(){
    console.log("Parent Function");   
}

function child(){
    parent();
    console.log("Child Function");
}

child(); // Parent-> Child

//function curring-> call child fun() along with parent()
function parent(x){
    console.log("Parent have:"+x);
return function child(y){
    console.log("Child have:"+y);
}
}
parent("Property")("Skills");
*/
// HOF--> High Order Function --> a function accpect another function as an argument
function demo(x){
    console.log(x);
}
function  remo(){
    console.log("remo");
}
demo(remo);// demo is HOF 

function task1(a,b){
    return a+b;
}
function task2(a,b){
    return a-b;
}

function calculate(x,y,task){
    const res=task(x,y);
    console.log(res);
}
calculate(10,5,task1);//15
calculate(10,5,task2);//5
//here calcualte is HOF bcz it accpect function as argument
//task1,task2 is called as callback function as it send to in argument

