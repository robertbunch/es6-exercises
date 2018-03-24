let city = `Chicago` //data we got from somewhere else (api or database)
let userId = 3; //data we got from somewhere else (api or database)
let command = `SELECT *`;
let table = `users`;
let whereClauses = [
 `uid = ${2+1}`,
 `OR city = ${city}`
]
 
// Your code to call the tag and log the return value here...
 
// Spread syntax is a more common and easy here if you are comfortable with it
function checkQuery() {
//Your validation code here...
 return(finalQuery); 
}