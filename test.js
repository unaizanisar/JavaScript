console.log("Working on student's data")

let student={
    firstName:"Unaiza",
    lastName:"Nisar",
    rollNo:1,
    age:22,
    city:"Lahore",
    institute:"Kips",

    study(){
        return "Programming"
    }
}
//array
let subjects = ["HTML","CSS","Bootstrap","JavaScript"]
console.log("\n");

//manuallay printing

// used template literals to avoid complexity

console.log("Student's Information:");
console.log(`Student's name is:     ${student.firstName} ${student.lastName}`)
console.log(`Student's roll no. is: ${student.rollNo}`)
console.log(`Student's age is:      ${student.age}`)
console.log(`Student's city is:     ${student.city}`);
console.log(`Student's institute is:${student.institute}`);

console.log("\n")

//if else 
if(student.firstName=="Unaiza" && student.lastName=="Nisar"){
    console.log("Student roll number is 1")
}
else{
    console.log("Student is not the part of class")
}

if(student.city=="Lahore" && student.institute=="PU"){
    console.log("Student is not the part of class")
}
else{
    console.log("Student lives in Lahore")
}
console.log("\n");

//for in loop
console.log("FOR IN LOOP")
console.log("\n");
for(let key in student){
    console.log(student[key])
}
console.log("\n");

for(let key in student){
    console.log(key+":"+student[key])
}
//for of loop
console.log("\n");
console.log("FOR OF LOOP")
console.log("\n");
console.log("SUBJECTS")
for(let value of subjects){
    console.log(value)
}

console.log("\n");

//delete roll number 
console.log("DELETION")
console.log("Deleting roll number")
delete student.rollNo
console.log("\n")

//for in loop to print after deleting roll number
console.log("Again using for in loop to print student data")
console.log("\n")

for(let key in student){
    console.log(key+":"+student[key])
}

console.log("\n")

//parse
console.log("PARSING")
console.log("TO STRING")
let x = subjects.toString()
console.log(subjects)
console.log("\n")

console.log("TO INT")
let stringX = "Hello"
console.log(stringX)
let a = parseInt(stringX)
console.log(a)

console.log("TO INT")
let stringY = "10"
console.log(stringX)
let y = parseInt(stringY)
console.log(y)

console.log("TO FLOAT")
let stringZ="1000"
let z = parseFloat(stringZ)
console.log(z)
