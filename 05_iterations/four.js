
// const myObject = {
//     js: 'JavaScript',
//     cpp: 'C++',
//     rb: "ruby"
// }

// for (const key in myObject) {
//     console.log(`${key} :- ${myObject[key]}`);
// }

// const program = ['js', 'c++']

// for (const key in program) {
//     console.log(key);
    
// }

const coding = [1,2,3,4,5]

// coding.forEach(function (item) {
//     console.log(item);
    
// })

// coding.forEach((item) => {console.log(item);
// })

// function printMe(item) {
//     console.log(item);
    
// }
// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
    
// })

const myCoding = [
    {
        languageName: "JS",
        languageFile: "js"
    },
    {
        languageName: "JAVA",
        languageFile: "java"
    },
    {
        languageName: "Python",
        languageFile: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    
}
)