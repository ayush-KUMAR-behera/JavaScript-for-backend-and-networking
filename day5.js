let numbers=[18,45,28,37,86];
let names=["jaga","harry","durga"];
let mixed=["react",true,99,undefined];

// console.log(numbers);
// console.log(names);
// console.log(mixed);

console.log(mixed[2]);//99
console.log(names[0]);//jaga
console.log(numbers[1]);//45

names[0]="Kanha";
console.log(names);

console.log(mixed.length);//4

let fruits=["apple","banana","orange"];
//push--> add element in last
//pop---> delete element in last
//unshift--> add element at first
//shift--> delete element at first

fruits.push("guava");
fruits.push("lichi");
console.log(fruits);
console.log(fruits.pop());
fruits.unshift("pinaapple");
fruits.unshift("watermilon");
console.log(fruits);
console.log(fruits.shift());


let language=["c","java","python","go","rust"];
console.log(language.indexOf("java"));//1
console.log(language.indexOf("php"));// -1

console.log(language.includes("python"));//true
console.log(language.includes("js"));// false

//loop
for(let i=0;i<language.length;i++){
    console.log(language[i]);
}

// Array of Object
const users=[
    {id:1,name:"Ayush"},
    {id:2,name:"lucy"},
    {id:3,name:"rahul"}
];

console.log(users[0].name);//Ayush
console.log(users[2].id);//3



const marks=[65,78,90,45,88];
let sum=0;
for(let i=0;i<marks.length;i++){
    sum=sum+marks[i];
}
console.log("Sum of marks:"+sum);
console.log("Avg of marks:"+sum/marks.length);



