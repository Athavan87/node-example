//Dependencies
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//Connect to mongoDB
MongoClient.connect('mongodb://localhost/sample', (err, client) =>{
	if (err) {
		return console.log('Unable to connect MongoDB');
	}
	console.log('Connected to MongoDb');

	//Defining database
	//const db = client.db('sample');

	//insert into database
	// db.collection('new_Test').insertOne({
	// 	name: 'Athavan',
	// 	age: 24,
	// 	location: 'Dindigul'
	// }, (err, result) =>{
	// 	if (err) {
	// 		return console.log('Unable to insert', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
	// });

	//Closing 
	client.close();
});