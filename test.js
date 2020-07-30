var mongoose = require('mongoose');

function connect() {
	return mongoose.connect('mongodb://localhost:27017/stuff');
}

var student = new mongoose.Schema(
	{
		firstName    : {
			type     : String,
			required : true,
			unique   : true,
			default  : false
		},
		//add an array type
		favoriteFood : [
			{
				type : String
			}
		],
		//nested data structures and we can set validation
		info         : {
			school   : {
				type : String
			},
			shoeSize : {
				type : Number
			}
		}
	},
	{ timestamps: true }
);

var Student = mongoose.model('student', student);

connect()
	.then(async function connected(connection) {
		var student = await Student.create({ firstName: 'Marvel' });
		//helpful methods to query: basic we can create our own
		var found = await Student.find({ firstName: 'Somename' });
		var foundById = await Student.findById('');
		var update = await Student.findByidAndUpdate('saffd', {});
		var remove = await Student.findByidAndRemove('saffd', {});
		var deleteID = await Student.findByidAndDelete('saffd', {});
		console.log(student);
	})
	.catch(function catchError(error) {
		console.error(error);
	});
