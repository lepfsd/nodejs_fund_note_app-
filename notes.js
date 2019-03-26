console.log('starting notes');
const fs = require('fs');
/*module.exports.addNote = () => {
	return 'new note';
};

module.exports.add = (a, b) => {
	return a + b;
} */

var fetchNotes = () => {
	try {
		var notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	} catch(e) {
		return [];
	}
};

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
	//console.log('Adding note', title, body);
	var notes = fetchNotes();
	var note = {
		title,
		body
	};

	var duplicateNotes = notes.filter((note) => note.title === title);

	if(duplicateNotes.length === 0) {
		notes.push(note);
		saveNotes(notes);
		return note;
	}
};

var getAll = () => {
	var notes = fetchNotes();
	return notes;
};

var getNote = (title) => {
	var notes = fetchNotes();
	var filteredNotes = notes.filter((note) => note.title === title);
	return filteredNotes[0];
};

var removeNote = (title) => {
	var notes = fetchNotes();
	var filteredNotes = notes.filter((note) => note.title !== title);
	saveNotes(filteredNotes);
	return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
	console.log('---');
	console.log(`title: ${note.title}`);
	console.log(`body: ${note.body}`);
}

module.exports = {
	addNote,
	getAll,
	getNote
};