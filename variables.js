const accountId = 1
let accountEmail = "anuska@google.com"
var accountPassword = "12345"
accountCity = "Kathmandu"

// accountId = 2 //not allowed

/*
preferred not to use var 
because of issues in block scope 
and functional scope

*/

accountEmail = "abc@abc.com"
accountPassword = "2222"
accountCity = "Bhaktapur"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity])

