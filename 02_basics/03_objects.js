// singleton

// object liyerals
// object.Create

let s = Symbol("mySym")

const jsUser = {
    name: "Pratyush",
    "full name": "P K Mangalam",
    age: 28,
    [s]: "hello",
    location: "Bengaluru",
    isLoggedIn: false,
    email: "asdas@gmail.com",
    lastLoginDays: ["Mondays", "Saturday"]
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(jsUser[s])
// console.log(jsUser);
// Object.freeze(jsUser)

jsUser.myFunc = function myFunction() {
    console.log("Welcome to my chanel");
}


console.log(jsUser);

jsUser.myFunc()

const obj1 = {
    1:"a",
    2:"b"
}

const obj2 = {
    3:"a",
    4:"b"
}

const obj3 = Object.assign({}, obj1, obj2)

const obj4 = {...obj1, ...obj2}

console.log(obj3);
console.log(obj4);

const course = {
    name:"Pratyush",
    price:999,
    courseInstructor:"Hitesh"
}
 
const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);