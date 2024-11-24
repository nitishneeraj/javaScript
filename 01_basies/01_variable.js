const accountId = 1222; //lock variable  con't change
let accountEmail = "abc@gmail.com";
var accountPassword = '12345 dd6';
let accountState;

console.log(accountId);
/*
Prefer not to use var
beacuse is issue in black scope and functional scope 
        scope {}

*/
console.table([accountEmail,accountId,accountPassword,accountState]);