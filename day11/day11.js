//Part-1
// async --> tells js function return promise
/*
async function hello(){
    return "Hello";//Internaally Promise.resolve("Hello")
}
console.log(hello());// Promis{'Hello'}

async function age(){
    return 22; // internalyy Promise.resolve(22);
}
age().then((res)=>{
    console.log(res); 
});
*/

// await --> It excute always indide async function and ,It tell JS to stop current async fun() excution here let Promise resolve,js engine not stop

/*
// Without await 
const promise=Promise.resolve("Spring boot");

promise.then((result)=>{
    console.log(result);
});

//With await

async function demo(){
    const result=await promise;
    console.log(result);
}

demo();

function getUser(){
    return Promise.resolve("Ayush");
}
async function display(){
    console.log("Start");
    const user=await getUser();
    console.log(user);
    console.log("End");
}
display();
// op-> Start-Ayush-End, first start when it found await pause getUser()- Promise fullfiled - resume getuser - end
*/
/*
PREDICTION QUESTION
1->Promise{'Java'}
2->100
3->Ayush
4->No await not stop whole js program it stop aysnc program where it avalable when promise fullfiled it resume
5-> we can't use await in normal function, but modern js support it 
 */
// Assign ment Part(1)
/*
//1
async function welcome(){
    return "Welcome to JavaScript";
}
welcome().then((res)=>{
    console.log(res); 
})

//2
async function square(num){
    return num*num;
}
square(8).then((res)=>{
    console.log(res);
    
})

async function getCompany(){
    return "Goggle";
}
async function display(){
    const com=await getCompany();
    console.log(com);
}
display();

async function getRole(){
    return "Java Full Stack Developer";
}
async function fresher(){
    const job=await getRole();
    console.log(job);
}
fresher();
*/

// Part 2

//Error Handling
// const promise=Promise.reject("Server Error 500");

//With out try catch it throw exception
/*
async function demo(){
    console.log("With out try catch");
    const res=await promise;
    console.log(res);  
}
demo();
*/

//with try catch we handel exception
/*
async function text(){
    try{
        const res=await promise;
        console.log(res);
    }catch(err){
        console.log(err);
    }
}
text();
*/

// Sequential Execution --> one by one
/*
function task(name){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log(name);
            resolve();
        },2000);
    });
}

async function run(){
    await task("Login");
    await task("Profile");
    await task("Dashboard");
}
run();
*/

// Parallel Execution --> at a time exceute (if time same)
/*
function task1(name){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log(name);
            resolve();
        },2000);
    })
}
function task2(name){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log(name);
            resolve();
        },2000);
    })
}

async function execute(){
    const t1=task1("Login");
    const t2=task2("Dashboard");
    await t1;
    await t2;
}
execute();
*/


// Promise all -->it solves the problem of paralal exceution but if 1 promise fail entire promise.all() fail;

/*
//Example-1
const p1=Promise.resolve("Java");
const p2=Promise.resolve("Spring");
const p3=Promise.resolve("React");

Promise.all([p1,p2,p3])
.then(result=>{
    console.log(result);
});
//Example-2 if 1 fail all fail
const t1=Promise.resolve("Profile");
const t2=Promise.reject("Invalid Login!!!");
const t3=Promise.resolve("Dashboard");

Promise.all([t1,t2,t3])
.then((res)=>{
    console.log(res);
})
.catch(err=>{
    console.log(err);
});
*/

// Promise.allSettled() -> 1 promise fail but except that we want all
/*
Promise.allSettled([
Promise.resolve("Login"),
Promise.reject("InValide"),
Promise.resolve("Fetch  Dashboard")
])
.then(console.log);
//Example Uses-> Weather,News,Stocks,Notifications-->If News API fails,Weather should still load.
*/

// Promise.race() // which promise execute first output is that promise

//example

const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Server A");
    },2000);
});
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Server B");
    },1000);
})
const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Server C");
    },3000);
})

Promise.race([p1,p2,p3])
.then(console.log)
.catch((err)=>{console.log(err);
});
 // Server B -> bcz it take 1s (even it fail it return B bcz it always return first excute code)


// // Promise.any() --> Ignore the failure returns First Successful Promise
Promise.any([p1,p2,p3])
.then(console.log);
Promise.any([
      Promise.reject("CSE"),
    Promise.resolve("CIvil"),
    Promise.resolve("EE")
])
.then(console.log);
//op--> Server A-> bcz server B fail after that A  is faster
//op--> Civil bcz cse fail & and any() return first success promise

/*
interviwe Question 
1-> all-> return al, promise or return 1st rejected promise
    allSetteled-> return all together fail,fullfiled
2-->
race()-> return first execute promise either it fail
any()-> return 1st succes promise among failure and fullfiled promise
3-> when we think promise may return error then i use try and catch
4-->sequention sequestion wise example all api response time 2s one by one excute
--> paralal excution -> if api response time 2sec all api excute at a time
5-->predict--> A,B
6-> Predict->nothing
Challenge--> i choose all-> bcz if something error happen i would see

 */
