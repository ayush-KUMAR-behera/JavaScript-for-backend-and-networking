/*
Day 1
Topic:
- Variables
- Data Types
- typeof
- Arrays
- Objects
*/

/*let name="Ayush";
let age=21;
age=22;
let isactive=true;
let vistTime;
let login=null;
let id=Symbol('123');
let anotherId=Symbol('123');
console.log(typeof name);//String
console.log(typeof age);//Number
console.log(vistTime);//undefined
console.log(typeof(typeof vistTime));//
console.log(typeof login);//OBj
console.log(typeof (typeof id));//--> type of , type of anyThing = String
*/
const rollNo=4028;
const course='Btech';
// course='Mtech';

let ayush=['Java','springBoot','Git','mySql',"Docker"];
console.log(ayush[4]);

const user1={
        id:1,
        name:"Ayush",
        age:22,
        skills:["Backend","fronted"],
        com:{
            comName:"delotee",
            role:"JavaDev"
        }
}

// console.log(user1.id);
// console.log(user1.skills[0]);
// console.log(user1.com.role);
console.log(typeof user1);
console.log(typeof ayush);