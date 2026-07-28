
/*
const promise1=new Promise((resolve,reject)=>{
    resolve("Login Sucees full")
});

promise1.then(result=>{
    console.log(result);
})

const promise2=new Promise((resolve,reject)=>{
    reject("Invalid Password");
});
promise2.catch(error=>{
console.log(error);
});

let age=12;
const promise3=new Promise((resolve,reject)=>{
    if(age>=18){
        resolve("Eligible to Vote");
    }else{
        reject("Not Eligible");
    }
})

promise3
.then(result=>{
    console.log(result);
})
.catch(err=>{
    console.log(err);
    
});

const promise4=new Promise((resolve,reject)=>{
    let isActive=true;
    if(isActive){
        resolve("Send Name and Email")
    }else{
        reject("Register Again...")
    }
});

promise4
.then(ans=>{
    console.log(ans);
})
.catch(err=>{
    console.log(err);
})
.finally(()=>{
    console.log("Thank You Visit Again");
});
*/
/*
const payment=new Promise((resolve,reject)=>{
    let status=false;
    if(status){
        resolve("Payment SuccessFull \n Receipt Generated ")
    }else{
        reject("Payment Failed \n Receipt Closed")
    }
});

payment
.then(res=>{
    console.log(res);
})
.catch(err=>{
    console.log(err);
})
.finally(()=>{
    console.log("Transaction Completed");
    
});
*/

/*
console.log("A");
Promise.resolve().then(()=>{
    console.log("B");
});
console.log("c");
//op--> A,C,B bcz promise go to microtaskqueue
*/

/*
console.log("1");

setTimeout(()=>{
    console.log("2");    
},0);

Promise.resolve().then(()=>{
    console.log("3"); 
});
console.log("4");
// o/p --> 1, then settimeout go to macrotaskQueue, then promisego to microtask Queue, then excute 4  now callstack empty -> and priority go to microtask queue so 3 then call stack check microtask empty then go to macro and execute 2 so OutPut--> 1,4,3,2
*/
/*
console.log("X");
setTimeout(()=>{
    console.log("Y");
},0);

setTimeout(()=>{
    console.log("Z");
},0);

//op--> X ,then settimeout add in macrotask Queue ,then call stack is empty check microtask also empty excute macrotask one by one--> X,Y,Z
*/

//ASSignment
//1
/*
Promise.resolve().then(()=>{
    console.log("Promise1");
});
setTimeout(()=>{
    console.log("SetTimeout1");   
},0);
Promise.resolve().then(()=>{
    console.log("Promise2");
}) ;
//op--> promis1-promise2-setTimeout1
*/

//2
/*
Promise.resolve().then(()=>{
    console.log("P1"); 
});
Promise.resolve().then(()=>{
    console.log("P2"); 
});
Promise.resolve().then(()=>{
    console.log("P3"); 
});
setTimeout(()=>{
    console.log("ST1");
},0);
setTimeout(()=>{
    console.log("ST2");
},0);
//op--> P1,P2,P3,ST1,ST2
*/
console.log("Start");

setTimeout(() => {
    console.log("Timer 1");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise 1");
});

setTimeout(() => {
    console.log("Timer 2");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise 2");
});

console.log("End");

//OP--> Start,End,Promise 1,Promise 2,Timer 1,Timer 2