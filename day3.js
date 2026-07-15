// for loop
/*
console.log("Good night");
for(let i=1;i<=5;i++){
    console.log("Good night with loop");
}
for(let i=5;i>=1;i--){
    console.log(i);
}
*/

// While loop
/*
let i=1;
while(i<=3){
    console.log("Stay focus");
    i++;
}
*/
// do while   -> execute at least one time
/*
let i=1;
do{
    console.log(i);
    i++;
}while(i<=3);

let j=10;
do{
    console.log(j);
    i++;
}while(j<5);
*/
// break-> stop the loop immediately
/*for(let i=1;i<=10;i++){
    if(i==3){
        break;
    }
    console.log(i);
    
}
*/
// continue -> skips the current iteration
/*
for(let i=1;i<=5;i++){
    if(i==3){
        continue;
    }
    console.log(i);
}
*/

// practice
// 1->  print 1 to 10
for(let i=1;i<=20;i++){
    console.log(i);
}
// 2 -> 20 to 1
for(let i=20;i>=1;i--){
    console.log(i);    
}
// 3 -> even number 1-20
for(let i=1;i<=20;i++){
    if(i%2==0){
        console.log(i);
    }
}
// 4 odd number 1-20
for(let i=1;i<=20;i++){
    if(i%2!=0){
        console.log(i);
    }
}
// 5  find sum 1-10
let sum=0;
for(let i=1;i<=10;i++){
    sum=sum+i;
}
console.log(sum);
// 6 table 7
for(let i=1;i<=10;i++){
    console.log(i*7);
}
// 7 print ele of arr
const skills = ["Java", "Spring Boot", "SQL", "Docker"];
for(let i=0;i<skills.length;i++){
    console.log(skills[i]);
}
// 8 stop loop using break
for(let i=1;i<=10;i++){
    if(i==6){
        break;
    }
    console.log(i);  
}
// 9 continue
for(let i=1;i<=6;i++){
    if(i===5){
        continue;
    }
    console.log(i);  
}
//10 print names from obj
const users = [
    {name: "Ayush"},
    {name: "Rahul"},
    {name: "Rohan"}
];
for(let i=0;i<users.length;i++){
    console.log(users[i].name);
}