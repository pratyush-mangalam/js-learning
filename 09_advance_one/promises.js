 const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve()
        console.log("Async Task completed");      
    }, 1000)
 })

 promiseOne.then(function(){
    console.log("Promise comsume");
    
 })

 new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    }, 1000)
 }).then(function(){})


 fetch("https://api.github.com/users/pratyush-mangalam")
 .then((response) => {
    console.log(response);
    
 })
 .catch(function(){
    console.log("Error");
    
 })

