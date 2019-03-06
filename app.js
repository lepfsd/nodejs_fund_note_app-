console.log('starting app');
const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js'); 
const argv = yargs.argv;

/*let user = os.userInfo();

fs.appendFile('greetings.txt', `hello ${user.username}! You are ${notes.age}.`, (err) => {
	if(err) throw err;
	console.log('the "hello world" was append to file');
}); */

//var res = notes.addNote();
//console.log('Result:', notes.add(3, 2)); 

//console.log(_.isString(true));
//console.log(_.isString("Luis"));

//var filteredArray = _.uniq(['Luis', 1, 'Luis', 1, 2, 3, 4, 2]);

var command = process.argv[2];
console.log('Command: ', command);
console.log('Process', process.argv);
console.log('Yargs', argv);

if(command === 'add') {
	console.log('Adding new note');
	notes.addNote(argv.title, argv.body);
} else if(command === 'list') {
	console.log('List all notes');
	notes.getAll();
} else if(command === 'read'){
	notes.getNote(argv.title);
} else {
	console.log('Command not recognized');
}
