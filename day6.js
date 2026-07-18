// slice() --> not change the array, rtn ele not include last index
/*
let numbers=[10,20,30,40,50];
let result=numbers.slice(1,4);// 1,2,3
console.log(result);//20,30,40
 console.log(numbers);//10,20,30,40,50
 */

 /*
//  splice() -> change array , remove element -> include 1st last index
let numbers=[10,20,30,40,50];
let result=numbers.splice(1,2);
console.log(result);// 20,30
console.log(numbers);//10,40,50

//adding
let fruits=["appele","banana","orange"];
fruits.splice(2,0,"mango");// in 2 add "mango" and delete 0 element
console.log(fruits);// appele,banana,mango,orange

//replace
let skills=["java","python","SQL"];
skills.splice(1,1,"React")//->add 1 react delet 1 elemet
console.log(skills);//java,React,SQL
*/
// for of
/*
let cars=["Audi","BMW","LAMBO","KIA"];
for(const car of cars){
    console.log(car);
}
*/
//for each
/*
 const travel=["Blr","USA","UK","Pune"];
 travel.forEach(function(t){
    console.log(t);
    
 });
 */
// map --> it creates  a new array
/*
const numbers=[1,2,3];
const sq=numbers.map(n=>n*n);
console.log(sq);

//Backend example
const users=[
    {name:"Ayush"},
    {name:"Rahul"}
];

const names=users.map(user=>user.name);
console.log(names);
*/

// filter -> keep only matching
/*
const nums=[10,11,14,15,16];
const odd=nums.filter(n=>n%2==0);
console.log(odd);
*/
// Backend example using map() & filter()
/*
const users=[
    {
        "id":1,
        "name":"Ayush",
        "salary":50000
    },
    {
        "id":2,
        "name":"Rahul",
        "salary":70000
    }
];
// need only names
const names=users.map(user=>user.name);
console.log(names);
// need employee eraning more than 60000
const money=users.filter(sal=>sal.salary>60000);
console.log(money);
*/
/* prediction 
    1-> 20,30
    2->10,20,40
    3->10,20,30
    4->12,14
    5->java,SQl
*/
let skills=["java","cloud","ai"];
const sde2=skills.map(ch=>ch.toUpperCase());
console.log(sde2);

// challenge 
const employees = [
    {name:"Ayush",salary:90000},
    {name:"Rahul",salary:70000},
    {name:"Lucy",salary:50000},
    {name:"Rohan",salary:40000}
];
const names=employees.map(emp=>emp.name);
console.log(names);
const sal=employees.filter(emp=>emp.salary>50000);
console.log(sal);



