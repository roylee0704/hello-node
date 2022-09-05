//Name of the file : sha256-hmac.js
//Loading the crypto module in node.js
import crypto from 'crypto';

//MOPIC 
//username: Admin_11770_2
//pass: AdminPRI_2
const moc_screte = '$jwt@moph#';
const my_pass = 'AdminPRI_2';

//creating hmac object 
const hmac = crypto.createHmac('sha256', moc_screte);
//passing the data to be hashed
const data = hmac.update(my_pass);
//Creating the hmac in the required format
const gen_hmac = data.digest('hex');
//Printing the output on the console
console.log("hmac : " + gen_hmac.toUpperCase());
