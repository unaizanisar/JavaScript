//Object mapping in JS practice
const student =[
    {
        name : "Unaiza",
        rollNo : 22,
        session : "B5",
        gender : "female"
    },
    {
        name : "Laiba",
        rollNo : 23,
        session : "B5",
        gender : "female"
    },
    {
        name : "Fatima",
        rollNo : 21,
        session : "B5",
        gender : "female"
    },
    {
        name : "Ali",
        rollNo : 20,
        session : "B5",
        gender : "male"
    },
    {
        name : "Osman",
        rollNo : 20,
        session : "B3",
        gender : "male"
    }

]
//object mapping hr.employees(filter)
const filterOutStudents = {
    
    "should-be-a-female" : student.filter((studentData)=> studentData.gender === "female"),
    "session-should-be-B5" : student.filter((studentData)=> studentData.session === "B5"),
    "age-should-be-greater-than-20" : student.filter((studentData)=> studentData.age > 20),

}

function get(input){
    console.log(filterOutStudents[input])
}

get("should-be-a-female")


