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
