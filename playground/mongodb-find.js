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
	const db = client.db('sample');

	db.collection('test').find().count().then((count) =>{
		console.log(`test database with count: ${count}`);
		console.log(JSON.stringify(count, undefined, 2));
	}, (err) =>{
		console.log('Unable to fetch data', err);
	});

	//Closing 
	client.close();
});