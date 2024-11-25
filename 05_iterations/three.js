// for of loop

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}

const greeting = "Hello World"

for (const greet of greeting) {
    // console.log(greet);
    
}

//  Maps

const map = new Map()
map.set('IN', 'India')
map.set('US', 'USA')
map.set('FR', 'France')

// console.log(map) 

for (const [key, value] of map) {
    console.log(key);
    console.log(value);
    
    
}

const myObject = {
    'game1': 'NFS',
    'game2': 'SpiderMan'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
