console.log('starting notes');

/*module.exports.addNote = () => {
	return 'new note';
};

module.exports.add = (a, b) => {
	return a + b;
} */

var addNote = (title, body) => {
	console.log('Adding note', title, body);
};

var getAll = () => {
	console.log('Getting all notes');
};

var getNote = (title) => {
	console.log('Getting note', title);
};

module.exports = {
	addNote,
	getAll,
	getNote
};