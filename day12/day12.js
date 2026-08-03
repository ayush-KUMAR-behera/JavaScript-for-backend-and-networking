// async function load(){
//     const response=await fetch("https://jsonplaceholder.typicode.com/todos/500");
//     const data=await response.json();
//     console.log(data);
// }

// load();
// node day12/day12.js

// async function getDataFromBackend(){
//     const response=await fetch("http://localhost:8080/user");
//     const res= await response.json();
//     console.log(res);
//     // console.log(response.json());
    
// }
// getDataFromBackend();

// fetch("http://localhost:8080/products",{
//     method:"POST",
//      headers:{

//         "Content-Type":"application/json"

//     },
//      body:JSON.stringify({

//         productName:"JavaDev",

//         price:4.5

//     })
// });

async function getUser(){
    try{
    const response= await fetch("http://localhost:8080/user/1");
    const result=await response.json();
    console.log(result);
    }
    catch(error){
        console.log(error);
        
    }
    
}
getUser();