const accountId = 12345
let accountEmail = "as@gmail.com"
var accountPassword = "12345"
accountCity = "Ranchi"
let accountState;

// accountId = 2    Not allowed
accountEmail = "sdfs@gmail.com"
accountPassword = "asdfsdf"
accountCity = "Bangalore"

console.log(accountId);

/*
Prefer not to use var
Beacause of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
