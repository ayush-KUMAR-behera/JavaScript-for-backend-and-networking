// Synchronous
/*
console.log("Start");
console.log("Download File 2GB");
console.log("End");
// op--> start - download File 2gb - End , js is single thread
*/
// Asynchronous
/*
console.log("Start");
setTimeout(()=>{
    console.log("Download Movie");
    
},3000);
console.log("End");
// op--> start- end -- download movie ,bcz it a browser method it not only execute by js engine 
*/

//Nested Function
/*
function one(){
    console.log("one");
}
function two(){
    one();
    console.log("two");   
}
two(); // in call stack two then go to one -> one excute remove two excute remove-->one --> two
*/

// Assignment
//Q1 Sysnchronus Programing
/*
console.log("1");
console.log("2nd")
console.log("3rd");
function greet() {
    console.log("Good Evening");
}
greet();
console.log("4th");
*/

//Q2 Observ CallStack
/*
function  login(name,pwd) {
    if(name=="Ayush"&&pwd==1234){
        console.log("Login Success Full");
    }else{
        console.log("Wrong input");
    }    
}

function fetchProfile(){
    let userId="cjp";
   console.log(`User id: ${userId}`);
}
function  displayProfile() {
    const user={
        name:"Ayush",
        role:"FullStackEngineer",
        id:123
    }    
    console.log(user); 
}
login("Ayush",1234);
displayProfile();
fetchProfile();
*/
/*
console.log("Ayush");
setTimeout(()=>{
    console.log("Behera");
});
console.log("Kumar");
//op--> Ayush,Kumar,Behera
*/

// Understand JS Engine,Callback Queue,Event loop,Call Stack

/*
console.log("Start");
setTimeout(()=>{
    console.log("Callback 1");
},1000);
setTimeout(()=>{
    console.log("Callback 2");
    
},2000);
setTimeout(()=>{
    console.log("Callback 3");
    
},3000);
function welcome(name) {
    console.log("welcome :"+name);
}
welcome("Ayush");
console.log("End");
// op--> Start, Welcome Ayush,End,cb 1,cb 2,cb 3
// what happen js excute line by line go to and store in callStack when it found settimeout it send to browser,then browser calculate time and add to Callback Queue(FIFO) then event check callstack empty or not if empty excute what inside Callback Queue
// 
*/

// Callback function()--> A function that take another function as input/or in argument
/*
function sum(a,b){
    console.log(a+b);
}
function result(input){
    input(10,20);
}
result(sum);
//op ->30
*/

// CallBack Hell
/*
const skill=()=>{
    (()=>{
        console.log("Login");
        (()=>{
            console.log("FetchSkill");
            (()=>{
                console.log("Spring Boot");
            })();
        })();
    })();
};

skill();
*/




