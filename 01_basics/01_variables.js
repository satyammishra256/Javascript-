const accountId=12345
let accountEmail="satyam@112233"
var accountPassword="98765"
accountCity="prayagraj"
let accountState

//accountId=2 this is not allowed as const cant be redeclared and re-assign
accountEmail="satyam@164"
accountPassword="02052006"
accountCity="edinburgh"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


