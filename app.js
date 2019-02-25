console.log('starting app');
const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js'); 
/*let user = os.userInfo();

fs.appendFile('greetings.txt', `hello ${user.username}! You are ${notes.age}.`, (err) => {
	if(err) throw err;
	console.log('the "hello world" was append to file');
}); */

var res = notes.addNote();
//console.log('Result:', notes.add(3, 2)); 

//console.log(_.isString(true));
//console.log(_.isString("Luis"));

var filteredArray = _.uniq(['Luis', 1, 'Luis', 1, 2, 3, 4]);
console.log(filteredArray);