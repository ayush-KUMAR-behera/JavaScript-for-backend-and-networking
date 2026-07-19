 /*
 Objects
 Nested Objects
 Array of Objects
 Object Destructuring
 Spread Operator (...)
 Rest Operator (...)
 JSON
 JSON.stringify()
 JSON.parse()
 */

// Object -> an Objects store data in key value pairs

/*
const user={
    id:1,
    name:"Ayush",
    age:22,
    city:"BBSR"
};
console.log(user);
// Access Properties 1-dot Notation 2->Bucket Notation
console.log(user.name);//Ayush
console.log(user.age);// 22
//2 Bucket Notation
console.log(user["city"]); // bbsr
console.log(user["id"]);  // 1

// Update USer
user.city="Blr";
console.log(user);
// Add new Property
user.skill="Spring Boot";
console.log(user);
//Delete Property
delete user.age;
console.log(user);
*/
// Nested Objects
/*
const student={
    name:"Ayush",
    address:{
        city:"Bhubaneswar",
        state:"Odisha",
    },
    college:{
        degree:"Btech",
        name:"REC"
    }
};
console.log(student.address.city);// bhubaneswar
console.log(student.college.degree);// Btech
*/

// Array of Objects

/*
const employee=[
    {
        id:1,
        name:"Ayush"
    },
    {
        id:2,
        name:"Rahul"
    }
];
console.log(employee[0].id);//1
console.log(employee[1].name);//Rahul
*/

// Object Destructuring --> Object key name must be same

/*
 // old javaScript
 const user={
    name:"Ayush",
    age:22
 }
 console.log(user.name);
 console.log(user.age);
 // Modern javascript
 const{name,age}=user;
 console.log(name);
 console.log(age);
// Rename while Destructuring
const{name:userName}=user;
console.log(userName);

const employee = {
  id: 101,
  fullName: "Rahul Kumar",
  socials: {
    twitter: "@rahul_codes",
    github: "rahul007"
  }
};

const{socials:{ github }}=employee;
console.log(github);
*/

// Spread Operator

/*
const skills=["java","SQL"];
const newSkills=["java 8",...skills,"cloud"];
console.log(newSkills);

const fronted=["Angular","React"];
const backend=["springboot",".net"];
const fullStack=[...fronted,...backend,"sql","nosql"];
console.log(fullStack);
*/

// Copy Object

/*
const user={
    name:"Ayush",
    age:22
};
const copy={
    ...user
};
console.log(copy);
*/

// Rest Operator(...) --> Collects multiple argument into an array

/*
function total(...numbers){
    console.log(numbers);
}

total(10,20,30,40,50);
*/

// JSON --> JavaScript Object Notation
// JSON is a text JavaScript Object is actial object

/*
    OBJECT
    const user={
        id:1,
        name:"Ayush"
    }
*/

/*
    JSON
 {
    "id":1,
    "name":"Ayush"
 }
 */
 
// JSON.stringify()
// convert Object --> JSON string

/*
const user={
    id:1,
    name:"ayush"
}

const json=JSON.stringify(user);
console.log(json);
console.log(typeof json);// String
*/

// JSON.parse()
// Convert JSON string ---> JavaScript Object
/*
const json='{"id":1,"name":"Ayush"}';
const obj=JSON.parse(json);
console.log(obj);
*/

/*
Prediction Question

22
Banglore
Java,SQL
1,2,3
"name":"Ayush"

 */

// Challenge
const product={
    id:1,
    name:"Laptop",
    price:"50000"
};

const json=JSON.stringify(product);
console.log(json);
const obj=JSON.parse(json);
console.log(obj);
console.log(product.name);






