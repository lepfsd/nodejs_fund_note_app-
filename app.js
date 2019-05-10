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
	var note = notes.addNote(argv.title, argv.body);
	if(note) {
		console.log('note created!'); 
		notes.logNote(note);
	} else {
		console.log('note taken');
	}
} else if(command === 'list') {
	var allNotes = notes.getAll();
	console.log(`Printing ${notes.length} notes.`);
	allNotes.forEach((notes) => notes.logNote(note));

} else if(command === 'read'){
	var note = notes.getNote(argv.title);
	if(note) {
		console.log('note infomation:');
		notes.logNote(note);
	} else {
		console.log('note not found');
	}
} else if (command === 'remove') {
	noteRemoved = notes.removeNote(argv.title);
	var message = noteRemoved ? `note: ${argv.title} deleted!` : `note: ${argv.title} not found!`;
	console.log(message);
} else {
	console.log('Command not recognized');
}
